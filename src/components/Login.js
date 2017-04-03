import React, { Component } from 'react';


const inline = {
  "position": "relative",
  "display": "inline-block",
  "marginTop": "5px"
}

class Login extends Component {
  constructor(props){
    super(props);

    this.clickLoginButton = this.props.clickLoginButton;
    this.clickCreateAccountButton = this.props.clickCreateAccountButton;

    this.state = {username: '', password: ''};
  }

  usernameHandler(event){
    console.log(event.target.value);
    this.setState({username: event.target.value})
  }

  passwordHandler(event){
    console.log(event.target.value);
    this.setState({password: event.target.value})
  }

  render() {
    return(
      <div className="login_container">

        <img src="http://i.imgur.com/LPLThPr.png"/>

        <div id="username_container" className="block">
          <input type="text" placeholder="Username" placeholder="Username" className="input_text" style={inline} onChange={this.usernameHandler.bind(this)}/>
        </div>

        <div id="password_container" className="block">
          <input type="password" placeholder="Password" placeholder="Password" className="input_text" style={inline} onChange={this.passwordHandler.bind(this)}/>
        </div>

        {this.props.loginError}

        <div id="loginButton_container" className="block">
        <button type="button" id="login_button" onClick={() => {this.clickLoginButton(this.state.username, this.state.password)}}>Login</button>
        </div>

        <button type="button" id="login_button" onClick={this.clickCreateAccountButton}>Create An Account</button>

      </div>
    )
  }

}


export default Login;