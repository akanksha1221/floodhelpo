import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import About from './Pages/About';
import News from './Pages/News';
import Contact from './Pages/Contact';
import Donate from './Pages/Donate';
import Login from './Pages/Login';

import Navbar from './Component/Navbar';
import Footer from './Component/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'  component={Home} />
        
        <Route path='/news' component={News} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />
        <Route path='/donate' component={Donate} />      
        <Route path='/login' component={Login} />      
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
