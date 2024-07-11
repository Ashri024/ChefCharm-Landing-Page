import { useState,useEffect } from "react";
import AnimationContext from "./AnimationContext";
import PropTypes from 'prop-types';
import gsap from "gsap";
import { Back } from "gsap/gsap-core";

AnimationProvider.propTypes = {
    children: PropTypes.node,
}

function AnimationProvider({children}) {
  const translateYValues = {
    mq500: "-20%",
    mq768: "-40%",
    mq1024: "-45%",
    mq1280: "-55%",
    default: "-63%",
  };
  const bgGifTopValues={
    default:"40vh",
    mq1280:"50vh",
    mq1024:"60vh",
    mq768:"55vh",
    mq500:"75vh"
  }
  const getScreenCategory = () => {
    if (window.matchMedia("(max-width: 500px)").matches) return 'mq500';
    if (window.matchMedia("(max-width: 768px)").matches) return 'mq768';
    if (window.matchMedia("(max-width: 1024px)").matches) return 'mq1024';
    if (window.matchMedia("(max-width: 1280px)").matches) return 'mq1280';
    return 'default';
  };

  const [screenCategory, setScreenCategory] = useState(getScreenCategory());

  useEffect(() => {
    const handleResize = () => {
      setScreenCategory(getScreenCategory());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  function bgGifY(screenCategory) {
    if(screenCategory === 'mq500') {
      let bgGifTop = "100vh";
      let bgGifTopIntro = "35vh";
      return {bgGifTop,bgGifTopIntro}
    }else if(screenCategory === 'mq768') {
      let bgGifTop = "100vh";
      let bgGifTopIntro = "35vh";
      return {bgGifTop,bgGifTopIntro}
    }
    else if(screenCategory === 'mq1024') {
      let bgGifTop = "60vh";
      let bgGifTopIntro = "30vh";
      return {bgGifTop,bgGifTopIntro}
    }
    else if(screenCategory === 'mq1280') {
      let bgGifTop = "50vh";
      let bgGifTopIntro = "45vh";
      return {bgGifTop,bgGifTopIntro}
    }
    else {
      let bgGifTop = "40vh";
      let bgGifTopIntro = "48vh";
      return {bgGifTop,bgGifTopIntro}
    }
  }
  function typeWriting(text, typeRef, typewriter){
    return new Promise((resolve, reject) => {
      if (!typewriter) {
        reject('Typewriter not initialized');
        return;
      }
      typewriter.callFunction(() => {
        const cursorElement = typeRef.current.querySelector('.Typewriter__cursor');
        if (cursorElement) {
          cursorElement.style.display = 'inline-block';
        }
      }).deleteAll(5)
        .typeString(text)
        .callFunction(() => {
          const cursorElement = typeRef.current.querySelector('.Typewriter__cursor');
          if (cursorElement) {
            cursorElement.style.display = 'none';
          }
        })
        .callFunction(() => {
          resolve(); // Resolve the promise after all operations are done
        })
        .start();
    });
  }
    function onChangeEnterAnimation(text,typewriter,typeRef){
      return typeWriting(text,typeRef,typewriter)
    }
  function onPageEnterAnimation(typeRef, screenCategory){
    let tl4= gsap.timeline()
    
            tl4.to('.bgGradientEllipse', { duration: 2, rotate: 180, ease: "power4.inOut", translateX: "40%",translateY: "-20%" })
            .to("#bgGifLottie", { duration: 2, rotate:90,top:bgGifY(screenCategory).bgGifTopIntro,translateX:"-37%",translateY: 0 },"<")
            .to("#bgGif",{
              duration: 2,
              top:"-16rem",
              opacity:1,
              ease: "power1.in"
            }, "<")
            .to(typeRef.current, { duration: 1, opacity: 1, translateX: 0, ease:Back.easeInOut.config(1.7) },"<" )
            .to(("#aboutList li"), { duration: 1, opacity: 1, translateX: 0, stagger:0.5 }, "<")
    return {tl4}
  }
  const [tl2Global,setTl2Global] = useState(null);
  return (
    <AnimationContext.Provider value={{
      getScreenCategory, screenCategory, setScreenCategory,
      translateYValues, bgGifTopValues, tl2Global, setTl2Global, bgGifY, typeWriting, onChangeEnterAnimation, onPageEnterAnimation,

    }}>
      {children}
    </AnimationContext.Provider>
  )
}

export default AnimationProvider