import React, {useRef, useEffect} from 'react';
// import { TweenMax } from 'gsap/gsap-core';
import { gsap, TimelineLite, Power3 } from 'gsap';
import './App.css';
import image1 from './images/zone-1.jpg';
import image2 from './images/zone-2.jpg';

// useEffect allows us to execute certain functions once the dom has finished loading or before it is loaded
// useRef allows us to reference an element in the dom

function App() {
  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);
  let tl = new TimelineLite({delay: .8});

  useEffect( () => {
    //images variables
    const image1 = images.firstElementChild;
    const image2 = images.lastElementChild;
    
    //content variables
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    //removing the initial flash
    gsap.to(app, 0, {css: {visibility: 'visible'}})
    //images animation
    tl.from(image1, 1.2, {y: 1280, ease: Power3.easeOut}, 'Start')
    .from(image1.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
    .from(image2, 1.2, {y: 1280, ease: Power3.easeOut},.2)
    .from(image2.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2);

    //content animation
    tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children], 1, 
      {
        y:44,
        ease: Power3.easeOut,
        delay: .8 
      }, .15, 'Start')
      .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut}, 1.4)
      .from(contentButton, 1, { y: 20, opacity: 0, ease: Power3.easeOut}, 1.6)
  }, [tl])
  // visibility: hidden;
  return (
    <div className="hero" ref={ el => app = el}>
      <div className="container">
        <div className="hero-inner">
        <div className="hero-content">
        <div className="hero-contente-inner" ref={ el => content = el}>
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
          <div className="hero-images-inner" ref={ el => images = el}>
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
