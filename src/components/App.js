import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Services from '../scenes/Services';
import Home from '../scenes/Home';
import Contact from '../scenes/Contact';
import Header from '../components/Header';
import Footer from '../components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        
        <Switch>
          <Route path="/servisler">
            <Services />
          </Route>
          <Route path="/iletisim">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );          
}


export default App;
