import * as actionTypes from './actionTypes'
import axios from '../../axios'

export const addIngredient = name => {
    return{
        type : actionTypes.ADD_INGREDIENT,
        ingredientName : name
    }
}

export const removeIngredient = name => {
    return{
        type : actionTypes.REMOVE_INGREDIENT,
        ingredientName : name
    }
}

export const setIngredient = ingredients => {
    return{
        type : actionTypes.SET_INGREDIENT,
        ingredients : ingredients
    }
}

export const fetchIngredientFailed = ingredients => {
    return{
        type : actionTypes.FETCH_INGREDIENT_FAILED,
    }
}

export const setBasePrice = basePrice => {
    return{
        type : actionTypes.SET_BASE_PRICE,
        totalPrice : basePrice
    }
}

export const fetchBasePriceFailed = ingredients => {
    return{
        type : actionTypes.FETCH_BASE_PRICE_FAILED
    }
}

export const initIngredient = name => {
    return dispatch => {
        axios.get('https://react-burger-90e40.firebaseio.com/ingredients.json')
        .then(response => {
            console.log("server response...", response.data)
            dispatch(setIngredient(response.data))
        }
        )
        .catch(error => {
            alert("Server Busy")
            dispatch(fetchIngredientFailed());
        });

        axios.get('https://react-burger-90e40.firebaseio.com/basePrice.json')
        .then(response => {
            dispatch(setBasePrice(response.data))
        })
        .catch(error => {
            dispatch(fetchBasePriceFailed())
        }

        )
    }
}