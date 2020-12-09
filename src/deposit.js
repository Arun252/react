import React from 'react';
import axios from 'axios';

export default class deposit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accid:null,
            amount: null,
            date: null,
            submitted: false
        }
    }

    amountchangehandler= (event) => {
        this.setState({amount: event.target.value});
      }

      datechangehandler= (event) => {
        this.setState({date: event.target.value});
      }  
    accidchangehandler= (event) => {
        this.setState({accid: event.target.value});
      }

    submitHandler = (event) => {
        event.preventDefault();
        axios.post('http://localhost:80/customer/deposit/', {
          accid: this.state.accid,
          amount: this.state.amount,
          date: this.state.date
        })
        .then(response => {
             alert('Amount Deposited. Here is your updated balance!');
             this.setState({submitted:true,balance:response.data});
        });    
      }
      
    render() {
        return (
          <div align='center'>
            <form onSubmit={this.submitHandler}>
              <h2>Hello</h2>
              <p>Enter your accid:</p>
              <input
                type="text"
                onChange={this.accidchangehandler}
              />
              <p>Enter the amount:</p>
              <input
                type="text"
                onChange={this.amountchangehandler}
              />
              <p>Enter the date:</p>
              <input
                type="text"
                onChange={this.datechangehandler}
              />
              <p>
              <input type='submit'/>
              </p>
            </form>
            {this.state.submitted && <Cust value = {this.state}/>}
        </div>
          );
    }
}

function Cust(props) {
    console.log(props);
    return(
      <div>    
        <p>Balance: {props.value.balance}</p>
      </div>
    )
}