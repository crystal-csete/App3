/** @format */

import Footer from "./Footer";
import LandingText from "./LandingText";
import Advert from "./Advert";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>Travel with us</p>
        <a
          className='App-link'
          href='#travelTips'
          target='_blank'
          rel='noopener noreferrer'>
          December Travel Tips
        </a>
      </header>
      <section>
        <LandingText />
      </section>
      <section>
        <Advert />
      </section>
      <Footer />
    </div>
  );
}

export default App;
