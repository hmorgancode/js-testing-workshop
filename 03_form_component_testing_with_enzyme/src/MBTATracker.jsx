import React from 'react';
// import { fetch } from './MBTAServer';
// import axios from 'axios';
// import PressRelease from './PressRelease';

class MBTATracker extends React.Component {

  state = {
    city: ''
  }

  render() {
    return (
    <div>
      <div className="field">
        <label className="label">City</label>
        <div className="control has-icons-left has-icons-right" style={{ width: '20rem'}}>
          <input className="input" type="text" placeholder="Text input" value={this.state.city} />
          <span className="icon is-small is-left">
            <i className="fa fa-user"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fa fa-check"></i>
          </span>
        </div>
      </div>

      <div className="field">
        <label className="label">Train</label>
        <div className="control">
          <div className="select">
            <select>
              <option>Blue Line</option>
              <option>Commuter Rail (any)</option>
              <option>Green Line - B</option>
              <option>Green Line - C</option>
              <option>Green Line - D</option>
              <option>Green Line - E</option>
              <option>Orange Line</option>
              <option>Red Line</option>
              <option>Silver Line??</option>
            </select>
          </div>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <label className="checkbox">
            <input type="checkbox" />
            I agree to the <a href="#foo">terms and conditions</a>
          </label>
        </div>
      </div>

      <div className="control">
        <button className="button is-primary">Submit</button>
      </div>
    </div>
  )}
  // form to register
  //
  // form asking you to select your train
}

export default MBTATracker;
