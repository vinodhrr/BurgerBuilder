import * as actionTypes from '../actions/actionTypes'

const initialState = {
    ingredients : null,
    totalPrice : 0,
    error : false
}

const INGREDIENTS_PRICE = {
    lettuce : 0.5,
    tomato : 2.0,
    onion : 3,
    cheese : 1,
    beef : 5
}

const reducer = (state = initialState, action) => {
    console.log("Reducer ...", action)
    switch(action.type){
        case actionTypes.ADD_INGREDIENT:
            return{
                ...state,
                ingredients : {
                    ...state.ingredients,
                    [action.ingredientName] : state.ingredients[action.ingredientName] + 1
                },
                totalPrice : state.totalPrice + INGREDIENTS_PRICE[action.ingredientName]
            }
        case actionTypes.REMOVE_INGREDIENT:
            return{
                ...state,
                ingredients : {
                    ...state.ingredients,
                    [action.ingredientName] : state.ingredients[action.ingredientName] - 1
                },
                totalPrice : state.totalPrice - INGREDIENTS_PRICE[action.ingredientName]
            }
        case actionTypes.SET_INGREDIENT:
            return{
                ...state,
                ingredients : action.ingredients,
                error : false
            }
        case actionTypes.FETCH_INGREDIENT_FAILED:
            return{
                ...state,
                error : true
            }
        case actionTypes.SET_BASE_PRICE:
            return{
                ...state,
                totalPrice : action.totalPrice
            }
        case actionTypes.FECTH_BASE_PRICE_FAILED:
            return{
                ...state,
                error : true
            }
    }
    return state
}


export default reducer