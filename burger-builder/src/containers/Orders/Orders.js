
import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {

    state = {
        orders: [],
        loading: true
    };

    componentDidMount() {
        axios.get("/orders.json")
            .then(response => {
                const fetchedOrders = [];
                for (let key in response.data) {
                    fetchedOrders.push({ ...response.data[key], id: key });
                }

                this.setState({ loading: false, orders: fetchedOrders });
            })
            .catch(error => {
                console.log(error);
                this.setState({ loading: false });
            })
    }

    render() {
        let jsx = '';

        if (this.state.loading) {
            jsx = <Spinner></Spinner>;
        } else if (this.state.orders.length > 0) {
            jsx = this.state.orders.map((order) => {
                return <Order key={order.id} ingredients={order.ingredients} price={+order.price}></Order>
            });
        }
        return (
            <div>
                {jsx}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);