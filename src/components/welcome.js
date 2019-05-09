import React, { Component } from 'react';
import './App.css';
import Radio from '@material-ui/core/Radio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Welcome extends Component {
    state = {
        selectedValue: 'a',
      };
      handleChange = event => {
        this.setState({ selectedValue: event.target.value });
      };
  render() {
    return (
        <div className="update-root">
        <div className="welcome-header">
            <h2>Users open skill saying <span className="alexa">Alexa</span>,</h2>
            <h2>open <span className="signal-molecule">Signal Molecule</span></h2>
        </div>
        <form className="update-form">
            <div className="update-container input-1">
                <label>Your answer is</label>
                <span id="answer">
                    <Radio 
                    checked={this.state.selectedValue === 'a'}
                    onChange={this.handleChange}
                    value="a"
                    name="radio-button-demo"
                    aria-label="A"
                    />
                </span>
                <span>
                <input className="update-input" type="text" name="answer" />
                <FontAwesomeIcon  className='play' icon="play" />
                </span>
            </div>
            <div className="update-container">
                <label>Modify your answer</label>
                <span id="modify-answer">
                <Radio 
                // checked={this.state.selectedValue === 'a'}
                onChange={this.handleChange}
                value="a"
                name="radio-button-demo"
                aria-label="A"
                color="default"
                />
                </span>
                <label className="update-file">
                <input className="update-input1" type="file" name="answer" placeholder="Upload your file here" />
                </label>
            </div>
            <div className="update-button">
                <button className="modify-btn">Modify</button>
            </div>
        </form>
      </div>
    );
  }
}

export default Welcome;