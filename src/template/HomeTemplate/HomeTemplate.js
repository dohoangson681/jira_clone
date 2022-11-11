import React from "react";
import { Route } from "react-router-dom";
import Header from "../../components/header";
export const Hometemplate = (props) => {
    return (
        <Route path={props.path} render = {(propsRoute)=>(
            <>
            <Header/>
            <props.component {...propsRoute} /> 
            </>
        )} />
    )
}