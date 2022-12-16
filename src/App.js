import "./App.css";
import Home from "./components/Home";

import AllEpisodes from "./components/AllEpisodes";
import AllDeaths from "./components/AllDeaths";
import AllQuotes from "./components/AllQuotes";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/allepisodes" component={AllEpisodes}></Route>
          <Route exact path="/allquotes" component={AllQuotes}></Route>
          <Route exact path="/alldeaths" component={AllDeaths}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
