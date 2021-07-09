import React, { useState, useEffect } from "react";
import { Component } from 'react';
import BulmaNavbar from "./components/Navbar";
// import BulmaCard from "./components/Card";
// import BulmaModal from "./components/Modal";
import Hero from "./components/Hero";
import 'bulma/css/bulma.min.css';
import './styles.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      rockets: [] //our rockets will be retrieved by the API call. Thats why its an empty array.
    }
  }

  componentDidMount() { //API call using SpaceX API
    fetch("https://api.spacexdata.com/v4/rockets")
      .then(res => res.json())
      .then(rockets => this.setState({ rockets: rockets }))
  }

  render() {
    return (
      <>
        <BulmaNavbar />
        <Hero />
        <br />
        {/* Code for Cards to be generated */}
        <section className="container">
          <div className="columns features">
            {this.state.rockets.map((rocket) => (
              <div className="column" key={rocket.id}>
                <div className="card is-shady">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={rocket.flickr_images[0]} alt="Space X API Rockets" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <h4>{rocket.name}</h4>
                      <p>{rocket.description}</p>
                      <span className="button is-link modal-button" data-target="modal-card"><a className="color-white" href={rocket.wikipedia} target="_blank">Learn More</a></span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Code for Modal to pop up */}

      </>
    );
  }
}

export default App;
