import './App.css';
import Navbar from '../components/pages/Navbar';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../components/pages/Home';
import Products from '../components/pages/Products';
import Services from '../components/pages/Services';
import SignUp from '../components/pages/SignUp';
import AppMain from '../views/index.js'

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/main" component={AppMain} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
