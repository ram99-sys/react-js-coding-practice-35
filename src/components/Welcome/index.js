import {Component} from 'react'

import './index.css'
/*
class Welcome extends Component {
  state = {isSubscribed: false}

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  render() {
    let displayText
    const {isSubscribed} = this.state
    if (isSubscribed === true) {
      displayText = 'subscribed'
    } else {
      displayText = 'subscribe'
    }
    return (
      <div className="app-container">
        <h1 className="heading">Welcome</h1>
        <p className="text">Thank you! Happy Learning</p>
        <button type="button" className="button" onClick={this.onSubscribe}>
          {displayText}
        </button>
      </div>
    )
  }
}
*/

class Welcome extends Component {
  state = {isSubscribed: false}

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state
    const displayText = isSubscribed ? 'subscribed' : 'subscribe'

    return (
      <div className="app-container">
        <h1 className="heading">Welcome</h1>
        <p className="text">Thank you! Happy Learning</p>
        <button type="button" className="button" onClick={this.onSubscribe}>
          {displayText}
        </button>
      </div>
    )
  }
}
export default Welcome
