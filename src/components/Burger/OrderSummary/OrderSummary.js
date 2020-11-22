import React,{useEffect} from 'react'
import Auxillary from '../../../hoc/Auxillary'
import Button from '../../UI/Button/Button'

const OrderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map((igkeys) => {
            return(<li key={igkeys}>
                <span style={{textTransform : "capitalize"}}>{igkeys}:</span>{props.iningredients[igkeys]}
            </li>);
        })
    // useEffect(()=>{
    //     console.log("OrderSummary rendered")
    // })
    return(
        <Auxillary>
            <h3>Your Order</h3>
            <p>A delicious Burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price : {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout ?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Auxillary>

    )
}

export default OrderSummary;