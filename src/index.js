import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Create from './create';
import Balance from './details';
import Deposit from './deposit';
import Withdraw from './withdraw';
import{BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function withdraw() {
  return(
    <h2 classname="withdraw">Withdraw</h2>
  )
}

function deposit() {
  return(
    <h2 classname="deposit">Deposit</h2>
  )
}

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
     <h1 align= 'center'>BANK APPLICATION</h1>
      <div className='myDiv'>
        <Link to="/create" style={{textDecoration: 'none',color: "black"}}>
          <button type="button">
            Create User
          </button>
        </Link>
        &nbsp;
        <Link to="/Details" style={{textDecoration: 'none',color: "blue"}}>
          <button type="button">
            Get Balance
          </button>
        </Link>
        &nbsp;
        <Link to="/deposit" style={{textDecoration:'none', color: "black"}}>
          <button type="button">
            Deposit amount
          </button>
        </Link>
        &nbsp;
        <Link to="/withdraw" style={{textDecoration:'none', color: "black"}}>
          <button type="button">
            Withdraw amount
          </button>
        </Link>
        &nbsp;
      </div>
    <Switch>
      <Route path="/create"><Create/></Route>
      <Route path="/Details"><Balance/></Route>
      <Route path="/deposit"><Deposit/></Route>
      <Route path="/withdraw"><Withdraw/></Route>
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