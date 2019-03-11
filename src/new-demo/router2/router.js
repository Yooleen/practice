import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Main from './../router1/main'
import About from './../router1/about'
import Top from './../router1/topic'
import Home from './home'
export default class IRouter extends React.Component {
    render() {
        return (
            <Router>
                <Home>
                    <Route exact={true} path="/" component={Main}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/toptic" component={Top}></Route>
                </Home>
            </Router>
        )
    }
}