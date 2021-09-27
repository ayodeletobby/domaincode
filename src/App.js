import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { DommyHome, DommySettings, DommyAbout, DommyContact} from "./TestComp/DommyHome"
import  HeaderNav from './TestComp/HeaderNav'
import NewProject from "./Project/NewProject"
import GitHubApp from './Components/GitHub/GitHubApp';

const App = () => {
  return (
    <Router>
      <HeaderNav/>
      <Switch> 
        <Route  path="/" exact component={DommyHome} />
        <Route  path="/Settings" exact component={DommySettings} />
        <Route  path="/About" exact component={DommyAbout} />
        <Route  path="/GitHubApp" exact component={GitHubApp} />
        <Route  path="/NewProject" exact component={NewProject} />
      </Switch>
    </Router>
    
  )
}

export default App
