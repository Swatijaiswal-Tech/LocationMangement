import React from "react";
import LocationList from "./components/LocationList";
import Location from "./components/Location";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LocationProvider } from "./reducer/LocationState";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <LocationProvider>
            <Route path="/" exact component={LocationList} />
            <Route path="/addLocation" exact component={Location} />
            <Route path="/editLoaction/:id" exact component={Location} />
          </LocationProvider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
