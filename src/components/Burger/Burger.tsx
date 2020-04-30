import React from 'react';
import classNames from './Burger.module.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import { SupportedIngredients, Ingredients } from '../../core/Ingredients';

interface Props {
    ingredients: Ingredients
};

const Burger = (props: Props) => {
    const ing = Object.keys(props.ingredients),
          amounts = Object.values(props.ingredients);

    let process = ing.reduce((accum: any[], ingredient: any, i) => {
        accum = accum.concat(Array(amounts[i]).fill(null).map((_, f) => <BurgerIngredient type={ingredient} key={ingredient + i + f} />));
        return accum;
    }, []);

    if (!process.length) {
        process = [<p key="none">Please start adding Ingredients</p>]
    }

    return (
        <div className={classNames.Burger}>
            <BurgerIngredient type={SupportedIngredients.BreadTop} />
            {process}
            <BurgerIngredient type={SupportedIngredients.BreadBottom} />
        </div>
    );
};

export default Burger;
