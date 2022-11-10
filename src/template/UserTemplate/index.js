import React from "react"
import { Route } from "react-router-dom"
import Header from "../../components/header"

export const UserTemplate = (props) => {
    let {Component , path} = props
    return <Route exact path = {path} render = {(propsRoute)=>{
        return (
            <>
            
            <Component {...propsRoute} />
            </>
        )
    }} />
}