import './App.css';
import Story from './componets/Story';
import Head from './componets/Head';
import Main from './componets/Main';
import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Signup from './componets/Signup';

function App() {
  return (
    <>
    <Router>
    <Head />
    <Main/>
    <Story/>
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
