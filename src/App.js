import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, HashRouter, Switch, Route } from "react-router-dom"

import Page1 from "./Page1/page1"
import Page2 from "./Page2/page2"


function App() {
  return (
    <Router>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Page1} />
          <Route path="/page2" component={Page2} />
          {/* <Route component={Error} /> */}
        </Switch>
      </HashRouter>
    </Router>
  );
}

export default App;
