import React from 'react'
import classes from './BuildControls.module.css';
import { IngredientsDefinition, CustomizableSupportedIngredients } from '../../../core/Ingredients';
import BuildControl from './BuildControl/BuildControl';

interface Props {
    add: Function,
    remove: Function,
    disables: {
        [key in CustomizableSupportedIngredients]: boolean
    },
    canPurchase: boolean,
    purchase: Function
}


const BuildControls = (props: Props) => {
    return (
        <div className={classes.BuildControls}>
            {
                Object.entries(IngredientsDefinition).map(pair => {
                    if (pair[1]) {
                        return <BuildControl
                            label={pair[1].label}
                            key={pair[1].type}
                            add={ () => props.add(pair[1].type) }
                            remove={ () => props.remove(pair[1].type) }
                            isDisabled={ props.disables[pair[1].type] }
                        />
                    }
                    return null;
                })
            }
            <button disabled={!props.canPurchase} className={classes.OrderButton} onClick={() => props.purchase()}>ORDER NOW</button>
        </div>
    )
}

export default BuildControls
