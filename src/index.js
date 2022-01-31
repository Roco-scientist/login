import ReactDOM from 'react-dom'
import React from 'react'

function RegisterButton(props) {
  return (
    <button onClick={props.onClick}>
    Register
    </button>
  )
}

function SignInButton(props) {
  return (
    <button onClick={props.onClick}>
    Sign in
    </button>
  )
}

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      password: "",
      submitted: false
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  handleInputChange(event){
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  submitForm() {
    this.setState({
      submitted: true
    })
  }

  render() {
    if (this.state.submitted) {
      return <h1>Submitted!</h1>
    } else {
      return (
        <form>
          <p>
            <label for='a'>Name:</label>
            <input id='a' type="text" />
          </p>
          <p>
            <label for='b'>Password:</label>
            <input 
              type="password" 
              name="password" 
              id='b'
              value={this.state.password} 
              onChange={this.handleInputChange} />
          </p>
          <input type="submit" value="Submit" onSubmit={this.submitForm}/>
        </form>
      )
    }
  }
}

function RegisterForm() {
  return (
    <form>        
      <p>
        <label for='a'>Name:</label>
        <input id='a' type="text" />
      </p>
      <p>
        <label for='b'>Email:</label>
        <input type="email" />
      </p>
      <p>
        <label for='c'>Password:</label>
        <input id='c' type="password" />
      </p>
      <input type="submit" value="Submit" />
    </form>
  )
}

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.registerForm = this.registerForm.bind(this)
    this.loginForm = this.loginForm.bind(this)
    this.success = this.success.bind(this)
    this.state = {page: "main"}
  }

  registerForm() {
    this.setState({page: "register"})
  }

  loginForm() {
    this.setState({page: "login"})
  }

  success() {
    this.setState({page: "success"})
  }

  render() {
    if (this.state.page === "register") {
      return (
        <div>
        <RegisterForm onSubmit={this.success}/>
        </div>
      ) 
    } else if (this.state.page === "login") {
      return (
        <div>
        <LoginForm  onSubmit={this.success}/>
        </div>
      )
    } else if (this.state.page === "main"){
      return (
        <div>
        <RegisterButton onClick={this.registerForm} />
        <br />
        <SignInButton onClick={this.loginForm} />
        </div>
      )
    } else if (this.state.page === "success") {
      <div>
        <h1>Success!</h1>
      </div>
    }
  }
}

ReactDOM.render(
  <Login />,
  document.getElementById('root')
);
