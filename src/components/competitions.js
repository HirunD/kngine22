import React from "react";
import "bulma/css/bulma.min.css";
// import styles from "./index.comp.css";
import "./index.comp.css";
import planet from "../img/earth.png";
import "../components/Navbar.css";
import { useState, useEffect } from "react";

// import {createRoot} from 'react-dom/client';
// import Countdown from 'react-countdown'

// const rootElement = document.getElementById("count");
// const root = createRoot(rootElement);

// root.render(
// <Countdown date={Date.now() + 10000} />
// )

export default function useCompetitionsmodel() {
  // let earth = document.getElementById("planet");
  // window.addEventListener('scroll', function(){
  //   let value = this.window.scrollY;
  //   earth.style.top = 6.5 + value;
  //   // console.log(value);
  // });

  // const [show, setShow] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);
  // const navbar = document.getElementById("nav");

  // const controlNavbar = () => {
  //   if (typeof window !== 'undefined') {
  //     if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
  //       navbar.classList.add('hide')
  //       console.log("hide");
  //     } else { // if scroll up show the navbar
  //       navbar.classList.add('show')
  //       console.log("show");
  //     }

  //     // remember current page location to use in the next move
  //     setLastScrollY(window.scrollY);
  //   }
  // };

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     window.addEventListener('scroll', controlNavbar);

  //     // cleanup function
  //     return () => {
  //       window.removeEventListener('scroll', controlNavbar);
  //     };
  //   }
  // }, [lastScrollY]);
  return (
    <div>
      <nav class="" id="nav">
        <img></img>
        <div class="glass div " id="n1">
          <a href="#" class="title is-6">
            Competitions
          </a>
        </div>
        <div class="glass div " id="n2">
          <a href="#" class="title is-6">
            Speakers
          </a>
        </div>
        <div class="glass div " id="n3">
          <a href="#" class="title is-6">
            Throwback
          </a>
        </div>
        <div class="glass div " id="n4">
          <a href="#" class="title is-6">
            about us
          </a>
        </div>
      </nav>
      <section class="hero is-fullheight is-info">
        <div class="hero-body">
          <img src={planet} class="planet" id="planet"></img>
          {/* <div id="count"></div> */}
          <h2 class="title countdown" id="count">
            00 : 00: 00
          </h2>
        </div>
      </section>
      <section class="section">
        <h3 class="title has-text-centered">Compititions</h3>
        <h5 class="subtitle has-text-centered">
          Submit your projects before 23:59 17 February 2018
        </h5>
        <div class="container is-widescreen">
          <div class="columns">
            <div class="column">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src={planet} alt="Placeholder image"></img>
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">Scripter</p>
                    </div>
                  </div>

                  <div class="content">Programming competition</div>
                </div>
                <footer class="card-footer">
                  <a href="#" class="card-footer-item">
                    Register
                  </a>
                  <a href="#" class="card-footer-item">
                    More Info
                  </a>
                </footer>
              </div>
              <div class="modal ">
                <div class="modal-background"></div>
                <div class="modal-card">
                  <header class="modal-card-head">
                    <p class="modal-card-title">Scripter</p>
                    <button class="delete" aria-label="close"></button>
                  </header>
                  <section class="modal-card-body">
                    <img src={planet}></img>
                    <p>
                      Coding of a program that can make a solution to the title
                      of a substantive issue. The program that gives the best
                      solution will be the winning program.
                    </p>
                    <h6 class="subtitle is-4 mt-5 black-text">Topic -</h6>
                    <h6 class="subtitle is-6 black-text">
                      A solution for a common issue of your school
                    </h6>
                    <h6 class="subtitle is-4 black-text">Programming languages -</h6>
                    <ul>
                      <li>• Coffee</li>
                      <li>• Tea</li>
                      <li>• Milk</li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src={planet} alt="Placeholder image"></img>
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">HYPERLINK</p>
                    </div>
                  </div>

                  <div class="content">Web Designing competition</div>
                </div>
                <footer class="card-footer">
                  <a href="#" class="card-footer-item">
                    Register
                  </a>
                  <a href="#" class="card-footer-item">
                    More Info
                  </a>
                </footer>
              </div>
              <div class="modal">
                <div class="modal-background"></div>
                <div class="modal-card">
                  <header class="modal-card-head">
                    <p class="modal-card-title">HYPERLINK</p>
                    <button class="delete" aria-label="close"></button>
                  </header>
                  <section class="modal-card-body">
                    <img src={planet}></img>
                    <p>
                      Creating a website/ webpage for the given topic, using the
                      below mentioned web designing language or web designing
                      software.
                    </p>
                    <p>
                      The creation that is most relevant to the topic and most
                      creative will be the winning creation.
                    </p>
                    <h6 class="subtitle is-4 mt-4 black-text">Topic -</h6>
                    <h6 class="subtitle is-6 black-text">
                      A Website To Represent Your School
                    </h6>
                    <h6 class="subtitle is-4 black-text">Programming languages -</h6>
                    <ul>
                      <li>• HTML</li>
                      <li>• Javascript</li>
                      <li>• Python</li>
                      <li>• Node JS</li>
                      <li>• Go</li>
                      <li>• PHP</li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src={planet} alt="Placeholder image"></img>
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">Cyber Combat</p>
                    </div>
                  </div>

                  <div class="content">Gaming Comepetition</div>
                </div>
                <footer class="card-footer">
                  <a href="#" class="card-footer-item">
                    Register
                  </a>
                  <a href="#" class="card-footer-item">
                    More Info
                  </a>
                </footer>
              </div>
              <div class="modal ">
                <div class="modal-background"></div>
                <div class="modal-card">
                  <header class="modal-card-head">
                    <p class="modal-card-title">CYBERCOMBAT</p>
                    <button class="delete" aria-label="close"></button>
                  </header>
                  <section class="modal-card-body">
                    {/* <img src={planet}></img> */}
                    <h1 class="subtitile is-1 has-text-centered">
                      Rules and Regulations
                    </h1>
                    <h6 class="subtitle is-4 has-text-centered">
                      Call of Duty 4 – Modern Warfare (2007)
                    </h6>
                    <h6 class="subtitle is-5">BASIC GAME MODE SETTINGS</h6>
                    <ul>
                      <li>• Bomb Timer: 30 seconds</li>
                      <li>• Defuse Time: 7 seconds</li>
                      <li>• Plant Time: 5 seconds</li>
                      <li>• Time Limit: 1.45 minutes</li>
                      <li>
                        • Round Limit{" "}
                        <ul>
                          <li class="offset">
                            - 12 rounds, with half time and switching sides at 6
                          </li>
                          <li class="offset">
                            - 24 rounds, with half time and switching sides at
                            12 (Grand Final)
                          </li>
                        </ul>
                      </li>
                      <li>
                        • Score Limit{" "}
                        <ul>
                          <li class="offset">
                            - First team to reach 7 will be the map winner (1st/
                            2nd / 3rd Sessions)
                          </li>
                          <li class="offset">
                            - First team to reach 10 will be the map winner
                            (Semi Finals)
                          </li>
                          <li class="offset">
                            - First team to reach 13 will be the map winner
                            (Grand Final)
                          </li>
                        </ul>
                      </li>
                      <li>
                        • All matches will be played on promodlive220_EU
                        (promod_mode lan_knockout_mrx)
                      </li>
                      <li>• FPS Limit 125</li>
                    </ul>
                    <h6 class="subtitle is-5 mt-4">Tie Breaker</h6>
                    <p>
                      If both teams have an equal number of map wins(or rounds)
                      at the end of two maps(or one map) played, a tie breaker
                      map will be played where the winner of that map will win
                      the match. Both the map and the side selection will be
                      decided by two coin tosses. If the first tie breaker ends
                      up as a draw same map will be played and sides will be
                      changed (e.g.: first tie breaker match team who attacked
                      first now have to defend first).
                    </p>
                    <h6 class="subtitle is-5 mt-4">Maps</h6>
                    <ol class="ml-5 ">
                      <li>mp_backlot (Backlot)</li>
                      <li>mp_crash (Crash)</li>
                      <li>mp_crossfire (Crossfire)</li>
                      <li>mp_citystreet (District)</li>
                      <li>mp_strike (Strike)</li>
                    </ol>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src={planet} alt="Placeholder image"></img>
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">Pixelate</p>
                    </div>
                  </div>

                  <div class="content">Graphic Designing competition</div>
                </div>
                <footer class="card-footer">
                  <a href="#" class="card-footer-item">
                    Register
                  </a>
                  <a href="#" class="card-footer-item">
                    More Info
                  </a>
                </footer>
              </div>
              <div class="modal">
                <div class="modal-background"></div>
                <div class="modal-card">
                  <header class="modal-card-head">
                    <p class="modal-card-title">Pixelate</p>
                    <button class="delete" aria-label="close"></button>
                  </header>
                  <section class="modal-card-body">
                    <img src={planet}></img>
                    <p>
                    Creation of a realistic, mosaic, exquisite and creative graphic design under the title we provided using the softwares designated by us is your purpose in this competition.
                    </p>
                    <h6 class="subtitle is-4">Topic -</h6>
                    <h6 class="subtitle is-6">
                    Nature vs Technology [Wallpaper or a banner]
                    </h6>
                    <h6 class="subtitle is-4">Softwares</h6>
                    <ul>
                      <li>• Adobe Photoshop</li>
                      <li>• Adobe Illustrator</li>
                      <li>• Corel Draw</li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src={planet} alt="Placeholder image"></img>
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">Assemblage</p>
                    </div>
                  </div>

                  <div class="content">PC Assembling competition</div>
                </div>
                <footer class="card-footer">
                  <a href="#" class="card-footer-item">
                    Register
                  </a>
                  <a href="#" class="card-footer-item">
                    More Info
                  </a>
                </footer>
              </div>
              <div class="modal">
                <div class="modal-background"></div>
                <div class="modal-card">
                  <header class="modal-card-head">
                    <p class="modal-card-title">Assemblage</p>
                    <button class="delete" aria-label="close"></button>
                  </header>
                  <section class="modal-card-body">
                    <img src={planet}></img>
                    <p class="subtitle is-5 black-text">
                    Assembling a PC of separated parts is your purpose in this competition. Winners will be judged according to the time they take to assemble the PC. The team who takes the minimum time to assemble the PC will be the winning team.
                    </p>
                  </section>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src={planet} alt="Placeholder image"></img>
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">Intellect</p>
                    </div>
                  </div>

                  <div class="content">Quiz competition</div>
                </div>
                <footer class="card-footer">
                  <a href="#" class="card-footer-item">
                    Register
                  </a>
                  <a href="#" class="card-footer-item">
                    More Info
                  </a>
                </footer>
              </div>
              <div class="modal ">
                <div class="modal-background"></div>
                <div class="modal-card">
                  <header class="modal-card-head">
                    <p class="modal-card-title">Intellect</p>
                    <button class="delete" aria-label="close"></button>
                  </header>
                  <section class="modal-card-body">
                    <img
                    src={planet}>
                    </img>
                    <p class="subtitle is-5 black-text">For the students who got a wise knowledge in the ICT field. This competition will be held at the ICT Day without any registrations, anyone can participate.</p>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div>
          <div class="container">
            <h3 class="title has-text-centered">FEATURING</h3>
          </div>
          <div class="columns">
            <div class="column mt-6">
            <figure class="card-image has-text-centered is-128x128">
  <img class="is-rounded" src="https://bulma.io/images/placeholders/256x256.png"></img>
</figure>
<div class="media-content has-text-centered">
        <p class="title is-4">John Smith</p>
        <p class="subtitle is-6">@johnsmith</p>
      </div>
            </div>
            <div class="column mt-6">
            <figure class="card-image has-text-centered is-128x128 is-square">
  <img class="is-rounded" src="https://bulma.io/images/placeholders/256x256.png"></img>
</figure>
<div class="media-content has-text-centered">
        <p class="title is-4">John Smith</p>
        <p class="subtitle is-6">@johnsmith</p>
      </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div>
          <div class="container">
            <h3 class="title has-text-centered">Throwback</h3>
            <div class="columns">
              <div class="column mr-6">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/1280x960.png"
                    alt="Placeholder image"
                  ></img>
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">Kngine'17</p>
                    <p class="subtitle is-6">To Infinity and Beyond</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mt-6">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/1280x960.png"
                    alt="Placeholder image"
                  ></img>
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">Kngine'13</p>
                    <p class="subtitle is-6">4th Generation of IT</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/1280x960.png"
                    alt="Placeholder image"
                  ></img>
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">Kngine'15</p>
                    <p class="subtitle is-6">The ultimatum of IT</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mt-6">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/1280x960.png"
                    alt="Placeholder image"
                  ></img>
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">Kngine'12</p>
                    <p class="subtitle is-6">For The Next Generation Of IT</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          </div>
          
        </div>
      </section>
      <section>
        <div class="container box box-padding">
          <div class="container has-text-centered">
            <h1 class="title is-1 has-text-weight-bold">About Us</h1>
          </div>
          <div class="container is-fluid">
              <p class="white-text mt-6 is-size-4 has-text-justified">
                RITS, Richmond College IT Society inaugurated few decades ago,
                has now dominated every school IT Societies around the island,
                doing an evolutionary change in the horizon of the school ICT
                field. RITS has shown their exellence in the vast technological
                field by competing with all the leading ICT societies in the
                schools. The Richmond College IT Society has now developed with
                the newest and timely technology and knowledge to achieve any
                target combined with our spirit and the huge co-operation of
                former members and teachers. The next phase of our annual
                celebrations; The Knowledge Engine 2018 comes out with a
                comprehensive conecpt this time. KNGINE’18 stands with the
                professional ICT knowledge and the skills to be shared with all
                the master IT minds around us and it has become the reflection
                and the unrivalled nobilty of our ICT Society.
              </p>
          </div>
        </div>
      </section>
      <div class=" cliped">
     <footer class="footer curved">
  <div class="content has-text-centered">
    <p>Copyright © Richmond College IT Society 2018</p>
  </div>
</footer>
<div class="box circle"></div>
    </div>
    </div>
  );
}
