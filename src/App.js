import "./App.css";
import SignUp from "./component/Auth/SignUp";
import SignIn from "./component/Auth/SignIn";
import Home from "./component/Home/home";
import { Route, Switch } from "react-router-dom";
import AdminPanel from "./component/adminPanel/AdminPanel";
import AddCourse from './component/AddCourse/AddCourse'

function App() {
  return (
    <Switch>
       <Route path="/" exact>
        <SignIn />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/home">
        <Home/>
      </Route>
      <Route path="/admin">
        <AdminPanel/>
      </Route>
      <Route path="/addcourse">
        <AddCourse/>
      </Route>
    </Switch>
  );
}

export default App;
