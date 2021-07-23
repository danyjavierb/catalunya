import React from "react";
import { CartPlusFill } from 'react-bootstrap-icons';
import { CartPlus } from 'react-bootstrap-icons';
import './Dish.css';
import {Nav} from "react-bootstrap/Nav";


const DishesList = (dish) => {

    const handleAddToCart = (dish) => {
        // TODO
    };

    return (
         <div className="dish">
             <img src={dish.imagen}/>
            <h4>{dish.nombre}</h4>
             <h6>{dish.precio}</h6>

             <span className="addToCart" >
                 Agregar al carrito
                 { dish.activo ? <CartPlusFill onClick={() => handleAddToCart(dish)} /> : <CartPlus /> }
             </span>
        </div>
    );
};

export default DishesList;
