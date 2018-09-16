export const ADD_INGREDIENT = 'ADD_INGDERIENT'
export const REMOVE_INGREDIENT = 'REMOVE_INGDERIENT'

export const addIngredient = (name) => {
    return {
        type: ADD_INGREDIENT,
        name,
    }
}

export const removeIngredient = (name) => {
    return {
        type: REMOVE_INGREDIENT,
        name,
    }
}
