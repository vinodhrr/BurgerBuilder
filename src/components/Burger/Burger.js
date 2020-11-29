import React from 'react'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
import classes from './Burger.module.css'

const burger = props => {
    console.log(props)
    let transformedIngredient = Object.keys(props.ingredients).map(igname=>{
        return [...Array(props.ingredients[igname])].map((_,j)=>{
            return <BurgerIngredients key={igname + j} type={igname}/>
        }
    )
    })
    .reduce((arr,el)=>{
        return arr.concat(el)
    },[])
    if(transformedIngredient.length == 0)
        transformedIngredient=(<p>Please Add Ingredient</p>)
    return(
        <div className={classes.Burger}>
            {
                <div>
                    <BurgerIngredients type="topbun"/>
                    {transformedIngredient}
                    <BurgerIngredients type="bottombun"/>
                </div>
            }
        </div>
    );
}

export default burger