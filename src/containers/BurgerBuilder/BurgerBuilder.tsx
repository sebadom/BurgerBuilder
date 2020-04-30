import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger';
import { SupportedIngredients, Ingredients, CustomizableSupportedIngredients, IngredientsDefinition } from '../../core/Ingredients';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

interface Props {

}
interface State {
    ingredients: Ingredients,
    totalPrice: number,
    purchasable: boolean
    purchasing: boolean
}

export default class BurgerBuilder extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            ingredients: {
                [SupportedIngredients.Salad]: 0,
                [SupportedIngredients.Bacon]: 0,
                [SupportedIngredients.Cheese]: 0,
                [SupportedIngredients.Meat]: 1
            },
            totalPrice: 4,
            purchasable: true,
            purchasing: false
        };
    }

    updatePurchasable(ingredients: Ingredients) {
        this.setState({
            purchasable: Object.values(ingredients).reduce((accum, i) => accum + i, 0) > 0
        });
    }

    changeQty(coef: -1|1, type:CustomizableSupportedIngredients) {
        const updatedCount = this.state.ingredients[type] + (1 * coef);

        const updatedIngredients = {
            ...this.state.ingredients,
            [type]: updatedCount
        };

        const price = this.state.totalPrice + (IngredientsDefinition[type].price * coef);

        this.updatePurchasable(updatedIngredients);
        this.setState({
            totalPrice: price,
            ingredients: updatedIngredients
        });
    }

    addIngredientHandler = (type: CustomizableSupportedIngredients) => {
        this.changeQty(1, type);
    }

    removeIngredientHandler = (type: CustomizableSupportedIngredients) => {
        if (this.state.ingredients[type] > 0) {
            this.changeQty(-1, type);
        }
    }

    purchasingHandler = () => {
        this.setState({
            purchasing: true
        });
    }

    cancelPurchaseHandler = () => {
        this.setState({
            purchasing: false
        });
    }

    acceptPurchaseHandler = () => {
        alert('Accepting purchase');
    }

    render() {
        const disables:any = {};

        for (let key in this.state.ingredients) {
            disables[key] = !this.state.ingredients[key as CustomizableSupportedIngredients]
        }

        return (
            <React.Fragment>
                <Modal show={this.state.purchasing} modalClosed={this.cancelPurchaseHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        accept={this.acceptPurchaseHandler}
                        cancel={this.cancelPurchaseHandler} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <div><p>Current price <strong>{this.state.totalPrice.toFixed(2)}</strong></p></div>
                <BuildControls
                    add={this.addIngredientHandler}
                    remove={this.removeIngredientHandler}
                    disables={disables}
                    canPurchase={this.state.purchasable}
                    purchase={this.purchasingHandler} />
            </React.Fragment>
        )
    }
}
