import React from 'react'
import classes from './NavigationItem.module.css'
import {Navlink} from 'react-router-dom'

const NavigationItem = props => (
    <li className={classes.NavigationItem}>
        <Navlink
        to={props.link}
        exact
        activeClassName={classes.active}
        >
            {props.children}
        </Navlink>
    </li>
);

export default NavigationItem