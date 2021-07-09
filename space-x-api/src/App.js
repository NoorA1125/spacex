import React, { useState, useEffect } from "react";
import { Component } from 'react';
import BulmaNavbar from "./components/Navbar";
// import BulmaCard from "./components/Card";
// import BulmaModal from "./components/Modal";
import Hero from "./components/Hero";
import 'bulma/css/bulma.min.css';
import './styles.css';

const useFetch = url => { //API call
  const [rocket, setRocket] = useState(null);
  const [loading, setLoading] = useState(true);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(async () => {
    const response = await fetch(url);
    const rocket = await response.json();
    const [item] = rocket;
    setRocket(item);
    setLoading(false);
  }, []);

  return { rocket, loading };
};

function App() {
  const [count, setCount] = useState(0);
  const { rocket, loading } = useFetch("https://api.spacexdata.com/v4/rockets");
  console.log(rocket) //Seeing is API calls went through

  return (
    <>
    <BulmaNavbar />
    <Hero />
    <br />
    {/* Code for Cards to be generated */}
    <div className="columns features"> 
            <div className="column is-4">
                <div className="card is-shady">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src="{rocket.flickr_images[0]}" alt="{rocket.name}" />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <h4>Tempor orci dapibus faber in.</h4>
                            <p>Ut venenatis tellus in metus vulputate. Amet consectetur adipiscing elit pellentesque. Sed arcu non odio euismod lacinia at quis risus. Faucibus turpis in eu mi bibendum neque egestas cmonsu songue. Phasellus vestibulum lorem
                sed risus.</p>
                            <span className="button is-link modal-button" data-target="modal-card">Modal Card</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Code for Modal to pop up */}
        <div id="modal-card" className="modal modal-fx-3dSlit is-active">
      <div className="modal-background"></div>
      <div className="modal-content is-tiny">
        {/* Content Beginning */}
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src="" alt="Placeholder image" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src= "" alt="linda barret avatar" />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{/* Name of Rocket from API*/}</p>
              </div>
            </div>
            <div className="content">
              {/* Content Description from API */}
              <br />
              <time datetime="2018-02-02">Last Successful Launch Date: {/* From API */}</time>
            </div>
          </div>
        </div>
        {/* End of Content */}
      </div>
      <button className="modal-close is-large" aria-label="close"></button>
    </div>
    </>
  );
}

export default App;
