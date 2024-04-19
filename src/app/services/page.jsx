import React from 'react';
import ParallaxSection from './components/ParallaxSection';

function App() {
  return (
    <div className="App">
      <ParallaxSection image={"/images/beach.jpg"}>
        <p>Welcome to the Beach</p>
      </ParallaxSection>
      <div className="bg-gray-700 text-white text-center p-20">
        <p>This is a normal section without parallax.</p>
      </div>
      <ParallaxSection image={"/images/forest.jpg"}>
        <p>Explore the Forest</p>
      </ParallaxSection>
    </div>
  );
}

export default App;
