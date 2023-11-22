import './index.css'
import {Component} from 'react'

class Login extends Component {
  state = {login: false}

  render() {
    const {login} = this.state

    return <div>{login ? null : <h1 className="para">Login</h1>}</div>
  }
}

export default Login
