import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Thread from './components/thread';
import Navbar from './components/navbar';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/threads/:id" component={Thread} />
        </Switch>
    </BrowserRouter>
    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
