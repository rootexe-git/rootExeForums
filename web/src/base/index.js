import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './../landingPage';
import NotFound from './404';

class Base extends Component {
    render() {
        return (
            <div className="base">
                <Switch>
                    <Route path='/' component={LandingPage} />
                    <Route component={NotFound}/>
                </Switch>
            </div>
        );
    }
}

export default Base;