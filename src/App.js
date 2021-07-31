import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {

  const { user } = useContext(AuthContext)

  return (
    <div className="App">
      <Router>
        <Switch>

          {/* Home path */}
          <Route exact={true} path='/'>
            {user ? <Home /> : <Register />}
          </Route>

          {/* Login path */}
          <Route path='/login'>
            {user ? <Redirect to='/' /> : <Login />}
          </Route>

          {/* Register path */}
          <Route path='/register'>
            {user ? <Redirect to='/' /> : <Register />}
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
