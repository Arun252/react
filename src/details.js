import React from 'react';
import axios from 'axios';

export default class balance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accid:null,
            name: null,
            address: null,
            contact: null,
            accountno: null,
            acctype: null,
            submitted:false
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
        axios.get('http://localhost:80/customer/balance?accid='+this.state.accid)
        .then(response => {
          console.log(response);
          alert('Here is your balance!');
          this.setState({submitted:true,balance:response.data});
      });
    }
     
    accidchangehandler= (event) => {
        this.setState({accid: event.target.value});
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
              <p>
              <input type='submit'/>
              </p>
            </form>
            {this.state.submitted && <Customer value = {this.state}/>}
            </div>
          );
    }
  }
  
function Customer(props) {
    console.log(props);
    return(
      <div>    
        <p>Balance: {props.value.balance}</p>
      </div>
    )
}
  
  