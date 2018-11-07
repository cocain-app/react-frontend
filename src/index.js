import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route } from "react-router-dom"
import { AnimatedSwitch } from "react-router-transition"
import "./style/index.css"
import dotenv from "dotenv"
import * as serviceWorker from "./config/serviceWorker"

import SearchPage from "./components/pages/SearchPage"
import PlaylistEditor from "./components/pages/PlaylistEditor"
import Search from "./components/Search"

import { AppProvider } from "./context"

import "./style/index.css"

const root = document.getElementById("root") //root element from dom

dotenv.config() //Initialize .env variables

ReactDOM.render(
  //Router
  //(roots aren't restricted currently)
  <AppProvider>
    <BrowserRouter>
      <div className="App">
        <Search />
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route exact path="/" component={SearchPage} />
          <Route exact path="/playlist/:code?" component={PlaylistEditor} />
        </AnimatedSwitch>
      </div>
    </BrowserRouter>
  </AppProvider>

  , root)

serviceWorker.register()
