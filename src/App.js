import React, {Component} from 'react'
import Layout from './components/layout/Layout'
import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder'
import {Route, Switch} from 'react-router-dom'
import AsyncComponent from './hoc/AsyncComponent/AsyncComponent'

const AsyncCheckout = AsyncComponent (() => {
  return import ('./containers/Checkout/Checkout')
})


const AsyncOrder = AsyncComponent (() => {
  return import ('./components/Orders/Orders')
})

class App extends Component {
  render(){
    return(
      <div>
        <Layout>
          <Switch>
            <Route path='/Checkout' component={AsyncCheckout}/>
            <Route path='/Orders' component={AsyncOrder}/>
            <Route path='/' exact component={BurgerBuilder}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;;
