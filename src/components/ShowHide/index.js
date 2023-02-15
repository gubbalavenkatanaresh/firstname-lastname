// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {first: true, last: true}

  onFirstName = () => {
    console.log('first')
    this.setState(prevState => ({first: !prevState.first}))
  }

  onLastName = () => {
    console.log('last')
    this.setState(prevState => ({last: !prevState.last}))
  }

  render() {
    const {first, last} = this.state
    return (
      <div className="container">
        <div>
          <h1 className="main-heading">Show/Hide</h1>
          <div className="buttons">
            <div>
              <button
                className="showHideButton"
                onClick={this.onFirstName}
                type="button"
              >
                Show/Hide Firstname
              </button>
              {first && <p className="name">Joe</p>}
            </div>
            <div>
              <button
                className="showHideButton"
                onClick={this.onLastName}
                type="button"
              >
                Show/Hide Lastname
              </button>
              {last && <p className="name">Jonas</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
