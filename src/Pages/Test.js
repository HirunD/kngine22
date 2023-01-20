import React from 'react'
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import planet from "../img/earth.png";

export default function Test() {
  return (
    <Parallax pages={2}>
        <ParallaxLayer>
        <img src={planet} class="planet" id="planet"></img>
        </ParallaxLayer>
        <ParallaxLayer>
        <img src={planet} class="planet" id="planet"></img>
        </ParallaxLayer>
    </Parallax>
  )
}
