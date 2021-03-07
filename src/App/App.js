import React from 'react'
// eslint-disable-next-line
import Stylesheet from './Styling'
import Home from "./Home.js"
import {Route, useParams,Switch} from "react-router-dom";
import NotePad from "./NotePad";
import Parameter from './Parameter'
function App() {
    return(
        <div>
            <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/notes">
                <NotePad />
            </Route>
            <Route exact path="/notes/:id">
                <NotePad />
            </Route>
            <Route exact path="/parameter/:name">
                <Parameter />
            </Route>
            </Switch>
        </div>
    )
} 
export default App
