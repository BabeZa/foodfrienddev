import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css"
import Header from "./components/Header.js"
import Footer from './components/Footer.js';
import Register from './components/Register'
import Profile from './components/Profile'
import Restaurantpage from './components/Res2'
import Home from './components/Home'

function App() {
  return (
    <Router>
      <div className="App">
                <div className="Site-content">
                    <div className="App-header">
                        <Header />
                    </div>
                    <div className="Container">
                        <Route exact path="/" component={Home} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/restaurant" component={Restaurantpage} />
                    </div>
                </div>
                <Footer />
            </div>
    </Router>
  );
}

export default App;
