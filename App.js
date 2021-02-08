import React from 'react'
// eslint-disable-next-line
import Stylesheet from './Styling'
import Home from "./Home.js"
import ClassComp from "./ClassComp"
import {Route} from "react-router-dom";
import Test from "./Test";
function App() {
    return(
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/classcomp" component={ClassComp} />
            <Route exact path="/test" component={Test} />
        </div>
    )
} 

export default App
