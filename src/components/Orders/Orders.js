import React, { Component } from 'react'
import Order from './Order'
import axios from '../../axios'
import {connect} from 'react-redux'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import { fetchOrders } from '../../stores/actions/index'
import Spinner from '../UI/Spinner/Spinner'

class Orders extends Component{
    componentDidMount(){
        console.log("component Order will be mounted");
        this.props.onFetchOrders()
    }
    render(){
        console.log("Component Order props...", this.props);
        // this.state.orders.map(order => {
        //     console.log(order)
        // })
        let orders = <Spinner/>;
        if(this.props.orders)
        {
            console.log("mapping of orders started");
            orders=this.props.orders.map(order => {
                return(<div key={order.id}>
                <Order
                ingredients={order.ingredients}
                price={order.price}
                />
                </div>)
            });
        }
        return(<div>
            {orders}
        </div>)
    }
}

const mapStateToProps = state => {
    console.log("mapStateToProps", state);
    return{
        orders : state.order.orders,
        loading : state.order.loading
    }
}

const mapDispatchToProps = dispatch => {
    console.log("mapDispatchToProps");
    return{
        onFetchOrders : () => dispatch(fetchOrders())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Orders,axios))