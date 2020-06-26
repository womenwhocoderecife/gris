import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Actions from "./pages/Actions";
import Calendar from "./pages/Calendar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Donation from "./pages/Donation";
import Volunteer from "./pages/Volunteer";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="pages">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/quemsomos">
              <About />
            </Route>
            <Route exact path="/acoes">
              <Actions />
            </Route>
            <Route exact path="/querodoar">
              <Donation />
            </Route>
            <Route exact path="/queroservoluntario">
              <Volunteer />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
