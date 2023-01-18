import React from 'react';
import "bulma/css/bulma.min.css";
// import planet from '../img/planet.png'
// import Hero from "../components/hero";
import Compititionsmodel from "../components/competitions"
import Navbar from '../components/Navbar';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&display=swap');
</style>

export default function homePage() {
  return (
    <>
    {/* <Navbar></Navbar> */}
    {/* <Hero></Hero> */}
    <Compititionsmodel></Compititionsmodel>
    </>
  )
}
