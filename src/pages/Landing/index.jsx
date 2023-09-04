import React from 'react';

import './Landing.scss';

import { Codes, Navbar } from '../../widgets';
import cloud from '../../assets/img/cloud.png';
import Arrows from '../../assets/icons/arrows.svg';
import Bg from '../../assets/img/Bg.svg';
import Graph from '../../assets/img/Graph.svg';

function Landing() {
  return (
    <div>
      <Bg className="bg" />
      <div className="greeting">
        <div className="text">
          <h1>Digital barter</h1>
          <img src={cloud} alt="" />
        </div>
        <Arrows />
      </div>
      <div className="currency">
        <h2>Курс</h2>
        <Graph />
      </div>
      <div className="codes">
        <Bg className="bg inverted" />
        <h2>Описание кодов</h2>
        <Codes />
      </div>
    </div>
  );
}

export default Landing;
