import React from 'react'
// eslint-disable-next-line
import Stylesheet from './Styling'
import Home from "./Home.js"
import {Route, useParams} from "react-router-dom";
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
        </div>
    )
} 

export default App
