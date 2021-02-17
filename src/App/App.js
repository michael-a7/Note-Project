import React from 'react'
// eslint-disable-next-line
import Stylesheet from './Styling'
import Home from "./Home.js"
import {Route} from "react-router-dom";
import NotePad from "./NotePad";
function App() {
    return(
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/notes" component={NotePad} />
        </div>
    )
} 

export default App
