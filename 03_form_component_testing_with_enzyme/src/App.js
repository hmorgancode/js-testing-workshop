import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import MBTATracker from './MBTATracker';

class App extends Component {
  render() {
    return (
    <div className="is-dark">
      <div id="app" className="container">
        <section id="header" className="hero is-info">
          <div className="hero-body container has-text-centered">
            <h1 className="title">
            what up yo i'm a form
            </h1>
            <h2 className="subtitle">

            </h2>
          </div>
        </section>

        <section className="section">
          <MBTATracker />
        </section>


        <footer className="footer">
            <div className="content has-text-centered">
              <p><strong>This text is bold</strong> i like messing with styles okay </p>
            </div>
        </footer>
      </div>
    </div>
    );
  }
}

export default App;
