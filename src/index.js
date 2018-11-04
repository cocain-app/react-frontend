import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "./style/index.css"
import dotenv from "dotenv"
import * as serviceWorker from "./config/serviceWorker"

import SearchPage from "./components/pages/SearchPage"
import PlaylistEditor from "./components/pages/PlaylistEditor"

import { AppProvider } from "./context"

import "./style/index.css"

const root = document.getElementById("root") //root element from dom

dotenv.config() //Initialize .env variables

ReactDOM.render(
  //Router
  //(roots aren't restricted currently)
  <AppProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SearchPage} />
        <Route exact path="/playlist" component={PlaylistEditor} />
      </Switch>
    </BrowserRouter>
  </AppProvider>

  , root)

serviceWorker.register()
