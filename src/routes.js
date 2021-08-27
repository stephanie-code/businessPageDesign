import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import ResponsiveCampaignFunc from "./components/responsiveCamapignFunc";
import BusinessAppComp from "./components/businessAppComp";
import AcctComp from "./components/acctoverviewComp";
import LogInComp from "./components/logInComp";
import TableComp from './components/tableComp';
import TestComp from "./components/testcomp";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" component={LogInComp} />
                    {/* <IndexRoute component={BusinessAppComp}></IndexRoute> */}
                    <Route path="/BusinessAppComp" component={BusinessAppComp} />
                    <Route path='/AcctComp' component={AcctComp} />
                    <Route path='/ResponsiveCampaignFunc' component={ResponsiveCampaignFunc} />
                    <Route path="/TestComp" component={TestComp} />
                    <Route path="/tableComp" component={TableComp} />
                </Switch>
            </Router>
        )
    }
}