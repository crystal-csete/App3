/** @format */

import Footer from "./Footer";
import LandingText from "./LandingText";
import Advert from "./Advert";
// import pinkbg from "./pinkbg.jpg";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <img src={pinkbg} className='App-banner' alt='pink cave' /> */}
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
