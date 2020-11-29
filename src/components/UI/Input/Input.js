import React from "react";
import classes from './Input.module.css'

const Input = props => {
    let inputElement = null;
    let inputStyleArray = [];
    let validationError = null;
    inputStyleArray.push( classes.InputElement)
    if(!props.isValid && props.shouldValidate && props.touched){
        inputStyleArray.push(classes.Invalid)
        validationError=<p className={classes.ValidationError}>value to {props.field} is Invalid</p>
    }

    let InputStyle=inputStyleArray.join(' ')
    switch(props.elementType){
        case 'input' :  inputElement = <input 
                                        className={InputStyle}
                                        onChange={props.changed}
                                        {...props.elementConfig}/>
                                        break;
        case 'inputarea' :  inputElement = <inputarea 
                                        className={InputStyle}
                                        onChange={props.changed}
                                        {...props.elementConfig}/>
                                        break;
        case 'input' :  inputElement = (<select 
                                        className={InputStyle}
                                        onChange={props.changed}
                                        {...props.elementConfig.option.map(option => (
                                            <option
                                            key={option.value}
                                            value={option.value}
                                            >
                                                {option.displayValue}
                                            </option>
                                        ))}></select>)
                                        break;
        default :  inputElement = <input 
                                        className={InputStyle}
                                        onChange={props.changed}
                                        {...props.elementConfig}/>
    }
    return(<div 
        className={classes.Input}>
            <label className={classes.label}>{inputElement}</label>
        </div>)
}

export default Input