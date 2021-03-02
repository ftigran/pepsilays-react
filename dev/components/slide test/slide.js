import React, { Component } from "react";
import Header from './header'
import Router from './routes'
import useReactRouter from 'use-react-router'
import ScrollSection from './scroll-section'

const a = ()=>{
    const {location} = useReactRouter()
    const {pathname, search} = location
    return(
        <>
            <Header>

            </Header>
            <Router location={location} search={search}/>
            <ScrollSection />
        </>
    )
}
export default a