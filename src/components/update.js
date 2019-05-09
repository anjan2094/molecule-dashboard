import React, { Component } from 'react';
import './App.css';
import Radio from '@material-ui/core/Radio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Update extends Component {
    state = {
        selectedValue: 'a',
      };
      handleChange = event => {
        this.setState({ selectedValue: event.target.value });
      };

  render() {
    return (
      <div className="update-root1">
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
                <input className="update-input" type="text" name="answer" />
                <FontAwesomeIcon  className='play' icon="play" />
            </div>
            <div className="update-container">
                <label>Update your answer</label>
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
                <input className="update-input1" type="file" name="answer" placeholder="Upload your file here" />
            </div>
            <div className="update-button">
                <button className="modify-btn">Update</button>
            </div>

        </form>
      </div>
    );
  }
}

export default Update;