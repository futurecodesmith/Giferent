import React, { Component } from 'react';
import Login from './Login';
import CreateAccount from './CreateAccount';
import Main from './Main';
import Axios from 'axios';
import qs from 'qs';

class App extends Component {

  constructor(props) {
    super(props)

    //Login properties and methods

    this.loginError = [];

    this.state = {
      page_state: "login",
      username: ''
      //this determines what page we want to load for the user.
      //"login", "createAccount", "main", "createGif", "createAudio"
    }

  }

  //login//
  clickLoginButton(user, pass) {

    let canLogin;

    //Axios call
    Axios.post('/verifyUser', {
      username: user,
      password: pass,
    }).then(res => {
      console.log(res.data);
      canLogin = res.data;
      if(canLogin) this.setState({page_state: "main", username: user});
      else {
        this.loginError.push(<span style={{"color":"red"}}>Incorrect username/password</span>);
        this.setState(this.state);
      }
    })

  }

  clickCreateAccountButton() {
    this.setState({ page_state: "createAccount" });
  }

  createAccount(user, pass) {
    console.log(user, pass);
    Axios.post('/createUser', {
      username: user,
      password: pass,
      // created: Date.now()
    }).then((res) => {
      console.log('CREATE ACCOUNT SUCCESS RESULT', res);
    })
    //send user and pass to server to check if they're correct

    //if so, set page_state to main
    this.setState({ page_state: "main", username: user });

  }

  render() {

    //if page_state is set to login, render Login component
    if (this.state.page_state === "login")
      return (
        <Login loginError={this.loginError} clickLoginButton={this.clickLoginButton.bind(this)} clickCreateAccountButton={this.clickCreateAccountButton.bind(this)} />
      );

    else if (this.state.page_state === "createAccount") return (<CreateAccount clickSubmit={this.createAccount.bind(this)} />)

    else if (this.state.page_state === "main") return (<Main username={this.state.username} />)
  }
}

export default App