import React from 'react';
import './Bottle.css'

const Bottle = ({bottle, bottlesHandler}) => {
    
    const {img, price, name} = bottle
    return (
        <div className='bottle-container'>
            <img src={img} alt="" />
            <h2>Name:{name}</h2>
            <p>Price:{price}</p>
            <button onClick={()=>bottlesHandler(bottle)}>purches</button>
        </div>
    );
};

export default Bottle;