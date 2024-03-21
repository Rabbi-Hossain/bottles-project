import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addToLS, getStoredCart } from '../../utilities/Localstorage';
import Cart from '../Cart/Cart';
const Bottles = () => {

    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    useEffect(() => {
        
        console.log('call the use effect data', bottles.length);

        if (bottles.length) {
            const storeCart = getStoredCart()
            // console.log(storeCart, bottles);

            const savedCart = []
            for(const id of storeCart){

                console.log(id);

            const bottle = bottles.find(bottle => bottle.id === id)
            if(bottle){
                savedCart.push(bottle)
            }
            }
            console.log( savedCart);
            setCart(savedCart)
            }
        }, [bottles])

    const bottlesHandler = bottle => {
        const newCart = [...cart, bottle]
        setCart(newCart)
        addToLS(bottle.id)
    }



    return (
        <div>
            <h2>Bottles:{bottles.length}</h2>
            
            <Cart cart={cart}></Cart>
            <div className='bottles-container'>
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottlesHandler={bottlesHandler} bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;