import React, { Component } from 'react';
import './App.css';
import { ModalWithoutState as Modal } from './Modal';

class App extends Component {

  state = {
    showModal: false,
  }

  renderModal = () => {
    if (!this.state.showModal) {
      return null;
    }

    return (
      <Modal
        title="hello yes i am a modal"
        foot={<p>this is a modal footer</p>}
        handleCloseModal={() => this.setState({ showModal: false })}
      >
        <p>and here's some modal text</p>
      </Modal>
    );
  }

  render() {
    return (
      <div className="is-dark">
        <div id="app" className="container">
          <section id="header" className="hero is-info">
            <div className="hero-body container has-text-centered">
              <h1 className="title">

              </h1>
              <h2 className="subtitle">

              </h2>
            </div>
          </section>

          <section className="section">
            <div className="control">
              <button className="button is-primary" onClick={() => this.setState({ showModal: true })}>Open Modal</button>
            </div>
            { this.renderModal() }
          </section>


          <footer className="footer">
              <div className="content has-text-centered">

              </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
