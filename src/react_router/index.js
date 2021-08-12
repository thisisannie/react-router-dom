import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Home from './Home'
import About from './About'
import Error from './Error'

import Navbar from './Navbar'

const ReactRouterSetup = () => {
    return <Router>

        <Navbar/>

        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>

            <Route exact path="/about">
                <About/>
            </Route>

            <Route path="*">
                <Error/>
            </Route>
        </Switch>
    </Router>
}

export default ReactRouterSetup;
