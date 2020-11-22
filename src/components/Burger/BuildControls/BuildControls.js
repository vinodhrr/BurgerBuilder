import React from 'react'
import classes from './BuildControls.module.css'
import BuildControls from './BuildControl/BuildControl'

const control = [
    {label:"lettuce", type:"lettuce"},
    {label:"Tomato", type:"tomato"},
    {label:"Onion", type:"onion"},
    {label:"Cheese", type:"cheese"},
    {label:"Beef", type="beef"}
]

const BuildControls = props => {
    return(<div className={classes.BuildControls}>
            <p><strong>Total Price: {props.totalPrice}</strong></p>
            {control.map((ctrl)=>(
                <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                addIngredient={() => props.addIngredient(ctrl.type)}
                removeIngredient={() => props.removeIngredient(ctrl.type)}
                disabled={props.disableinfo[ctrl.type]}
                />
            ))}
            <button id="order"
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}
            >ORDER NOW</button>
    </div>);
}

export default BuildControls