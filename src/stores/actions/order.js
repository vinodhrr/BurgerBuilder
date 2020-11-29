import * as actionTypes from './actionTypes'
import axios  from '../../axios'

export const purchaseBurgerSuccess = (id, orderData) => {
    return{
        type : actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId : id,
        orderData : orderData
    }
}

export const purchaseBurgerFail = error => {
    return{
        type : actionTypes.PURCHASE_BURGER_FAIL,
        error : error
    }
}

export const purchaseBurgerStart = () => {
    return{
        type : actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseInit = () => {
    return{
        type : actionTypes.PURCHASE_INIT
    }
}

export const purchaseBurger = orderData => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('./orders.json', orderData)
        .then(response => {
            console.log(response.data)
            dispatch(purchaseBurgerSuccess(response.data.name, orderData))
        })
        .catch(error => {
            dispatch(purchaseBurgerFail(error))
        });
    }
}

export const fetchOrdersFail = error => {
    return{
        type : actionTypes.FETCH_ORDERS_FAIL,
        error : error
    }
}

export const fetchOrdersStart = () => {
    return{
        type : actionTypes.FECTH_ORDERS_START
    }
}

export const fetchOrdersSuccess = orders => {
    return{
        type : actionTypes.FECTH_ORDERS_START,
        orders : orders
    }
}

export const fetchOrders =() => {
    return dispatch => {
        console.log("dispatching fetchOrdersStart")
        dispatch(fetchOrdersStart())
        console.log("dispatched fetchOrdersStart")
        axios.get('/orders.json')
        .then(response => {
            console.log("order received")
            const parseData = []
            for (let key in response.data){
                parseData.push({
                    ...response.data[key],
                    id : key
                })
            }
            dispatch(fetchOrdersSuccess(parseData))
        })
        .catch(error => {
            console.log("error in receiving orders")
            dispatch(fetchOrdersFail(error))
        })
        console.log("dispatched everything")
    }
}

