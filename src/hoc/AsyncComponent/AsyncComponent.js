import React from 'react'


export default function AsyncComponent(importComponent){
    return class extends React.Component{
        state = {
            component : null
        }

        componentDidMount(){
            importComponent()
            .then(cmp => {
                this.setState({
                    component : cmp.default
                });
            });
            
        }

        render(){
            const C = this.state.component;
            
            C != null ? console.log(C) : console.log()
            return(
                C != null ? <C {...this.props}/> : null
            )
        }
    }
}