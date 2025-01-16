import React from 'react'
import './SupplementItem.css'
import { assets } from '../../assets/assets'

const SupplementItem = ({id,name,price,description,image}) => {
  return (
    <div className='supplement-item'>
         <div className="supplement-item-img-container">
            <img className='food-item-image' src={image} alt="" />
         </div>
         <div className="food-item-info">
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