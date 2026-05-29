import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Partnership from './components/Partnership';
import VehiclePlatform from './components/VehiclePlatform';
import Industries from './components/Industries';
import FleetSpecs from './components/FleetSpecs';
import WhyPartnership from './components/WhyPartnership';
import ProcurementJourney from './components/ProcurementJourney';
import ReserveSlate from './components/ReserveSlate';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <WhyPartnership />
        <VehiclePlatform />
        <Partnership />
        <Industries />
        <FleetSpecs />
        <ProcurementJourney />
        <ReserveSlate />
      </main>
      <Footer />
    </div>
  );
}

export default App;
