import React, { Component } from 'react';
import './App.css';
import Radio from '@material-ui/core/Radio';
import Card from '@material-ui/core/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Notification extends Component {
    state = {
        selectedValue: 'a',
    };
    handleChange = event => {
        this.setState({ selectedValue: event.target.value });
    };

    render() {
        return (
            <div className="notify-root">
                <div className="notify-label">
                    <span className="notify-title">Notification 1</span>
                </div>
                <form className="notification-form1">
                    <div className="notification-container">
                        <label>Your answer is</label>
                        <span id="notify-answer">
                            <Radio
                                checked={this.state.selectedValue === 'a'}
                                onChange={this.handleChange}
                                value="a"
                                name="radio-button-demo"
                                aria-label="A"
                            />
                        </span>
                        <input className="update-input" type="text" name="answer" />
                        <FontAwesomeIcon className='play' icon="play" />
                    </div>
                    <div className="notification-container">
                        <label>Change your remainder</label>
                        <span id="notify-change-answer">
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
                    <div className="notify-button-container">
                        <button className="notify-btn">Change</button>
                    </div>
                </form>
                <div className="notify-label">
                    <span className="notify-title">Notification 2</span>
                </div>
                <form className="notification-form2">
                    <div className="notification-container">
                        <label>Your answer is</label>
                        <span id="notify-answer">
                            <Radio
                                checked={this.state.selectedValue === 'a'}
                                onChange={this.handleChange}
                                value="a"
                                name="radio-button-demo"
                                aria-label="A"
                            />
                        </span>
                        <input className="update-input" type="text" name="answer" />
                        <FontAwesomeIcon className='play' icon="play" />
                    </div>
                    <div className="notification-container">
                        <label>Change your remainder</label>
                        <span id="notify-change-answer">
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
                    <div className="notify-button-container">
                        <button className="notify-btn">Change</button>
                    </div>
                </form>
                <Card id="card">
                    <div className="notify-yes">
                        <div className="notify-label">
                            <span className="notify-title">If Yes</span>
                        </div>
                        <form className="notification-form3">
                            <div className="notification-container">
                                <label>Your answer is</label>
                                <span id="card-answer">
                                    <Radio
                                        checked={this.state.selectedValue === 'a'}
                                        onChange={this.handleChange}
                                        value="a"
                                        name="radio-button-demo"
                                        aria-label="A"
                                    />
                                </span>
                                <input className="card-input" type="text" name="answer" />
                                <FontAwesomeIcon className='card-play' icon="play" />
                            </div>
                            <div className="notification-container">
                                <label>Change your remainder</label>
                                <span id="card-notify-answer">
                                    <Radio
                                        // checked={this.state.selectedValue === 'a'}
                                        onChange={this.handleChange}
                                        value="a"
                                        name="radio-button-demo"
                                        aria-label="A"
                                        color="default"
                                    />
                                </span>
                                <label className="card-file">
                                    <input className="card-input1" type="file" name="answer" placeholder="Upload your file here" />
                                </label>
                            </div>
                            <div className="notify-button-container">
                                <button className="card-notify-btn">Change</button>
                            </div>
                        </form>
                    </div>
                    <div className="notify-no">
                        <div className="notify-label">
                            <span className="notify-title">If No</span>
                        </div>
                        <form className="notification-form4">
                            <div className="notification-container">
                                <label>Your answer is</label>
                                <span id="card-answer">
                                    <Radio
                                        checked={this.state.selectedValue === 'a'}
                                        onChange={this.handleChange}
                                        value="a"
                                        name="radio-button-demo"
                                        aria-label="A"
                                    />
                                </span>
                                <input className="card-input" type="text" name="answer" />
                                <FontAwesomeIcon className='card-play' icon="play" />
                            </div>
                            <div className="notification-container">
                                <label>Change your remainder</label>
                                <span id="card-notify-answer">
                                    <Radio
                                        // checked={this.state.selectedValue === 'a'}
                                        onChange={this.handleChange}
                                        value="a"
                                        name="radio-button-demo"
                                        aria-label="A"
                                        color="default"
                                    />
                                </span>
                                <label className="card-file">
                                    <input className="card-input1" type="file" name="answer" placeholder="Upload your file here" />
                                </label>
                            </div>
                            <div className="notify-button-container">
                                <button className="card-notify-btn">Change</button>
                            </div>
                        </form>
                    </div>
                </Card>
            </div>
        );
    }
}

export default Notification;