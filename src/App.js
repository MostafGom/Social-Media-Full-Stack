import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          {/* Home path */}
          <Route exact={true} path='/'>
            <Home />
          </Route>

          {/* Login path */}
          <Route path='/login'>
            <Login />
          </Route>

          {/* Register path */}
          <Route path='/register'>
            <Register />
          </Route>

          {/* Profile path */}
          <Route path='/profile/:username'>
            <Profile />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
