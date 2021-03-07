import React from 'react'
// eslint-disable-next-line
import Stylesheet from './Styling'
import Home from "./Home.js"
import {Route, useParams,Switch} from "react-router-dom";
import NotePad from "./NotePad";
function App() {
    const data = localStorage.getItem("Save List")
    return(
        <div>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/notes">
                <NotePad />
            </Route>
            <Route exact path="/notes/id">
                <NotePad />
            </Route>
            <Switch>
                <Route path="/notes/:id" children={<Identity/>}/>
            </Switch>
        </div>
    )
} 
function Identity(){
    let {id} = useParams();
    return(
        <div>
        <NotePad />
        <p>This is {id}</p>
        </div>

    )
}
export default App
