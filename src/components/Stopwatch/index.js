// Write your code here
import {Component} from 'react'

import './index.css'

class StopWatch extends Component {
  constructor(props) {
    super(props)

    this.state = {counter: 0}
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  renderMinutes = () => {
    const {counter} = this.state

    const minutes = Math.floor(counter / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {counter} = this.state

    const seconds = Math.floor(counter % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  startTimer = () => {
    this.timerId = setInterval(this.tick, 1000)
  }

  tick = () => {
    this.setState(prevState => ({counter: prevState.counter + 1}))
  }

  stopTimer = () => {
    clearInterval(this.timerId)
  }

  resetTimer = () => {
    clearInterval(this.timerId)
    this.setState({counter: 0})
  }

  render() {
    const displayTime = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="bg-container">
        <div className="stopWatch-container">
          <h1 className="stop-watch-heading">Stopwatch</h1>
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
              alt="stopwatch"
              className="clock-img"
            />
            <p className="timer-heading">Timer</p>
          </div>
          <h1 className="time">{displayTime}</h1>
          <div className="buttons-container">
            <button
              type="button"
              className="start-button"
              onClick={this.startTimer}
            >
              Start
            </button>
            <button
              type="button"
              className="stop-button"
              onClick={this.stopTimer}
            >
              Stop
            </button>
            <button
              type="button"
              className="reset-button"
              onClick={this.resetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
