import React from 'react'
// import BurgerLogo from '../../assets/images/burger-logo.png'
import BurgerLogo from '../../assets/images/burger-logo1.png'
import * as classes from './Logo.module.css'

const Logo = props => (
    <div className={classes.Logo}>
        <img src={BurgerLogo} alt="MyBurger"/>
    </div>
);

export default Logo