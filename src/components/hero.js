import React from 'react'
import planet from '../img/planet.png'
import '../components/index.hero.css';

export default function hero() {
  return (
    <div class='back $box-colorrgb(5, 4, 11)'>
      <img src={planet} class="planet" ></img>
    <h1 class='countdown'>00 : 00 : 00</h1>
    </div>
  )
}
