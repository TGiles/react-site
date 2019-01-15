
import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import About from './components/pages/About';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Nobody_Cares from './components/pages/Nobody_cares';
import Contact from './components/pages/Contact';

const App = () => (
  <Router>
    <div>
      <Header />

      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/nobody_cares" component={Nobody_Cares} />
      <Route path="/contact" component={Contact}/>
    </div>
  </Router>
);

export default App;