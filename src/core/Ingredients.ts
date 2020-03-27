export enum SupportedIngredientsLabels {
    BreadBottom = 'Bottom bun',
    BreadTop = 'Top bun',
    Meat = 'Paty',
    Cheese = 'Cheese',
    Salad = 'Salad',
    Bacon = 'Bacon'
};

export enum SupportedIngredients {
    BreadBottom = 'BreadBottom',
    BreadTop = 'BreadTop',
    Meat = 'Meat',
    Cheese = 'Cheese',
    Salad = 'Salad',
    Bacon = 'Bacon'
};

type IngredientsDefinitionProps = {
    label: SupportedIngredientsLabels,
    type: CustomizableSupportedIngredients,
    price: number
};

export type CustomizableSupportedIngredients = Exclude<SupportedIngredients, SupportedIngredients.BreadBottom | SupportedIngredients.BreadTop>;

export type Ingredients = {
    [key in CustomizableSupportedIngredients]: number;
};

type IngredientsMapType = {[key in CustomizableSupportedIngredients]: IngredientsDefinitionProps};

export const IngredientsDefinition: IngredientsMapType = {
    [SupportedIngredients.Cheese]: {
        label: SupportedIngredientsLabels.Cheese,
        type: SupportedIngredients.Cheese,
        price: .5
    },
    [SupportedIngredients.Bacon]: {
        label: SupportedIngredientsLabels.Bacon,
        type: SupportedIngredients.Bacon,
        price: .6
    },
    [SupportedIngredients.Salad]: {
        label: SupportedIngredientsLabels.Salad,
        type: SupportedIngredients.Salad,
        price: 0
    },
    [SupportedIngredients.Meat]: {
        label: SupportedIngredientsLabels.Meat,
        type: SupportedIngredients.Meat,
        price: 1
    },
};
