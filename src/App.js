import './App.css';
import image1 from './images/zone-1.jpg';
import image2 from './images/zone-2.jpg';

function App() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-inner">
        <div className="hero-content">
        <div className="hero-contente-inner">
          <h1>
            <div className="hero-content-line">
              <div className="hero-content-line-inner">Releaving the burden</div>
            </div>
            <div className="hero-content-line">
              <div className="hero-content-line-inner">of disease caused</div>
            </div>
            <div className="hero-content-line">
              <div className="hero-content-line-inner">by behaviors</div>
            </div>
          </h1>
          <p>better treats serious cardionetabolic diseases to transform lives and reduce healthcare utilization
            through the use of digital theraputics.
          </p>
          <div className="btn-row">
            <button className="explore-btn">
              explore
              <div className="arrow-icon">&rarr;</div>
            </button>
          </div>
        </div>
        </div>
        <div className="hero-images">
          <div className="hero-images-inner">
            <div className="hero-image first-image">
              <img src={image1} alt="first img" />
            </div>
            <div className="hero-image secong-image">
              <img src={image2} alt="second img" />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
