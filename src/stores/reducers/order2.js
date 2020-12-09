import * as actionTypes from '../actions/actionTypes'

const initialState = {
    order : [],
    loading : false,
    purchased : false
}

const order2 = (state = initialState, action) => {
    console.log("order reducer ...",action);
    console.log("order state ...",state);
    const newOrder = {
        ...action.orderData,
        id : action.orderId
    }

    switch(action.type){
        case actionTypes.PURCHASE_INIT :
            return{
                ...state,
                purchased : false
            }
        case actionTypes.PURCHASE_BURGER_START : 
            return{
                ...state,
                loading : true
            }
        case actionTypes.PURCHASE_BURGER_SUCCESS : 
            return{
                ...state,
                order : state.order.concat(newOrder),
                loading : false,
                purchased : true
            }
        case actionTypes.PURCHASE_BURGER_FAIL :
            return{
                ...state,
                loading : false
            }
        case actionTypes.FETCH_ORDERS_START :
            return{
                ...state,
                loading : true
            }
        case actionTypes.FETCH_ORDERS_SUCCESS : 
            return{
                ...state,
                orders : action.orders,
                loading : false
            }
        case actionTypes.FETCH_ORDERS_FAIL :
            return{
                ...state,
                loading : false
            }
    }
    return state
}

export default order2