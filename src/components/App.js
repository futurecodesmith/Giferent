import React, { Component } from 'react';
import Login from './Login';
import CreateAccount from './CreateAccount';
import Main from './Main';
import qs from 'qs';
// import Axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props)

    //Login properties and methods

    this.state = {
      page_state: "login",
      username: ''
      //this determines what page we want to load for the user.
      //"login", "createAccount", "main"

    };


  }

  ///////////////////////////////
  //method binding for children//
  ///////////////////////////////

  //login//
  clickLoginButton(user, pass) {
    //Axios call
    $.post('/verifyUser', {
      username: user,
      password: pass,
      // headers: {
      //   'Content-type': 'application/x-www-form-urlencoded'
      // }
    },result => {
      console.log(result.body);
    })

    //if server response is true:
    // this.setState({page_state: "main", username: user});

    //if server response is false:
    //set username/password error and force state update for re-render
  }

  clickCreateAccountButton() {
    this.setState({ page_state: "createAccount" });
  }

  createAccount(user, pass) {

    //send user and pass to server to check if they're correct

    //if so, set page_state to main
    this.setState({ page_state: "main", username: user });

  }

  render() {

    //if page_state is set to login, render Login component
    if (this.state.page_state === "login")
      return (
        <Login clickLoginButton={this.clickLoginButton.bind(this)} clickCreateAccountButton={this.clickCreateAccountButton.bind(this)} />
      );

    else if (this.state.page_state === "createAccount") return (<CreateAccount clickSubmit={this.createAccount.bind(this)} />)

    else if (this.state.page_state === "main") return (<Main username={this.state.username} />)
  }
}

export default App