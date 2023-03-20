// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isMode: true}

  onDarkMode = () => {
    this.setState(prevState => ({isMode: false}))
  }

  onLightMode = () => {
    this.setState(prevState => ({isMode: true}))
  }

  changeBgColorMode = () => {
    const {isMode} = this.state
    if (isMode === true) {
      return (
        <div className="bgDarkMode">
          <h1 className="darkHead">Click To Change Mode</h1>
          <button type="submit" className="darkBtn" onClick={this.onDarkMode}>
            Light Mode
          </button>
        </div>
      )
    }
    return (
      <div className="bgLightMode">
        <h1 className="lightHead">Click To Change Mode</h1>
        <button type="submit" className="lightBtn" onClick={this.onLightMode}>
          Dark Mode
        </button>
      </div>
    )
  }

  render() {
    return <div className="container">{this.changeBgColorMode()}</div>
  }
}
export default LightDarkMode
