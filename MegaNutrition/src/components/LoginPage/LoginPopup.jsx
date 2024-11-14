import React, { useEffect } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import { auth, db } from '../../firebase/config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'


const LoginPopup = ({setShowLogin}) => {

    const [currState, setCurrState] = useState("Sign Up")
    const [email, setEmail] = useState("abc@gmail.com");
    const [password, setPassword] = useState("12345678");
    const [name, setName] = useState("");

    async function login() { 
        if(currState === "Login") { 
             signInWithEmailAndPassword(auth, email, password).then((user) => { 
                console.log(user.user)
             })
        } else if (currState === "Sign Up") {
            try {
                // Създаване на нов потребител с email и парола
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                // Запис в Firestore (потребителски данни)
                await setDoc(doc(db, "users", user.uid), {
                    name: name,  // добавяме името на потребителя
                    email: email,
                    createdAt: new Date()
                });

                console.log("User registered:", user);
            } catch (error) {
                console.error("Error registering user:", error);
            }
        }
    }
    

    return (
        <div className='login-popup'>
            <div className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Sign Up" &&
                        <input 
                            type="text" 
                            placeholder='Your Name' 
                            required 
                            value={name} 
                            onInput={(e) => setName(e.currentTarget.value)} // задаваме името
                        />}
                    <input 
                        type="email" 
                        placeholder='Your email' 
                        required 
                        value={email} 
                        onInput={(e) => setEmail(e.currentTarget.value)} 
                    />
                    <input 
                        type="password" 
                        placeholder='Password' 
                        required 
                        value={password} 
                        onInput={(e) => setPassword(e.currentTarget.value)} 
                    />
                </div>
                <button onClick={() => login()}>
                    {currState === "Sign Up" ? "Create account" : "Login"}
                </button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy</p>
                </div>
                {currState === "Login"
                    ? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
                    : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
                }
            </div>
        </div>
    )
}

export default LoginPopup