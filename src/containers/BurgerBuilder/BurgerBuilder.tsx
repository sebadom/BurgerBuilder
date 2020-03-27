import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger';
import { SupportedIngredients, Ingredients, CustomizableSupportedIngredients, IngredientsDefinition } from '../../core/Ingredients';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

interface Props {

}
interface State {
    ingredients: Ingredients,
    totalPrice: number
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
            totalPrice: 4
        };
    }

    addIngredientHandler(type: CustomizableSupportedIngredients) {
        this.changeQty(1, type);
    }

    changeQty(coef: -1|1, type:CustomizableSupportedIngredients) {
        const updatedCount = this.state.ingredients[type] + (1 * coef);

        const updatedIngredients = {
            ...this.state.ingredients,
            [type]: updatedCount
        };

        const price = this.state.totalPrice + (IngredientsDefinition[type].price * coef);

        this.setState({
            totalPrice: price,
            ingredients: updatedIngredients
        });
    }

    removeIngredientHandler(type: CustomizableSupportedIngredients) {
        if (this.state.ingredients[type] > 0) {
            this.changeQty(-1, type);
        }
    }

    render() {
        const disables:any = {};
        for (let key in this.state.ingredients) {
            disables[key] = !this.state.ingredients[key as CustomizableSupportedIngredients]
        }
        console.log(disables);
        return (
            <React.Fragment>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    add={this.addIngredientHandler.bind(this)}
                    remove={this.removeIngredientHandler.bind(this)}
                    disables={disables}/>
            </React.Fragment>
        )
    }
}
