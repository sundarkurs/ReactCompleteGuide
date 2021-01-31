import React, { Component } from 'react';
import { Route } from "react-router-dom";
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

    state = {
        ingredients: {
            salad: 1,
            cheese: 2,
            meat: 1,
            bacon: 1,
        },
        totalPrice: 0
    };

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;

        for (let param of query.entries()) {
            if (param[0] === 'price') {
                price = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }

        }

        this.setState({ ingredients: ingredients, totalPrice: price });
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.push('/checkout/contact-data');
    }

    render() {
        console.log(this.props);

        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}></CheckoutSummary>

                <Route exact path={this.props.match.path + '/contact-data'}
                    component={(props) => (<ContactData
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        {...this.props}></ContactData>)} />
            </div>
        );
    }
}

export default Checkout;