import React from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.module.css';
import { SupportedIngredients } from '../../../core/Ingredients';


interface Props {
    type: SupportedIngredients
}

const BurgerIngredient = (props: Props) => {
    let ingredient = null;

    switch(props.type) {
        case SupportedIngredients.BreadBottom:
            ingredient = <div className={classes.BreadBottom}></div>;
            break;

        case SupportedIngredients.BreadTop:
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
            break;

        case SupportedIngredients.Meat:
            ingredient = <div className={classes.Meat}></div>;
            break;

        case SupportedIngredients.Cheese:
            ingredient = <div className={classes.Cheese}></div>;
            break;

        case SupportedIngredients.Salad:
            ingredient = <div className={classes.Salad}></div>;
            break;

        case SupportedIngredients.Bacon:
            ingredient = <div className={classes.Bacon}></div>;
            break;
    }

    return ingredient;
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;
