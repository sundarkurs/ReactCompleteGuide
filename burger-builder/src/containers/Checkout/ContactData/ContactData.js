import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    };

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props)


        this.setState({ loading: true });

        const payload = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: "Sundar",
                email: "sundar@sun.com",
                address: {
                    location: "Ideal homes",
                    city: "Bangalore",
                    zipCode: "560098",
                    country: "India"
                }
            },
            deliveryMethod: "Quick"
        };

        axios.post("/orders.json", payload)
            .then(response => {
                this.setState({ loading: false });
                console.log(response);
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false });
                console.log(error);
            })


    }

    render() {
        let form = '';
        if (this.state.loading) {
            form = <Spinner></Spinner>
        }
        else {
            form = <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
                <input className={classes.Input} type="email" name="email" placeholder="Your Email" />
                <input className={classes.Input} type="text" name="postalCode" placeholder="Your Postal Code" />
                <input className={classes.Input} type="text" name="street" placeholder="Your Street" />

                <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
            </form>
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>

                {form}

            </div>
        );
    }
}

export default ContactData;