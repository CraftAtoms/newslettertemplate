import React, { Component } from "react";
import Particles from 'react-particles-js';
import "./App.css";
import Logo from "./components/Logo/Logo.js";
import Header from "./components/Header/Header.js";
import Email from "./components/Email/Email.js";
import Footer from "./components/Footer/Footer.js";
import About from "./components/About/About.js";
import { ToggleProvider } from "./components/ToggleComponent/ToggleContext";



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
        <Footer />
      </div>
    )
  }
}

export default App;
