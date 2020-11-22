import React from 'react'
import classes from './BurgerIngredients.module.css'
import PropTypes from 'prop-types'

class BurgerIngredients extends React.Component{
    constructor(props){
        super(props);
        this.ingredient=null;
    }
    render(){
        switch(this.props.type){
                case('topbun')  : {
                                    this.ingredient=<div className={classes.topbun}></div>
                                  }
                case('lettuce') : {
                                    this.ingredient=<div className={classes.lettuce}></div>
                                  }
                case('tomato')  : {
                                    this.ingredient=<div className={classes.tomato}></div>
                                  }  
                case('onion')   : {
                                    this.ingredient=<div className={classes.onion}></div>
                                  }
                case('cheese')  : {
                                    this.ingredient=<div className={classes.cheese}></div>
                                  }
                case('beef')    : {
                                    this.ingredient=<div className={classes.beef}></div>
                                  }
                case('bottombun') : {
                                        this.ingredient=<div className={classes.bottombun}></div>
                                    }
                default         : this.ingredient=null
        }
        return(<div>{this.ingredient}</div>);
    }
}

BurgerIngredients.PropTypes={
    type:PropTypes.string.isRequired
}

export default BurgerIngredients