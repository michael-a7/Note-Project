import React from 'react'
// eslint-disable-next-line
import Stylesheet from './Styling'
import Home from "./Home.js"
import {Route} from "react-router-dom";
import NotePad from "./NotePad";
function App() {
    return(
        <div>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/notes">
                <NotePad />
            </Route>
            <Route exact path="/notes/:save" component={NotePad} />
        </div>
    )
} 

export default App
