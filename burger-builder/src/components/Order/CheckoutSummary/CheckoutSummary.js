import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from "./CheckoutSummary.module.css";

const checkoutSummary = (props) => {

    return (
        <div className={classes.CheckoutSummary}>
            <h3> Continue checkout </h3>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Burger ingredients={props.ingredients}></Burger>
            </div>
            <Button btnType="Danger" clicked={props.checkoutCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={props.checkoutContinued}>Continue</Button>
        </div>
    );
}

export default checkoutSummary;