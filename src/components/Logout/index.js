import './index.css'
import {Component} from 'react'

class Logout extends Component {
  state = {login: true}

  render() {
    const {login} = this.state
    return <div>{login ? <h1 className="para">Logout</h1> : null}</div>
  }
}

export default Logout
