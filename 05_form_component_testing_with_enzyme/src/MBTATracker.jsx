import React from 'react';
import { ModalWithoutState as Modal } from './Modal';
import MBTAServer from './MBTAServer';
// import axios from 'axios';

class MBTATracker extends React.Component {

  state = {
    trainStatus: null,
    showModal: false,

    city: '',
    selectedTrain: 'Blue Line',
    agreedToTerms: false,
  }

  handleSubmit = () => {
    MBTAServer.fetch().then((result) => {
      this.setState({ trainStatus: result, showModal: true })
    });
  }

  renderModal = () => {
    if (!this.state.showModal) {
      return null;
    }

    return (
      <Modal
        title={`${this.state.selectedTrain} status:`}
        handleCloseModal={() => this.setState({ trainStatus: null, showModal: false })}
      >
        <p>{this.state.trainStatus}</p>
      </Modal>
    );
  }

  render() {
    return (
    <div>
      <div className="field">
        <label className="label">City</label>
        <div className="control has-icons-left has-icons-right" style={{ width: '20rem'}}>
          { /******** INPUT 1 *********/}
          <input
            className="input"
            type="text"
            placeholder="Text input"
            value={this.state.city}
            onChange={(e) => this.setState({ city: e.target.value })}
          />
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
            { /******** INPUT 2 *********/}
            <select
              value={this.state.selectedTrain}
              onChange={(e) => this.setState({ selectedTrain: e.target.value })}
            >
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
            { /******** INPUT 3 *********/}
            <input
              type="checkbox"
              checked={this.state.agreedToTerms}
              onChange={(e) => this.setState({ agreedToTerms: e.target.checked})}
            />
            I agree to the <a href="#nope">terms and conditions</a>
          </label>
        </div>
      </div>

      <div className="control">
        <button className="button is-primary" onClick={this.handleSubmit}>Check Train Status</button>
      </div>

      { this.renderModal() }
    </div>
  )}
}

export default MBTATracker;
