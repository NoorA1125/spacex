import React, { useState, useEffect } from "react";
import { Component } from 'react';
import BulmaNavbar from "./components/Navbar";
import BulmaCard from "./components/Card";
import BulmaModal from "./components/Modal";
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
    
    </>
  );
}

export default App;
