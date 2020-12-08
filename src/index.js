import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Create from './create';
import Balance from './details';
import{BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


function create() {
  return (
    <h2 classname="create">Create User</h2>
  )
}

function getdetails() {
  return (
    <h2 classname="get details">Get details</h2>
  )
}

function Default() {
  return(<Router>
  <div> 
     <h1 align= 'center'>WELCOME TO XYZ BANK</h1>
     <Link to="/create">Create</Link>
     <Link to="/Details">Get Details</Link>
    <Switch>
      <Route path="/create"><Create/></Route>
      <Route path="/Details"><Balance/></Route>
    </Switch>
  </div>
  </Router>);
}

// ReactDOM.render(
//     <React.StrictMode>
//       <Form/>
//     </React.StrictMode>,
//     document.getElementById('root')
//   );

ReactDOM.render(
  <Default/>,
  document.getElementById('root')
);