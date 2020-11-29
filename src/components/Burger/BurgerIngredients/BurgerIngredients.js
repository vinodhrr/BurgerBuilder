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
                                    break;
                                  }
                case('lettuce') : {
                                    this.ingredient=<div className={classes.lettuce}></div>
                                    break;
                                  }
                case('tomato')  : {
                                    this.ingredient=<div className={classes.tomato}></div>
                                    break;
                                  }  
                case('onion')   : {
                                    this.ingredient=<div className={classes.onion}></div>
                                    break;
                                  }
                case('cheese')  : {
                                    this.ingredient=<div className={classes.cheese}></div>
                                    break;
                                  }
                case('beef')    : {
                                    this.ingredient=<div className={classes.beef}></div>
                                    break;
                                  }
                case('bottombun') : {
                                        this.ingredient=<div className={classes.bottombun}></div>
                                        break;
                                    }
                default         : this.ingredient=null
        }
        return(<div>{this.ingredient}</div>);
    }
}

BurgerIngredients.propTypes={
    type:PropTypes.string.isRequired
}

export default BurgerIngredients