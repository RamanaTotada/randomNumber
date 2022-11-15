import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  onClickButton = () => {
    this.setState({number: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {number} = this.state

    return (
      <div className="app-container">
        <div className="inner-container">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            onClick={this.onClickButton}
            className="button-style"
          >
            Generate
          </button>
          <p className="number-style">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
