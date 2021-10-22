import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter as Router , Route ,Redirect,Switch,useLocation} from 'react-router-dom'
import { useEffect, useState } from "react";


function App() {

  const [company, setCompany] = useState(JSON.parse(localStorage.getItem('company')))

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {company ? <Dashboard/> : <Redirect to="/login" />}
          </Route>
          <Route path="/login">
            {company ? <Redirect to="/" /> : <Login/>}
          </Route>
          <Route path="/register">
            {company ? <Redirect to="/" /> : <Register/>}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
