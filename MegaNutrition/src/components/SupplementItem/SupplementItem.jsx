import React, { useContext} from 'react'
import './SupplementItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const SupplementItem = ({id,name,price,description,image}) => {

  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div className='supplement-item'>
         <div className="supplement-item-img-container">
            <img className='supplement-item-image' src={image} alt="" />
            {!cartItems[id]
              ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
              :<div className='supplement-item-counter'>  
                  <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                  <p>{cartItems[id]}</p>
                  <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
              </div>
            }
         </div>
         <div className="supplement-item-info">
            <div className="supplement-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="supplement-item-desc">{description}</p>
            <p className="supplement-item-price">${price}</p>
         </div>
    </div>
  )
}

export default SupplementItem