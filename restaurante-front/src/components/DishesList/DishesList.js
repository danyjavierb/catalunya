import React from "react";
import './DishesList.css';
import Dish from '../Dish/Dish';
import Car from '../Car/Car';

const DishesList = () => {

    const dishes = [{
        id: 1,
        nombre: 'hamburguesa sencilla',
        precio: 20000,
        activo: true,
        imagen: 'https://via.placeholder.com/300/000000/FFFFFF/?text=plato',
        createdAt: '2021-07-10T16:13:00.000Z',
        updatedAt: '2021-07-10T16:13:00.000Z'
    }];


    // TODO si el usuario no está autenticado redireccionar al Login

    return (
        <div className="container row">
            <div className="col-md-9 m-auto list">
                <header className="jumbotron">
                    <h3>
                        Lista de platos
                    </h3>
                </header>
                {
                    dishes && dishes.map((dish) => {
                        return <Dish dish={dish} />;
                    })
                }
            </div>
            <div className="col-md-3">
                <Car />
            </div>
        </div>
    );
};

export default DishesList;
