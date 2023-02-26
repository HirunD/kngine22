
/* eslint-disable */
import React, { useState, useEffect } from "react";
// import "bulma/css/bulma.min.css";
// import styles from "./index.comp.css";
import "./index.comp.css";
import cosmos from "../img/cosmos.png";
import planet from "../img/earth.png";
import planet_dup from "../img/planet_dup.png";
import rock from "../img/rock.png";
import ISS from "../img/ISS.png";
import station from "../img/station.png";
import loader from "../img/loader2.png";
import loader_mobile from "../img/loader3.jpg";
import code_com from "../img/comp_icons/code_com.png";
import cybercomb from "../img/comp_icons/Cybercomb.png";
import dexigner from "../img/comp_icons/Dexigner.png";
import intellect from "../img/comp_icons/Intellect.png";
import web_dezigner from "../img/comp_icons/Web_Dezigner.png";
import kngine from "../img/kngine_22.png";
import kngine19 from "../img/throwback/kngine19.jpg";
import kngine20 from "../img/throwback/kngine20.png";
import kngine17 from "../img/throwback/kngine17.jpg";
import kngine15 from "../img/throwback/kngine15.jpg";
import kngine13 from "../img/throwback/kngine13.jpg";
import kngine12 from "../img/throwback/kngine12.jpg";

import s1 from "../img/speakers/SuvinNimnaka.png";
import s2 from "../img/speakers/MaheepaD.png";
import s3 from "../img/speakers/SahanD.jpg";
import throwbacks from "../img/comp_icons/Dexigner.png";
import about from "../img/comp_icons/Intellect.png";
import "../components/Navbar.css";

import { useCountdown } from "../hooks/useCountdown";

// import firebase from 'firebase/app';
// import'firebase/firestore';

// import { useCollectionData } from 'react-firebase-hooks/firestore'

// firebase.initializeApp({
//   apiKey: "AIzaSyC1JoAr0bzZUwZSJosuQgn3IPrN7LwOFro",
//   authDomain: "kngine22.firebaseapp.com",
//   projectId: "kngine22",
//   storageBucket: "kngine22.appspot.com",
//   messagingSenderId: "929784554490",
//   appId: "1:929784554490:web:50fa52c31fee65ed9bfa43"
// })

// const firestore = firebase.firestore();
// function submit(form) {
//   const formRef = firestore.collection('Forms')

//   const [formValuecodecomsn, setFormValuecodecomsn] = useState('')
//   const [formValuecodecompn, setFormValuecodecompn] = useState('')
//   const [formValuecodecomcn, setFormValuecodecomcn] = useState('')
//   const [formValuecodecomce, setFormValuecodecomce] = useState('')
//   const [formValuecodecomct, setFormValuecodecomct] = useState('')
//   const [formValuecodecomdl, setFormValuecodecomdl] = useState('')

//   // const [formValuewebdez, setformValuewebdez] = useState('')
//   // const [formValuewebdez, setformValuewebdez] = useState('')
//   // const [formValuewebdez, setformValuewebdez] = useState('')
//   // const [formValuewebdez, setformValuewebdez] = useState('')
//   // const [formValuewebdez, setformValuewebdez] = useState('')
//   // const [formValuewebdez, setformValuewebdez] = useState('')

//   // const [formValuecc, setformValuecc] = useState('')
//   // const [formValuecc, setformValuecc] = useState('')
//   // const [formValuecc, setformValuecc] = useState('')
//   // const [formValuecc, setformValuecc] = useState('')
//   // const [formValuecc, setformValuecc] = useState('')
//   // const [formValuecc, setformValuecc] = useState('')

//   // const [formValuedexigner, setformValuedexigner] = useState('')
//   // const [formValuedexigner, setformValuedexigner] = useState('')
//   // const [formValuedexigner, setformValuedexigner] = useState('')
//   // const [formValuedexigner, setformValuedexigner] = useState('')
//   // const [formValuedexigner, setformValuedexigner] = useState('')
//   // const [formValuedexigner, setformValuedexigner] = useState('')

//   // const [formValueinterlect, setformValueinterlect] = useState('')
//   // const [formValueinterlect, setformValueinterlect] = useState('')
//   // const [formValueinterlect, setformValueinterlect] = useState('')
//   // const [formValueinterlect, setformValueinterlect] = useState('')
//   // const [formValueinterlect, setformValueinterlect] = useState('')
//   // const [formValueinterlect, setformValueinterlect] = useState('')

