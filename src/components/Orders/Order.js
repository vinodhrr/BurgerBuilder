import React from 'react'
import classes from './Order.module.css'

const Order = props => {
    const Ingredients = [];
    for (let igName in props.ingredients){
        Ingredients.push({name : igName, content : props.ingredients[igName]});
    }
    return(<div className={classes.Order}>
        <p>{Ingredients.map(key => 
        <span
        key = {key["name"]}
        style = {{boxShadow : "0 2px 2pc #ccc",
                  border : "3px #eee",
                  boxSizing : "border-box",
                  paddingLeft : "5px",
                  margin : "10px auto"
                }}
                >
                    {key["name"]} : {key["content"]}
                </span>
            )}</p>
            <p>{props.price}</p>
    </div>);

}

export default Order