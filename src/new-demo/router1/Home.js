import React from 'react'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import Main from './main'
import About from './about'
import Top from './topic'

export default class Home extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <ul>
                        <li><Link to="/">home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/toptic">toptic</Link></li>
                    </ul>
                    <Switch>
                        <Route exact={true} path="/" component={Main}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/toptic" component={Top}></Route>
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}