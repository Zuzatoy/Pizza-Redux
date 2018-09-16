import { ADD_INGREDIENT, REMOVE_INGREDIENT } from './../actions/ingredients'

export const ingredients = (state = {}, action) => {
    switch (action.type) {
        case ADD_INGREDIENT:
            return {
                ...state,
                [action.name]: true,
            }

        case REMOVE_INGREDIENT:
        return {
            ...state,
            [action.name]: false,
        }

        default:
            return state
    }
}
