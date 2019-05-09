import React, { Component } from 'react';
import './App.css';
import image1 from './connection1.png';
import image2 from './connection2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Update from './update';
import Welcome from './welcome';
import ChangeRemainer from './changeRemainder';
import Notification from './notification';
import logo from './logo.png';
import Card from '@material-ui/core/Card';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      welcome: false,
      update: false,
      change: false,
      notification: false,
      check: false,
      value: '',
      rotate1: false,
      rotate2: false,
      rotate3: false,
      rotate4: false,
      margin: -450 + 'px'
    }
  }

  handleWelcome = (e) => {
    this.setState({
      welcome: true,
      update: false,
      change: false,
      notification: false,
      check: true,
      value: 'welcome',
      margin: 0
    })
    this.display();
  }

  handleUpdate = (e) => {
    this.setState({
      welcome: false,
      update: true,
      change: false,
      notification: false,
      check: true,
      value: 'update',
      margin: 0
    })
    this.display();
  }

  display = () => {
    if (this.state.value === 'welcome') {
      console.log('display calling--')
      return <Welcome />
    }
    else if (this.state.value === 'update') {
      return <Update />
    }
    else if (this.state.value === 'change') {
      return <ChangeRemainer />
    }
    else {
      return <Notification />
    }
  }

  handleChangeRemainder = (e) => {
    e.preventDefault();
    this.setState({
      welcome: false,
      update: false,
      change: true,
      notification: false,
      check: true,
      value: 'change',
      margin: 0
    })
    this.display();
  }

  handleNotification = (e) => {
    e.preventDefault();
    this.setState({
      welcome: false,
      update: false,
      change: false,
      notification: true,
      check: true,
      value: 'notification',
      margin: 0
    })
    this.display();
  }
  handleRotate = (name) => {
    console.log('name-->', name)
    if (name === 'rotate1') {
      this.setState({
        rotate1: true,
        rotate2: false,
        rotate3: false,
        rotate4: false
      })
    }

    else if (name === "rotate2") {
      this.setState({
        rotate2: true,
        rotate1: false,
        rotate3: false,
        rotate4: false
      })
    }
    else if (name === "rotate3") {
      this.setState({
        rotate3: true,
        rotate2: false,
        rotate1: false,
        rotate4: false
      })
    }
    else {
      this.setState({
        rotate4: true,
        rotate2: false,
        rotate3: false,
        rotate1: false
      })
    }
  }

  render() {
    const marginTop = this.state.margin;
    const isCheck = this.state.check;
    const { rotate1, rotate2, rotate3, rotate4 } = this.state;
    return (
      <div className="box">
        {!isCheck ? (
          <div>
            <div className="image">
              <div className="img1">
                <img src={image1} href="" alt="" />
              </div>
              <div className="dashboard-title">
                <p>Welcome</p>
                <p>To</p>
                <p className="title-line3">Signal Molecule</p>
              </div>
            </div>
            <div className="img2">
              <img src={image2} href="" alt="" />
            </div>
          </div>
        ) : (
            <div className="show-item">
              {this.display()}
            </div>
          )}

        <Card>
          <div className="sidebar1" style={{ marginTop: marginTop }}>
            <div className="container" id="welcome-logo">
              <div className="welcome-logo"><img src={logo} alt="" /></div><label className="signal"><p>Signal</p><p>Molecule</p></label>
            </div>
            <div id="line1" onClick={e => this.handleRotate('rotate1')} className={rotate1 ? "rotate1" : ""}>
              <a href="#" className="menu-link">
                <div className="container">
                  <div value="welcome" onClick={this.handleWelcome}><FontAwesomeIcon className="icon" icon="praying-hands" />  <label className="item-title">Welcome</label><span className="left-angel">&#8249;</span></div>
                </div>
              </a>
            </div>
            <div id="line2" onClick={e => this.handleRotate("rotate2")} className={rotate2 ? "rotate2" : ""}>
              <a href="#" className="menu-link">
                <div className="container">
                  <div value="update" onClick={this.handleUpdate}><FontAwesomeIcon className="icon" icon="edit" />  <label className="item-title">Update Dosage</label><span className="left-angel">&#8249;</span></div>
                </div>
              </a>
            </div>
            <div id="line3" onClick={e => this.handleRotate("rotate3")} className={rotate3 ? "rotate3" : ""}>
              <a href="#" className="menu-link">
                <div className="container">
                  <div value="change" onClick={this.handleChangeRemainder}><FontAwesomeIcon className="icon" icon="random" /> <label className="item-title">Change Remainder</label><span className="left-angel">&#8249;</span> </div>
                </div>
              </a>
            </div>
            <div id="line4" onClick={e => this.handleRotate("rotate4")} className={rotate4 ? "rotate4" : ""}>
              <a href="#" className="menu-link">
                <div className="container">
                  <div value="notification" onClick={this.handleNotification}><FontAwesomeIcon id="icon4" icon="bell" /><label className="item-title">Notification</label> <span className="left-angel">&#8249;</span></div>
                </div>
              </a>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default Dashboard;
