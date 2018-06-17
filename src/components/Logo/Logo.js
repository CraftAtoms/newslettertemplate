import React from "react";
import Tilt from 'react-tilt';
import reactlogo from './reactlogo.png'


const Logo = () => {
    return (
    <div className= 'ma4 mt4'>
      <Tilt className="Tilt br2 " options={{ max : 85 }} style={{ height: 150, width: 150 }} >
      <div className="Tilt-inner"><img alt='logo' src={reactlogo}/></div>
      </Tilt>
    </div>
    );
}

export default Logo;