import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import About from './Pages/About';
import News from './Pages/News';
import Contact from './Pages/Contact';
import Donate from './Pages/Donate';
import Donar from './Pages/Donardetails';
import Contactsaved from './Pages/Contactsave';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Error from './Component/Error';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'  component={Home} />
        <Route exact path='/news' component={News} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/about' component={About} />
        <Route exact path='/donate' component={Donate} />         
        <Route exact path='/donar' component={Donar} />         
        <Route exact path='/contactsaved' component={Contactsaved} />         
        <Route component={Error} />         
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
