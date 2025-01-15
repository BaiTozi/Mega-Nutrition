import React, { useContext } from 'react'
import './SuplenentDisplay.css'
import { StoreContext } from '../../context/StroreContext'


const SuplenentDisplay = ({category}) => {

  const {sup_list} = useContext(StoreContext)

  return (
    <div className ='suplement_display' id='suplement-display'>
      <h2>Top Supplements near you</h2>
    </div>
  )
}

export default SuplenentDisplay