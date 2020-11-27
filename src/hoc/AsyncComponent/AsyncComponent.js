import React from 'react'


export default function AsyncComponent(importComponent){
    return class extends React.Component{
        state = {
            component : null
        }

        componentDidMount(){
            this.setState({
                component : importComponent.default
            });
        }

        render(){
            const C = this.state.component;
            return(
                C != null ? <C {...this.props}/> : null
            )
        }
    }
}