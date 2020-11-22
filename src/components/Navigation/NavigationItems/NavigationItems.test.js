import NavigationItems from './NavigationItems'
import NavigationItem from './NavigationItem/NavigationItem'
import React from 'react'

configure({adapter : new Adapter()})

describe('<NavigationItem/>', ()=>{
    it("should render NavigationItem since authentication is not given"), ()=>{
        const nav = shallow(<NavigationItems/>)
        expect(nav.find(NavigationItem)).toHaveLength(2)
    }
})