//   const sendMessagecodecom = async(e)=> {
//     e.preventDefault();
//     await formRef.codecom.add({
//       school_name : formValuecodecomsn,
//       project_name : formValuecodecompn,
//       compt_name : formValuecodecomcn,
//       compt_email : formValuecodecomce,
//       compt_tp : formValuecodecomct,
//       drive : formValuecodecomdl
//     })
//   }
//   const sendMessagewebdez = async(e)=> {
//     e.preventDefault();
//     await formRef.codecom.add({
//       school_name : formValuecodecomsn,
//       project_name : formValuecodecompn,
//       compt_name : formValuecodecomcn,
//       compt_email : formValuecodecomce,
//       compt_tp : formValuecodecomct,
//       drive : formValuecodecomdl
//     })
//   }
//   const sendMessagecyberc = async(e)=> {
//     e.preventDefault();
//     await formRef.codecom.add({
//       school_name : formValuecodecomsn,
//       project_name : formValuecodecompn,
//       compt_name : formValuecodecomcn,
//       compt_email : formValuecodecomce,
//       compt_tp : formValuecodecomct,
//       drive : formValuecodecomdl
//     })
//   }
//   const sendMessagedex = async(e)=> {
//     e.preventDefault();
//     await formRef.codecom.add({
//       school_name : formValuecodecomsn,
//       project_name : formValuecodecompn,
//       compt_name : formValuecodecomcn,
//       compt_email : formValuecodecomce,
//       compt_tp : formValuecodecomct,
//       drive : formValuecodecomdl
//     })
//   };


// }

