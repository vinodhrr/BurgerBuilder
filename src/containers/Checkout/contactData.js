import React from 'react'
import Button from '../../components/UI/Button/Button'
import classes from './contactData.module.css'
import axios from '../../axios'
import Spinner from '../../components/UI/Spinner/Spinner'
import Input from '../../components/UI/Input/Input'
import {connect} from 'react-redux'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import * as OrderActions from '../../stores/actions/order'

class ContactData extends React.Component{
    state = {
        orderForm : {
            name : {
                elementType : 'input',
                elementConfig : {
                    type : "text",
                    placeholder : "your name"
                },
                validation : {
                    required : true
                },
                touched : false,
                valid : false,
                value : ""
            },
            emailid : {
                elementType : 'input',
                elementConfig : {
                    type : "email",
                    placeholder : "your EMAIL ID"
                },
                validation : {
                    required : true,
                    minLength : 5
                },
                touched : false,
                valid : false,
                value : ""
            },
            city : {
                elementType : 'input',
                elementConfig : {
                    type : "text",
                    placeholder : "your City"
                },
                validation : {
                    required : true
                },
                touched : false,
                valid : false,
                value : ""
            },
            deliveryMethod : {
                elementType : 'select',
                elementConfig : {
                    options: [
                        {value : 'fastest', displayValue: 'Fastest'},
                        {value : 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                validation : {
                    required : true
                },
                valid : false,
                value : "Cheapest"
            }
        },
        isFormValid : false
    }

    orderHandler = event => {
        event.preventDefault();
        let details = {}
        for (let i in this.state.orderForm){
            details[i] = this.state.orderForm[i].value
        }
        const order = {
            orderData : details,
            ingredients : this.props.ing,
            price : this.props.price
        }
        this.props.onOrderBurger(order)
    }
    
    checkValidity = (value, rules) => {
        let isValid = true;
        if(rules.required){
            isValid = value.trim() != '' && isValid
        }
        if(rules.minLength){
            isValid = value.length >= rules.minLength && isValid
        }
        return isValid
    }

    changeHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        }
        const updatedOrderInnerForm = {
            ...updatedOrderForm[inputIdentifier]
        }
        updatedOrderInnerForm.value = event.target.value
        updatedOrderInnerForm.valid = this.checkValidity(event.target.value, updatedOrderInnerForm.validation)
        updatedOrderInnerForm.touched = true
        updatedOrderForm[inputIdentifier] = updatedOrderInnerForm
        let isFormValid = true;
        for(let i in updatedOrderForm){
            isFormValid = updatedOrderForm[i].valid && isFormValid
        }
        this.setState({orderForm : updatedOrderForm, isFormValid : isFormValid})
    }
    render(){
        console.log("contactData :: loading", this.props.loading)
        let formElements = [];
        for(let key in this.state.orderForm){
            formElements.push({
                id : key,
                config : this.state.orderForm[key]
            });
        }

        let form = (<form onSubmit={this.orderHandler}>
            {formElements.map(element => (
                <Input
                key={element.id}
                field={element.id}
                elementType={element.config.elementType}
                elementConfig={element.config.elementConfig}
                value={element.config.value}
                isValid={element.config.valid}
                shouldValidate={element.config.validation}
                touched={element.config.touched}
                changed={event => this.changeHandler(event, element['id'])}
                />
            ))}
            <Button btnType="Success" disabled={!(this.state.isFormValid)}>ORDER</Button>
        </form>);

        if(this.props.loading)
                form=<Spinner />

        return(<div className={classes.ContactData}>
            <h4> Enter your Contact Data</h4>
            {form}
        </div>);
    }
}

const mapStateToProps = state => {
    return{
        ing : state.burgerBuilder.ingredients,
        price : state.burgerBuilder.price,
        loading : state.order.loading
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onOrderBurger : orderData => dispatch(OrderActions.purchaseBurger(orderData))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(ContactData,axios))