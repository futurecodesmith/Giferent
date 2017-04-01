import React, { Component } from 'react';

class CreateAccount extends Component {
  constructor(props){
    super(props);

    this.state = {username: '', password: '', verifyPassword: ''}
  }

  userNameHandler(event){
    console.log(event.target.value);
    this.setState({username: event.target.value});
  }

  passwordHandler(event){
    this.setState({password: event.target.value});
  }

  verifyPasswordHandler(event){
    this.setState({verifyPassword: event.target.value});
  }

  render() {
    let passwordError;

    if(this.state.password === this.state.verifyPassword)
    passwordError = [];
    else passwordError = [
    <span style={{"color":"red"}}>Passwords must match!</span>
    ];


    return (
      <div className="login_container">

        <span>Create an Account</span>

        <div className="block" className="block">
            <label style={{"display":"inline-block"}}>Username</label>
            <input style={{"display":"inline-block"}} type="text" value={this.state.username} onChange={this.userNameHandler.bind(this)}/><br/>
        </div>

        <div className="block" className="block">
            <label style={{"display":"inline-block"}}>Password</label>
            <input style={{"display":"inline-block"}} type="password" value={this.state.password} onChange={this.passwordHandler.bind(this)}/><br/>
        </div>

        <div className="block" className="block">
            <label style={{"display":"inline-block"}}>Verify Password</label>
            <input style={{"display":"inline-block"}} type="password" value={this.state.verifyPassword} onChange={this.verifyPasswordHandler.bind(this)}/><br/>

            {passwordError}
        </div>

        <button type="button" onClick={() => {this.props.clickSubmit(this.state.username, this.state.password)}}>Submit</button>
      </div>
    );
  }

}

export default CreateAccount;