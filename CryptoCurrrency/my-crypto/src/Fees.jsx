import React from 'react'
import './App.css';
function Fees({percent,dis}) {
    return (
        <div className=' fees '>
            <h1 className='pl-4 fw-light color-#70538D'> {percent}</h1>
            <h4 className='pl-4 fw-light color-#70538D'>{dis} </h4>
        </div>
    )
}

export default Fees
