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
    let formSubmitted = this.submitted
    if (formSubmitted) {
      return <h1>Submitted!</h1>
    } else {
      return (
        <form>
          <label>
            Name:
            <input type="text" />
          </label>
          <br />
          <label>
            Password:
            <input 
              type="password" 
              name="password" 
              value={this.state.password} 
              onChange={this.handleInputChange} />
          </label>
          <br />
          <input type="submit" value="Submit" onSubmit={this.submitForm}/>
        </form>
      )
    }
  }
}

// function LoginForm() {
//   return (
//     <form>        
//       <label>
//         Name:
//         <input type="text" />
//       </label>
//     <br />
//       <label>
//         Password:
//         <input type="password" />
//       </label>
//     <br />
//       <input type="submit" value="Submit" />
//     </form>
//   )
// }

function Success() {
  return (
    <h1>Success</h1>
  )
}

function RegisterForm() {
  return (
    <form>        
      <label>
        Name:
        <input type="text" />
      </label>
    <br />
      <label>
        Email:
        <input type="email" />
      </label>
    <br />
      <label>
        Password:
        <input type="password" />
      </label>
    <br />
      <input type="submit" value="Submit" />
    </form>
  )
}

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.registerForm = this.registerForm.bind(this)
    this.loginForm = this.loginForm.bind(this)
    this.state = {login: false, register: false}
  }

  registerForm() {
    this.setState({login: false, register: true})
  }

  loginForm() {
    this.setState({login: true, register: false})
  }

  render() {
    let register = this.state.register;
    let login = this.state.login;
    if (register) {
      return (
        <div>
        <RegisterForm onSubmit={Success}/>
        </div>
      ) 
    } else if (login) {
      return (
        <div>
        <LoginForm  onSubmit={Success}/>
        </div>
      )
    } else{
      return (
        <div>
        <RegisterButton onClick={this.registerForm} />
        <br />
        <SignInButton onClick={this.loginForm} />
        </div>
      )
    }
  }
}

ReactDOM.render(
  <Login />,
  document.getElementById('root')
);
