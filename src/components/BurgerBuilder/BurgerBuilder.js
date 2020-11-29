import React, {Component} from 'react'
import Auxillary from '../../hoc/Auxillary'
import Burger from '../Burger/Burger'
import BuildControls from '../Burger/BuildControls/BuildControls'
import Modal from '../UI/Modal/Modal'
import OrderSummary from '../Burger/OrderSummary/OrderSummary'
import axios from '../../axios'
import Spinner from '../UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import {connect} from 'react-redux'
import * as action from  '../../stores/actions/index'

class BurgerBuilder extends Component{

    state={
        purchasing : false
    }

    componentDidMount(){
        console.log("componentDidMount in BurgerBuilder")
        this.props.onInitIngredients()
        // console.log(this.props)
        // axios.get('https://react-burger-90e40.firebaseio.com/ingredients.json')
        // .then(response=>{
        //     this.setState({ingredients : response.data})
        // })
        // .catch((error)=>{
        //     this.setState({error : true})
        // })
    }
    updatePurchaseHandler = updatedIngredients => {
        let oldIngredients = {...updatedIngredients}
        const sum = Object.keys(oldIngredients)
        .map(
            igName => oldIngredients[igName]
        )
        .reduce(
            (sum,el) => sum+el
        )
        return sum>0
    }
    // addIngredientHandler = type => {
    //     console.log("addIngredientHandler type : ", type)
    //     const oldQuantity = this.state.ingredients[type]
    //     const updatedIngredients={...this.state.ingredients}
    //     updatedIngredients[type]=oldQuantity+1;
    //     const oldPrice = this.state.totalPrice;
    //     const updatedPrice = oldPrice + INGREDIENTS_PRICE[type]
    //     this.setState({
    //         ingredients : updatedIngredients,
    //         totalPrice : updatedPrice
    //     });
    //     this.updatePurchaseHandler(updatedIngredients)
    // }
    // removeIngredientHandler = type => {
    //     console.log("removeIngredientHandler type : ", type)
    //     const oldQuantity = this.state.ingredients[type]
    //     if(oldQuantity == 0)
    //         return
    //     const updatedIngredients={...this.state.ingredients}
    //     updatedIngredients[type]=oldQuantity-1;
    //     const oldPrice = this.state.totalPrice;
    //     const updatedPrice = oldPrice - INGREDIENTS_PRICE[type]
    //     this.setState({
    //         ingredients : updatedIngredients,
    //         totalPrice : updatedPrice
    //     });
    //     this.updatePurchaseHandler(updatedIngredients)
    // }    

    purchaseHandler = () => {
        this.setState({purchasing : true});
    }
    purchaseCancelHandler = () => {
        this.setState({purchasing : false});
    }
    purchaseContinueHandler = () => {
        // const queryParams = []
        // for(let i in this.state.ingredients){
        //     queryParams.push(encodeURIComponent(i) + "=" +encodeURIComponent(this.state.ingredients[i]))
        // }
        // queryParams.push("price="+this.state.totalPrice)
        // const queryString =  queryParams.join("&")
        // this.props.history.push({
        //     pathname : '/Checkout',
        //     search : '' + queryString
        // })
        this.props.onInitPurchase()
        this.props.history.push('/Checkout');
    }
    render(){
        console.log("BurgerBuilder ...",this.props)
        const disableinfo = {...this.props.ing}
        for(let i in disableinfo){
            disableinfo[i]=disableinfo[i]<=0;
        }
        let orderSummary = null;
        let burger = this.props.error ? "Ingredients can't be loaded for now" : <Spinner/>
        if(this.props.ing)
        {
            burger=(<Auxillary><div><Burger ingredients={this.props.ing}/></div>
            <div><BuildControls
            addIngredient={this.props.onIngredientAdded}
            removeIngredient={this.props.onIngredientRemoved}
            disableinfo={disableinfo}
            purchasable={this.updatePurchaseHandler(this.props.ing)}
            totalPrice={this.props.totalPrice.toFixed(2)}
            ordered={this.purchaseHandler}/></div></Auxillary>)

            orderSummary=<OrderSummary
            ingredients={this.props.ing}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.props.purchaseContinueHandler}
            price={this.props.totalPrice}
            />
        }
        return(
            <Auxillary>
                <Modal show={this.state.purchasing} modalClosed = {this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Auxillary>
        );
    }
}

const mapStateToProps = state => {
    return{
        ing : state.burgerBuilder.ingredients,
        totalPrice : state.burgerBuilder.totalPrice,
        error : state.burgerBuilder.error
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onIngredientAdded : (ingName) => dispatch(action.addIngredient(ingName)),
        onIngredientRemoved : (ingName) => dispatch(action.removeIngredient(ingName)),
        onInitIngredients : () => dispatch(action.initIngredient()),
        onInitPurchase : () => dispatch(action.purchaseInit())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder,axios));