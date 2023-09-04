import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';

import './style.scss';

import {
  AddCompany,
  Sell,
  Landing,
  Profile,
  Refill,
  Repayment,
  Transfer,
  HardSell,
  HardRefill,
} from './pages';
import { LeftMenu, Location, Navbar } from './widgets';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Landing />} />
        </Routes>
        <div className="location">
          <div className="nav">
            <Location />
            <LeftMenu />
          </div>

          <Routes>
            {/* <Route exact path="/" element={<Landing />} /> */}
            <Route path="/addcompany" element={<AddCompany />} />
            <Route path="/refill" element={<Refill />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/repayment" element={<Repayment />} />
            <Route path="/transfer" element={<Transfer />} />
            <Route path="/hardrefill" element={<HardRefill />} />
            <Route path="/hardsell" element={<HardSell />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
