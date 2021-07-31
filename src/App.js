import './App.css';
import Header from './Header';
import HeaderSmall from './HeaderSmall';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';

function App() {
  return (
    <Router>
    <div className="app">
    

      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/checkout">
          <Header/>
          <HeaderSmall/>
          <Checkout />
        </Route>
        
        <Route>
          <Header/>
          <HeaderSmall/>  {/*3 26*/}
          <Home/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
