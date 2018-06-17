import React, { Component } from "react";
import Particles from 'react-particles-js';
import "./App.css";
import Logo from "./components/Logo/Logo.js";
import Header from "./components/Header/Header.js";
import Email from "./components/Email/Email.js";
import Footer from "./components/Footer/Footer.js";
import About from "./components/About/About.js";
import { ToggleProvider } from "./components/ToggleComponent/ToggleContext";

/*import ToggleComponent from "./components/ToggleComponent/ToggleComponent.js";*/


const particlesOptions = {
  particles: {
    number: {
      value: 120,
      Density: {
        enable: true,
        value_area: 800
      }
    }
  },
  color: {
    "value": "#84d6b7"
  },
  interactivity: {
    detect_on: "window",
    events: {
      "onhover": {
        enable: true,
        mode: "repulse"
      }
}
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className='particles'
           params={particlesOptions}      
      />
        );
    };
}
        <Logo />
        <Header />
        <Email />
        <ToggleProvider>
          <About />
        </ToggleProvider>
        
       {/*} <ToggleComponent> 
        {({ on, toggle }) => (
          <div>
            {on && 
            <div>
            <h1 className='white'>Who we are.</h1>
            <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
            <div className='tc'>
            <img src="http://tachyons.io/img/avatar_1.jpg" alt='avi'class="br-100 h3 w3 dib" title="Photo of a kitty staring at you">
            </img>
            <h1 className="f4">React News</h1>
            <hr className="mw3 bb bw1 b--black-10"></hr>
            </div>
            <p class="lh-copy measure center f6 black-70">
              We are the #1 source for keeping you informed about React JS. In the quickly changing world of frontend development we are the edge. Each week we send out an email of high quality resouces to get you up to speed. Subscribe above so that we can help you maintain an edge!
            </p>
            </article>
            </div>
            }
            <button className='f6 b link ba bw2 ph3 pv2 mb2 dib black' onClick={toggle}>About Us</button>
          </div>
        )}
        </ToggleComponent>*/}
        <Footer />
      </div>
    )
  }
}

export default App;