function Competitionsmodel() {

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  let navbar = document.getElementById("nav");
  let earth = document.getElementById("planet");
  let more_info = document.getElementById("more-info");

  const targetDate = new Date("March 02, 2023 09:30:00");
  const [days, hours, minutes, seconds] = useCountdown(targetDate);


  const [modalOpen, setModalOpen] = useState("");

  const handleClick = () => {
    setModalOpen("is-active");
  };

  const handleClose = () => {
    setModalOpen("");
  };
  const [modalOpen1, setModalOpen1] = useState("");

  const handleClick1 = () => {
    setModalOpen1("is-active");
  };

  const handleClose1 = () => {
    setModalOpen1("");
  };
  const [modalOpen2, setModalOpen2] = useState("");

  const handleClick2 = () => {
    setModalOpen2("is-active");
  };

  const handleClose2 = () => {
    setModalOpen2("");
  };
  const [modalOpen3, setModalOpen3] = useState("");

  const handleClick3 = () => {
    setModalOpen3("is-active");
  };

  const handleClose3 = () => {
    setModalOpen3("");
  };
  const [modalOpen4, setModalOpen4] = useState("");

  const handleClick4 = () => {
    setModalOpen4("is-active");
  };

  const handleClose4 = () => {
    setModalOpen4("");
  };

  // form controll
  const [formOpen1, setFormOpen1] = useState("");

  const handleClickf1 = () => {
    setFormOpen1("is-active");
  };

  const handleClosef1 = () => {
    setFormOpen1("");
  };

  // form 2
  const [formOpen2, setFormOpen2] = useState("");

  const handleClickf2 = () => {
    setFormOpen2("is-active");
  };

  const handleClosef2 = () => {
    setFormOpen2(" ");
  };

  // form 3
  const [formOpen3, setFormOpen3] = useState("");

  const handleClickf3 = () => {
    setFormOpen3("is-active");
  };

  const handleClosef3 = () => {
    setFormOpen3("");
  };
  // form 4
  const [formOpen4, setFormOpen4] = useState("");

  const handleClickf4 = () => {
    setFormOpen4("is-active");
  };

  const handleClosef4 = () => {
    setFormOpen4("");
  };
  // form 5
  const [formOpen5, setFormOpen5] = useState("");

  const handleClickf5 = () => {
    setFormOpen5("is-active");
  };

  const handleClosef5 = () => {
    setFormOpen5("");
  };
  const [modalOpennav, setModalOpennav] = useState("");
  const [modalOpenmenu, setModalOpenmenu] = useState("");
  const [modalOpennavclose, setModalOpennavclose] = useState("hide");

  const handleClicknav = () => {
    setModalOpennav("hide");
    setModalOpenmenu("is-active");
    setModalOpennavclose(" ");
  };

  function myMove() {
    var id = null;

    var elem = document.getElementById("nav");
    function myMove() {
      var pos = 0;
      clearInterval(id);
      id = setInterval(frame, 10);
      console.log("mousedown");
      function frame() {
        if (pos == 350) {
          clearInterval(id);
        } else {
          pos++;
          elem.style.top = pos + "px";
          elem.style.left = pos + "px";
        }
      }
    }
  }

  const handleClosenav = () => {
    setModalOpennavclose("hide");
    setModalOpenmenu(" ");
    setModalOpennav(" ");
  };

  const [loadervisible, setloadervisible] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setloadervisible("hide-load");
    }, 3000);
  });
    // girl-boys switch
    const [formvisibleg, setformvisibleg] = useState("");
    const [formvisibleb, setformvisibleb] = useState("is-active");

    const handleformclickboy = () => {
      setformvisibleg(" ");
      setformvisibleb("is-active");
    };
  
    const handleformclickgirl = () => {
      setformvisibleg("is-active");
      setformvisibleb(" ");
    };



  return (
    <>
    <img src={cosmos} className="logo"></img>
      {/* <div class="full comp-full">
        <img
          src={planet_dup}
          data-aos="zoom-out-left"
          data-aos-duration="5000"
        ></img>
      </div>
      <div class="full feat-full">
        <img src={rock} data-aos="zoom-out-left"  ="5000"></img>
      </div>
      <div class="full throw-full">
        <img
          src={station}
          data-aos="zoom-out-left"
           ="5000"
        ></img>
      </div> */}
      {/* <div class="full abt-full">
        <img src={ISS} data-aos="zoom-out-left"  ="5000"></img>
      </div> */}
      <div class={`loading ${loadervisible} desktop-load`}>
        <img
          src={cosmos}
          class="load-img"
          data-aos="zoom-out"
          
        ></img>
      </div>
      <div class={`loading  ${loadervisible} loader-mobile`}>
        <img
          src={cosmos}
          class="load-img-mobile"
          data-aos="zoom-out"
          
        ></img>
      </div>
      <div class="navbar is-fixed-top" data-aos="zoom-out" data-aos-anchor-placement="top-center">
        <div class="navbar-brand">
          <a
            role="button"
            class={`navbar-burger nav-open ${modalOpennav} ${modalOpenmenu}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={handleClicknav}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
          <a
            role="button"
            class={`navbar-burger nav-close ${modalOpennavclose} ${modalOpenmenu}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={handleClosenav}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
          <a class="navbar-item cosmos">
      <img src={cosmos} width="112" height="28"></img>
    </a>
        </div>
        <div class={`navbar-menu ${modalOpenmenu}`} onClick={handleClosenav}>
        
          <a class="navbar-item" href="#comp">
            COMPITIONS
          </a>
          <a class="navbar-item" href="#speakers" onMouseOver={myMove}>
            FEATURING
          </a>
          <a class="navbar-item" href="#throwbacks">
            THROWBACK
          </a>
          <a class="navbar-item" href="#about">
            ABOUT US
          </a>
        </div>
        {/* <div class="navbar-menu">
          <div className="navabar-end">
        
    </div>
        </div> */}
      </div>
      <div class="nav " id="nav" data-aos="slide-right" data-aos-anchor-placement="top-center">
        <div class="glass div " id="n1">
          <a href="#comp" class="title is-6 nav-t">
            Competitions
          </a>
        </div>
        <div class="glass div " id="n2">
          <a href="#speakers" class="title is-6 nav-t">
            Speakers
          </a>
        </div>
        <div class="glass div " id="n3">
          <a href="#throwbacks" class="title is-6 nav-t">
            Throwback
          </a>
        </div>
        <div class="glass div " id="n4">
          <a href="#about" class="title is-6 nav-t">
            about us
          </a>
        </div>
      </div>

      <div>
        <section
          id="hero"
          class="hero is-fullheight"
        >
          <div class="hero-body">
            <div class="columns">
              <div class="column is-6 is-align-self-center has-text-centered">
                <h2 class="is-2 has-text-white countdown" id="count">
                  {days} : {hours}
                </h2>
                <h2 class="is-2 has-text-white countdown" id="count">
                  {minutes} : {seconds}
                </h2>
                <h2 class="is-2 title countdown-mobile" id="count">
                  {days} : {hours} : {minutes} : {seconds}
                </h2>
                {/* <hr class="breaker2"></hr>
                <hr class="breaker3"></hr>
                <h2 class="title countdown" id="count">
                  {minutes} : {seconds}
                </h2> */}
              </div>
              <div class="column is-6 is-align-self-center has-text-centered">
                <img src={planet} class="planet" id="planet"></img>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <div class="model-holder">
        <div class={`modal ${modalOpen}`}>
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">Code_com</p>
              <button
                class="delete"
                onClick={handleClose}
                aria-label="close"
              ></button>
            </header>
            <section class="modal-card-body">
              <img src={code_com}></img>
              <iframe  class="iframe" src="https://drive.google.com/file/d/11S-TFUXDxgxwZot0BWuu--s76-HGUbnf/preview" allow="autoplay"></iframe>
            </section>
          </div>
        </div>
        <div class={`modal ${modalOpen1}`}>
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">HYPERLINK</p>
              <button
                class="delete"
                aria-label="close"
                onClick={handleClose1}
              ></button>
            </header>
            <section class="modal-card-body">
              <img src={web_dezigner}></img>
              <p>
                Creating a website/ webpage for the given topic, using the below
                mentioned web designing language or web designing software.
              </p>
              <p>
                The creation that is most relevant to the topic and most
                creative will be the winning creation.
              </p>
              <h6 class="subtitle is-4 mt-4  ">Topic -</h6>
              <h6 class="subtitle is-6  ">
                A Website To Represent Your School
              </h6>
              <h6 class="subtitle is-4  ">Programming languages -</h6>
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
        <div class={`modal ${modalOpen2}`}>
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">CYBERCOMBAT</p>
              <button
                class="delete"
                aria-label="close"
                onClick={handleClose2}
              ></button>
            </header>
            <section class="modal-card-body">
              <img src={cybercomb}></img>
              <h1 class="subtitile is-1 has-text-centered">
                Rules and Regulations
              </h1>
              <h6 class="subtitle is-4 has-text-centered">
                Call of Duty 4 – Modern Warfare (2007) - Boys Event
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
                      - 24 rounds, with half time and switching sides at 12
                      (Grand Final)
                    </li>
                  </ul>
                </li>
                <li>
                  • Score Limit{" "}
                  <ul>
                    <li class="offset">
                      - First team to reach 7 will be the map winner (1st/ 2nd /
                      3rd Sessions)
                    </li>
                    <li class="offset">
                      - First team to reach 10 will be the map winner (Semi
                      Finals)
                    </li>
                    <li class="offset">
                      - First team to reach 13 will be the map winner (Grand
                      Final)
                    </li>
                  </ul>
                </li>
                <li>
                  • All matches will be played on promodlive220_EU (promod_mode
                  lan_knockout_mrx)
                </li>
                <li>• FPS Limit 125</li>
              </ul>
              <h6 class="subtitle is-5 mt-4">Tie Breaker</h6>
              <p>
                If both teams have an equal number of map wins(or rounds) at the
                end of two maps(or one map) played, a tie breaker map will be
                played where the winner of that map will win the match. Both the
                map and the side selection will be decided by two coin tosses.
                If the first tie breaker ends up as a draw same map will be
                played and sides will be changed (e.g.: first tie breaker match
                team who attacked first now have to defend first).
              </p>
              <h6 class="subtitle is-5 mt-4">Maps</h6>
              <ol class="ml-5 ">
                <li>mp_backlot (Backlot)</li>
                <li>mp_crash (Crash)</li>
                <li>mp_crossfire (Crossfire)</li>
                <li>mp_citystreet (District)</li>
                <li>mp_strike (Strike)</li>
              </ol>
              <p className="pt-3">Substitutions – Only players signed up on the team list may be used as substitutes.</p>
              <p className="pt-3">If you want use custom cfg email it <a href="mailto:richmondcollegeict@gmail.com">richmondcollegeict@gmail.com</a> before 18th february 2023. If not You have to play with a cfg given to by the organizing committee</p>
              <h6 class="subtitle is-4 has-text-centered">
                Need For Speed - Girls Event
              </h6>
              <h6 class="subtitle is-5  has-text-centered">Time Trial</h6>
            </section>
          </div>
        </div>
        <div class={`modal ${modalOpen3}`}>
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">deXigner</p>
              <button
                class="delete"
                aria-label="close"
                onClick={handleClose3}
              ></button>
            </header>
            <section class="modal-card-body">
              <img src={dexigner}></img>
              <p>
                Creation of a realistic, mosaic, exquisite and creative graphic
                design under the title we provided using the softwares
                designated by us is your purpose in this competition.
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
        <div class={`modal ${modalOpen4}`}>
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">Intellect</p>
              <button
                class="delete"
                aria-label="close"
                onClick={handleClose4}
              ></button>
            </header>
            <section class="modal-card-body">
              <img src={intellect}></img>
              <p class="subtitle is-5  ">
                For the students who got a wise knowledge in the ICT field. This
                competition will be held at the ICT Day without any
                registrations, anyone can participate.
              </p>
            </section>
          </div>
        </div>
        {/* forms */}
        <div class={`modal ${formOpen1}`}>
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">Code_com</p>
              <button
                class="delete"
                aria-label="close"
                onClick={handleClosef1}
              ></button>
            </header>
            <section class="modal-card-body">
              <img src={code_com}></img>
              <hr class="breaker-form"></hr>
              <iframe className="iframe" src="https://docs.google.com/forms/d/e/1FAIpQLSf8qYN20S0jz54evnkPP6ZRrweNsUgBWrPTaCgFPRtzIV931Q/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
              {/* <iframe className="small-iframe" src="https://docs.google.com/forms/d/e/1FAIpQLSf8qYN20S0jz54evnkPP6ZRrweNsUgBWrPTaCgFPRtzIV931Q/viewform?embedded=true" width="250" height="520" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
            </section>
          </div>
        </div>
        <div class={`modal ${formOpen3}`}>
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">Cyber_Combat</p>
              <button
                class="delete"
                aria-label="close"
                onClick={handleClosef3}
              ></button>
            </header>
            <section class="modal-card-body">
              
              <img src={cybercomb}></img>
              <div class="select-gender centered-div">
              <button class={`button mr-3 ${formvisibleg}`} onClick={handleformclickgirl}>Girls</button>
              <button class={`button ${formvisibleb}`} onClick={handleformclickboy}>Boys</button>
              </div>
              <div class="girl-form"><iframe class={`hide-form ${formvisibleg}`}  src="https://docs.google.com/forms/d/e/1FAIpQLSfVb-E41W-6Mqv_2EoxLDjSreMhxD1DzrbePsIRzFI4ctmtCw/viewform?embedded=true" width="600" height="650" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
              </div>
              <div class="boy-form"><iframe class={`hide-form ${formvisibleb}`} src="https://docs.google.com/forms/d/e/1FAIpQLSdVM3VReeaFE-VdD9e9905XikEpd-7-1tcwlfEpgbSjv9rMvA/viewform?embedded=true" width="600" height="650" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
              </div>
            </section>
          </div>
        </div>
        <div class={`modal ${formOpen4}`}>
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">Dexigner</p>
              <button
                class="delete"
                aria-label="close"
                onClick={handleClosef4}
              ></button>
            </header>
            <section class="modal-card-body">
              <img src={dexigner}></img>
              <hr class="breaker-form"></hr>
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfMeSe6OoXHTsebKz5CyX25dkRXwAGLfvGghar8OPE-PypUfA/viewform?embedded=true" width="600" height="520" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </section>
          </div>
        </div>
        <div class={`modal ${formOpen5}`}>
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">Intellect</p>
              <button
                class="delete"
                aria-label="close"
                onClick={handleClosef5}
              ></button>
            </header>
            <section class="modal-card-body">
              <img src={intellect}></img>
              <h5>For the students who got a wise knowledge in the ICT field. This competition will be held at the ICT Day without any registrations, anyone can participate.</h5>
            </section>
          </div>
        </div>
      </div>
      <section
        id="comp"
        class="section sec-comp "
      >
        <div class="container is-widescreen">
          <h3 class="title has-text-centered mt-5" data-aos="fade-up" data-aos-anchor-placement="top-center" >
            Competitions
          </h3>
          <h5 class="subtitle has-text-centered mb-5" data-aos="fade-up" data-aos-anchor-placement="top-center">
            Submit your projects before 23:59 28 February 2023
          </h5>
          <div className="container" data-aos="fade"   data-aos-anchor-placement="top-center">
          <div class="columns mt-6 ">
            <div class="column">
              <div class="card" >

                <div class="card-image comp-img">
                  <figure class="image is-4by3">
                    <img src={code_com} alt="Placeholder image"></img>
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">Code_com</p>
                    </div>
                  </div>

                  <div class="content">Programming competition</div>
                </div>
                <footer class="card-footer">
                  <a onClick={handleClickf1} class="card-footer-item">
                    Register
                  </a>
                  <a onClick={handleClick} class="card-footer-item">
                    More Info
                  </a>
                </footer>
              </div>
            </div>

            {/* <div class="column"  >
              <div class="card">
                <div class="card-image comp-img">
                  <figure class="image is-4by3">
                    <img src={web_dezigner} alt="Placeholder image"></img>
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">web deZign</p>
                    </div>
                  </div>

                  <div class="content">Web Designing competition</div>
                </div>
                <footer class="card-footer">
                  <a onClick={handleClickf2} class="card-footer-item">
                    Register
                  </a>
                  <a onClick={handleClick1} class="card-footer-item">
                    More Info
                  </a>
                </footer>
              </div>
            </div> */}
            <div class="column">
              <div class="card"   >
                <div class="card-image comp-img">
                  <figure class="image is-4by3">
                    <img src={cybercomb} alt="Placeholder image"></img>
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
                  <a onClick={handleClickf3} class="card-footer-item">
                    Register
                  </a>
                  <a onClick={handleClick2} class="card-footer-item">
                    More Info
                  </a>
                </footer>
              </div>
            </div>
            <div class="column">
              <div class="card"   >

                <div class="card-image comp-img">
                  <figure class="image is-4by3">
                    <img src={dexigner} alt="Placeholder image"></img>
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">deXigner</p>
                    </div>
                  </div>

                  <div class="content">Graphic Designing competition</div>
                </div>
                <footer class="card-footer">
                  <a onClick={handleClickf4} class="card-footer-item">
                    Register
                  </a>
                  <a onClick={handleClick3} class="card-footer-item">
                    More Info
                  </a>
                </footer>
              </div>
            </div>
          </div>
          <div class="columns  ">
            <div class="column">
              <div class="card"   >
                <div class="card-image comp-img ">
                  <figure class="image is-4by3">
                    <img src={intellect} alt="Placeholder image"></img>
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
                  <a onClick={handleClickf5} class="card-footer-item">
                    Register
                  </a>
                  <a onClick={handleClick4} class="card-footer-item">
                    More Info
                  </a>
                </footer>
              </div>
            </div>
            <div
              class="column"
               
            ></div>
            <div
              class="column"
               
            ></div>
          </div>
          </div>
        </div>
      </section>
      <hr class="breaker" data-aos="zoom-in" data-aos-anchor-placement="top-center" ></hr>
      <section
        id="speakers"
        class="section "
        data-aos="zoom-out"
        data-aos-anchor-placement="top-center"
      >
        <div>
          <div class="container">
            <h3 class="title has-text-centered">
              SPEAKERS
            </h3>
          </div>
          <div class="columns">
            <div class="column mt-6"    >
              <div class="hover">
                <figure class="card-image has-text-centered is-128x128">
                  <div class="speakers-div is-rounded">
                    <img
                      class="speakers-img is-rounded"
                      src={s1}
                    // src="https://bulma.io/images/placeholders/256x256.png"
                    ></img>
                  </div>
                </figure>
                <div class="media-content has-text-centered">
                  <p class="title is-4">Suvin Nimnaka</p>
                  <p class="subtitle is-6">GitHub Campus Expert</p>
                </div>
              </div>
            </div>
            <div class="column mt-6"    >
              <div class="hover">
                <figure class="card-image has-text-centered is-128x128 is-square">
                  <div class="speakers-div is-rounded">
                    <img
                      class="speakers-img is-rounded"
                      src={s3}
                    // src="https://bulma.io/images/placeholders/256x256.png"
                    ></img>
                  </div>
                </figure>
                <div class="media-content has-text-centered">
                  <p class="title is-4">Sahan Dissanayake</p>
                  <p class="subtitle is-6">Researcher | Final Year Undergraduate at UCSC</p>
                </div>
              </div>
            </div>
            <div class="column mt-6"    >
              <div class="hover">
                <figure class="card-image has-text-centered is-128x128 is-square">
                  <div class="speakers-div is-rounded">
                    <img
                      class="speakers-img is-rounded"
                      src={s2}
                    // src="https://bulma.io/images/placeholders/256x256.png"
                    ></img>
                  </div>
                </figure>
                <div class="media-content has-text-centered">
                  <p class="title is-4">Maheepa Daham</p>
                  <p class="subtitle is-6">Director General at  <a target="_blank" href="https://volunteerforum.org">Volunteerforum</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr class="breaker" data-aos="zoom-in"></hr>
      <section
        id="throwbacks"
        class="section "
        data-aos="zoom-out"
        data-aos-anchor-placement="top-center"
      >
        <div>
          <div class="container throw-cont">
            <h3 class="title has-text-centered">
              Throwback
            </h3>
            <div class="columns    pb-5">
              <div class="column ">
                <div class="card mb-6"    >
                  <div class="card-image">
                    <figure class="throwback-img image is-4by3 ">
                      <img src={kngine20} alt="Placeholder image"></img>
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-content">
                        <p class="title is-4">Kngine'20</p>
                        <p class="subtitle is-6">Excellence Of The Experience</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card mb-6"    >
                  <div class="card-image">
                    <figure class="throwback-img image is-4by3 ">
                      <img src={kngine17} alt="Placeholder image"></img>
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
                <div class="card mt-6"    >
                  <div class="card-image">
                    <figure class="throwback-img image is-4by3 ">
                      <img src={kngine13} alt="Placeholder image"></img>
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-content">
                        <p class="title is-4">Kngine'13</p>
                        <p class="subtitle is-6">KNGINE 4G</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card mb-6"    >
                  <div class="card-image">
                    <figure class="throwback-img image is-4by3 ">
                      <img src={kngine17} alt="Placeholder image"></img>
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
              </div>
              <div class="column ">
                <div class="card mb-6"    >
                  <div class="card-image">
                    <figure class="throwback-img image is-4by3 ">
                      <img src={kngine19} alt="Placeholder image"></img>
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-content">
                        <p class="title is-4">Kngine'19</p>
                        <p class="subtitle is-6">To Redefine the Technology</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card mb-6"    >
                  <div class="card-image">
                    <figure class="throwback-img image is-4by3 ">
                      <img src={kngine15} alt="Placeholder image"></img>
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
                <div class="card mt-6"    >
                  <div class="card-image">
                    <figure class="throwback-img image is-4by3 ">
                      <img src={kngine12} alt="Placeholder image"></img>
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-content">
                        <p class="title is-4">Kngine'12</p>
                        <p class="subtitle is-6">
                          For The Next Generation Of IT
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr class="breaker" data-aos="zoom-in"></hr>
      <section
        id="about"
        class="section mb-6 moremargin"
        data-aos="zoom-out"
        data-aos-anchor-placement="top-center"
      >
        <div class="container box box-padding">
          <div class="container has-text-centered">
            <h1 class="title is-1 has-text-weight-bold">
              About Us
            </h1>
          </div>
          <div class="container is-fluid">
            <p
              class="white-text mt-6 is-size-4 has-text-justified"
               
            >
              RITS, the Richmond College IT Society, which was established a few
              decades ago, today dominates all of the island's school IT
              societies, bringing about an evolution in the ICT area for
              education. RITS has demonstrated their superiority in the vast
              field of technology by competing with all of the top schools' ICT
              societies. The Richmond College IT Society has evolved with the
              most recent and relevant information and technology to reach any
              goal, mixed with our spirit and the enormous cooperation of former
              members and teachers. Knowledge Engine 2023 releases a thorough
              checklist for our upcoming phase of annual celebrations. KNGINE's
              cosmos has emerged as our ICT society's unrivaled nobility,
              standing with professional ICT knowledge and abilities to be
              shared with all the master IT brains around us.
            </p>
          </div>
        </div>
      </section>
      <div></div>
      <hr class="breaker"></hr>
      <div class=" cliped aos-animate" data-aos="zoom-out" data-aos-anchor="#about">
        <footer class="footer curved">
          <div class="content has-text-centered">
            <a
              href="https://www.facebook.com/RITS.KNGINE?mibextid=ZbWKwL"
              class="fa fa-facebook"
            ></a>
            <a
              href="https://www.instagram.com/richmonditsociety/"
              class="fa fa-instagram"
            ></a>
            <a href="https://twitter.com/KNGINE20" class="fa fa-twitter"></a>
            <p>Copyright © Richmond College IT Society 2023</p>
          </div>
        </footer>
        <div class="box circle"></div>
      </div>
    </>
  );
}
export default Competitionsmodel;