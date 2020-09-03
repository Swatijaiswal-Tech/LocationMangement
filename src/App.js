import React from "react";
import MaterialTableDemo from "./components/table";
import LocationTiming from "./components/loactionTiming";
import FormData from "./components/form";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LocationProvider } from "./reducer/LocationState";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <LocationProvider>
            <Route path="/" exact component={MaterialTableDemo} />
            <Route path="/addLocation" exact component={FormData} />
            <Route path="/editLoaction/:id" exact component={FormData} />
            <Route path="/locationTiming" exact component={LocationTiming} />
          </LocationProvider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
