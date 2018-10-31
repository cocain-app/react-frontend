import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './style/index.css'
import CreatePlaylist from './components/pages/CreatePlaylist';
import dotenv from 'dotenv'
import * as serviceWorker from './config/serviceWorker';
import LandingPage from './components/pages/LandingPage';
import PlaylistEditor from './components/pages/PlaylistEditor';

const root = document.getElementById('root') //root element from dom

dotenv.config(); //Initialize .env variables

ReactDOM.render(
    //Router
    //(roots aren't restricted currently)
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/create" component={CreatePlaylist} />
            <Route exact path="/playlist" component={PlaylistEditor} /> 
        </Switch>
    </BrowserRouter>
, root);

serviceWorker.register();
