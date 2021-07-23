import React from "react";
import { Dash } from 'react-bootstrap-icons';
import { Plus } from 'react-bootstrap-icons';
import {Nav, Button} from "react-bootstrap";

const Car = () => {

    const carItems = [
        {
            nombre: 'hamburguesa sencilla',
            id: 1,
            cantidad: 1,
            precio: 20000
        },
        {
            nombre: 'papas francesas',
            id: 2,
            cantidad: 1,
            precio: 10000
        }
    ];
    const message = 'No hay items en el carrito de compras';


    const handleAddUnit = (dish) => {
        // TODO
    };

    const handleRemoveUnit = (dish) => {
        // TODO
    };

    const handleOnSubmitOrder = () => {
        // TODO
    };

    const getTotal = () => {
        // TODO
    };

    return (
        <Nav className="col-md-2 d-none d-md-block bg-light sidebar"
             activeKey="/home"
             onSelect={selectedKey => alert(`selected ${selectedKey}`)}
        >
            <h5>{message}</h5>
            <div className="sidebar-sticky"/>
            {
                carItems.map((item) => {
                    return item.cantidad > 0 &&
                         <Nav.Item>
                                    <h6>{item.nombre}</h6>
                                    <span>Cantidad: {item.cantidad}</span>
                                    <Dash onClick={() => handleRemoveUnit(item)}/>
                                    <Plus onClick={() => handleAddUnit(item)}/>
                        </Nav.Item>
                })
            }
            <div>
                Total: {carItems.length && getTotal()}
            </div>
            <Button onClick={() => handleOnSubmitOrder()}>Hacer pedido</Button>
        </Nav>

    );
};

export default Car;
