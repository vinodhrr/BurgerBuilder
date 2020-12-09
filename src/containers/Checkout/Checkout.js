import React, {Component} from 'react'
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary'
import ContactData from './contactData'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

class Checkout extends Component {
    checkoutCancelled = () => {
        this.props.history.goBack()
    }
    checkoutContinued = () => {
        this.props.history.replace('/checkout/contact-data')
    }
    // componentWillMount(){
    //     const query = new URLSearchParams(this.props.location.search)
    //     const ingredients = {}
    //     let price = 0;
    //     for (let parm of query.entries){
    //         if(param[0] === 'price')
    //             price=param[1]
    //         else    
    //             ingredients[param[0]]=+param[1]
    //     }
    // }
    render(){
        console.log("checkout component rendered",  this.props)
        // return(<div><Route path={this.props.match.url +'/contact-data'} render={()=><ContactData ingredients={this.state.ingredients} price={this.state.price}/>}/></div>)

        let summary = <Redirect to="/"/>
        if(this.props.ing){
            const purchasedRedirect =  this.props.purchased ? <Redirect to='/'/> : null
            summary = <div>
                {purchasedRedirect}
                <CheckoutSummary ingredients={this.props.ing}
                checkoutCancelled={this.checkoutCancelled}
                checkoutContinued={this.checkoutContinued}/>
                <Route path={this.props.match.url + '/contact-data'}
                component={ContactData}
                />
            </div>
        }
        return summary
    }
}

const mapStateToProps = state => {
    return{
        ing : state.burgerBuilder.ingredients,
        purchased : state.order.purchased
    }
}

export default connect(mapStateToProps)(Checkout)