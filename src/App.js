import "./App.css";
import Movies from "./Component/Movie/Movies";
import MovieDetails from "./Component/Movie-details/MovieDetails";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/movies" exact>
          <Movies />
        </Route>
        <Route path="/movies/:id">
          <MovieDetails />
        </Route>
        <Route path="*">
          <Redirect to="/movies" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
