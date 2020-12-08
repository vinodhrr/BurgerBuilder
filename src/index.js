import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import burgerReducer from './stores/reducers/BurgerBuilder'
import thunk from 'redux-thunk'
import orderReducer from './stores/reducers/order2'
import {BrowserRouter} from 'react-router-dom'


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer = combineReducers({
  order : orderReducer,
  burgerBuilder : burgerReducer
})

// const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
const store = createStore(rootReducer,applyMiddleware(thunk));

const app = <Provider store = {store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
            </Provider>

ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
