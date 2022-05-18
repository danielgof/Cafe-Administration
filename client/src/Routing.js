import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import clients from './routes/clients.jsx';
import home from './routes/home.jsx';



export default class Routing extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">home</Link>
                        </li>
                        <li>
                            <Link to="/clients">clients</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/">
                        <home />
                    </Route>
                    <Route path="/clients">
                        <clients />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
  }
}
