import React from 'react';
import axios from 'axios';

export default class create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            address: null,
            contact: null,
            accountno: null,
            acctype: null
        }
    }

      contactChangeHandler = (event) => {
        this.setState({contact: event.target.value});
      }

      addressChangeHandler = (event) => {
        this.setState({address: event.target.value});
      }

      nameChangeHandler = (event) => {
        this.setState({name: event.target.value});
      }

      accountnoChangeHandler = (event) => {
        this.setState({accountno: event.target.value});
      }

      acctypeChangeHandler = (event) => {
        this.setState({acctype: event.target.value});
      }

      submitHandler = (event) => {
        event.preventDefault();
        axios.post('http://localhost:18080/customer/create', {
          details: {
            contact: this.state.contact,
            address: this.state.address,
            name: this.state.name
          },
          account:{
            accountno: this.state.accountno,
            acctype: this.state.acctype
          }      
        })
        .then(response => alert('Thank you for the response'));
      }
      
    render() {
        return (
          <div align='left'>
            <form onSubmit={this.submitHandler}>
              <h2>Hello</h2>
              <p>Enter your name:</p>
              <input
                type="text"
                onChange={this.nameChangeHandler}
              />
              <p>Enter your address:</p>
              <input
                type="text"
                onChange={this.addressChangeHandler}
              />
              <p>Enter your contact:</p>
              <input
                type="text"
                onChange={this.contactChangeHandler}
              />
              <p>Enter your accountno:</p>
              <input
                type="text"
                onChange={this.accountnoChangeHandler}
              />
              <p>Enter account type:</p>
              <p onChange={this.acctypeChangeHandler}>
                <select value = {this.state.acctype}>
                  <option value="Null">Select</option>
                  <option value="SAVINGS">Savings</option>
                  <option value="FIXEDDEPOSIT">Fixed Deposit</option>
                </select></p>
              <p>
              <input type='submit'/>
              </p>
            </form>
        </div>
          );
    }

}