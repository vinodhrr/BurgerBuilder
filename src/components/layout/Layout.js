import React, {Component} from 'react'
import Auxillary from '../../hoc/Auxillary'
import * as  classes from './layout.module.css'
import ToolBar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import {withRouter} from 'react-router-dom'

class Layout extends Component {
    constructor(props){
        super(props)
    }
    state={
        showSideDrawer : false
    }
    sideDrawerHandler = () => {
        this.setState({showSideDrawer : false});
    }
    sideDrawerToggleHandler = () => {
        this.setState(prevState=>{
            return {showSideDrawer : !prevState.showSideDrawer}
        })
    }
    render(){
        return(
            <Auxillary>
            <ToolBar drawerToggleClicked={this.sideDrawerToggleHandler}/>
            <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerHandler}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
            </Auxillary>
        );
    }
}

export default Layout