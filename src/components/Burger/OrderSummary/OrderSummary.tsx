import React from 'react'
import { Ingredients, IngredientsDefinition, CustomizableSupportedIngredients } from '../../../core/Ingredients'
import Button, { ButtonTypes } from '../../UI/Button/Button'

interface Props {
    ingredients: Ingredients,
    accept: Function,
    cancel: Function
};

const OrderSummary = (props: Props) => {
    return (
        <React.Fragment>
            <h3>Your Order</h3>
            <p>Your delicious burger</p>
            <ul>
                {
                    (Object.keys(props.ingredients) as CustomizableSupportedIngredients[]).map(ing => {
                        if (props.ingredients[ing] > 0) {
                            return <li key={ing}>{IngredientsDefinition[ing].label}: {props.ingredients[ing]}</li>
                        } else {
                            return null;
                        }
                    })
                }
            </ul>
            <p>Contine to checkout?</p>
            <Button type={ButtonTypes.SUCCESS} label="CONTINUE" clicked={props.accept} />
            <Button type={ButtonTypes.DANGER} label="CANCEL" clicked={props.cancel} />
        </React.Fragment>
    )
}

export default OrderSummary
