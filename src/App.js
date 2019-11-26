import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/services";
import Creations from "./pages/creations";
import Events from "./pages/events";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/servicos">
          <Services />
        </Route>
        <Route exact path="/criacoes">
          <Creations />
        </Route>
        <Route exact path="/eventos">
          <Events />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
