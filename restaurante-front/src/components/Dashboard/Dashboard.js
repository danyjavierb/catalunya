import React, { useEffect } from "react";
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";


import { getDishes } from "../../actions/dish";

const Dashboard = () => {

    useEffect(() => {
        dispatch(getDishes());
    }, []);

    const { user: currentUser } = useSelector((state) => state.auth);
    const { dishes } = useSelector((state) => state.dish);

    const dispatch = useDispatch();


    if (!currentUser) {
        return <Redirect to="/login" />;
    }

    return (
        <div className="container">
            <div className="col-md-2">
                <Car />
            </div>
            <div className="col-md-10 m-auto">
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
        </div>
    );
};

export default Dashboard;
