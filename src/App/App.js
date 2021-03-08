import React from "react";
// eslint-disable-next-line
import Stylesheet from "./Styling";
import Home from "./Home.js";
import { Route, useParams, Switch } from "react-router-dom";
import NotePad from "./NotePad";
function App() {
  const data = localStorage.getItem("Save List");
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/notes">
        <NotePad />
      </Route>
      <Switch>
        <Route path="/notes/:id" children={<NotePad />} />
      </Switch>
    </div>
  );
}
export default App;
