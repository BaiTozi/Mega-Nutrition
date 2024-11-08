import React from 'react'
import './ExploreMenu.css'
import { supplements_list } from '../../assets/assets'

const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our supplements</h1>
        <p className='explore-menu-text'>Vse oshte ne sum go imzlis</p>
        <div className="explore-menu-list">
            {supplements_list.map((item,index)=>{
                return(
                    <div key={index} className='explore-menu-list-item'>
                        <img src={item.sup_image} alt="" />
                        <p>{item.sup_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu