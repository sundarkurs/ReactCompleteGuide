import React, { Component } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const INGREDIENT_PRICES = {
  salad: 1,
  cheese: 1,
  meat: 2,
  bacon: 2,
};

class BurgerBuilder extends Component {

  state = {
    // ingredients: {
    //   salad: 0,
    //   cheese: 0,
    //   meat: 0,
    //   bacon: 0,
    // },
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false
  };

  componentDidMount() {
    axios.get("/ingredients.json")
      .then(response => {
        this.setState({ ingredients: response.data });
      })
      .catch(error => {
        this.setState({ error: true });
      })
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {

    const queryParams = [];
    for (let i in this.state.ingredients) {
      queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
    }

    const queryString = queryParams.join('&');

    this.props.history.push({
      pathname: 'checkout',
      search: '?' + queryString
    });



    // this.setState({ loading: true });

    // const payload = {
    //   ingredients: this.state.ingredients,
    //   price: this.state.totalPrice,
    //   customer: {
    //     name: "Sundar",
    //     email: "sundar@sun.com",
    //     address: {
    //       location: "Ideal homes",
    //       city: "Bangalore",
    //       zipCode: "560098",
    //       country: "India"
    //     }
    //   },
    //   deliveryMethod: "Quick"
    // };

    // axios.post("/orders.json", payload)
    //   .then(response => {
    //     this.setState({ loading: false, purchasing: false });
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     this.setState({ loading: false, purchasing: false });
    //     console.log(error);
    //   })


  };

  updatePurchaseState() {
    const ingredients = { ...this.state.ingredients };
    const values = Object.keys(ingredients)
      .map((igKey, index) => {
        return ingredients[igKey];
      })
      .reduce((values, el) => {
        return values + el;
      }, 0);

    this.setState({ purchasable: values > 0 });
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const updateIngredients = { ...this.state.ingredients };
    updateIngredients[type] = newCount;

    const oldTotal = this.state.totalPrice;
    const newTotal = oldTotal + INGREDIENT_PRICES[type];

    this.setState(
      { ingredients: updateIngredients, totalPrice: newTotal },
      function () {
        // Calling update method on callback to get the latest state otherwise
        // the state will return old because it's state updates are asynchronous
        this.updatePurchaseState();
      }
    );
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }

    const newCount = oldCount - 1;
    const updateIngredients = { ...this.state.ingredients };
    updateIngredients[type] = newCount;

    const oldTotal = this.state.totalPrice;
    const newTotal = oldTotal - INGREDIENT_PRICES[type];

    this.setState(
      { ingredients: updateIngredients, totalPrice: newTotal },
      function () {
        this.updatePurchaseState();
      }
    );
  };

  render() {

    // To disable the less button in the burger controls
    const lessDisableInfo = { ...this.state.ingredients };
    for (let key in lessDisableInfo) {
      lessDisableInfo[key] = lessDisableInfo[key] <= 0;
    }

    // Model conten will be Spinner or Order summary
    let modelChildrens = null;

    if (this.state.loading) {
      modelChildrens = <Spinner></Spinner>;
    }

    let burgerControlsJsx = this.state.error ? <p>Not able to load ingredients.</p> : <Spinner></Spinner>;

    if (this.state.ingredients) {

      modelChildrens = <OrderSummary
        ingredients={this.state.ingredients}
        purchaseContinue={this.purchaseContinueHandler}
        purchaseCancel={this.purchaseCancelHandler}
        totalPrice={this.state.totalPrice}
      ></OrderSummary>;

      burgerControlsJsx =
        <Auxiliary>
          <Burger ingredients={this.state.ingredients}></Burger>
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            lessDisableInfo={lessDisableInfo}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            purchase={this.purchaseHandler}
          ></BuildControls>
        </Auxiliary>;
    }

    return (
      <Auxiliary>

        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {modelChildrens}
        </Modal>

        {burgerControlsJsx}

      </Auxiliary>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
