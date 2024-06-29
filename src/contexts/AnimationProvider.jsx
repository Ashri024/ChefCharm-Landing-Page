import { useState,useEffect } from "react";
import AnimationContext from "./AnimationContext";
import PropTypes from 'prop-types';

AnimationProvider.propTypes = {
    children: PropTypes.node,
}

function AnimationProvider({children}) {
  const translateYValues = {
    mq500: "-20%",
    mq700: "-40%",
    mq1024: "-45%",
    mq1280: "-55%",
    default: "-63%",
  };
  const bgGifTopValues={
    default:"40vh",
    mq1280:"50vh",
    mq1024:"55vh",
    mq700:"55vh",
    mq500:"75vh"
  }
  const getScreenCategory = () => {
    if (window.matchMedia("(max-width: 500px)").matches) return 'mq500';
    if (window.matchMedia("(max-width: 700px)").matches) return 'mq700';
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

  const [tl2Global,setTl2Global] = useState(null);
  return (
    <AnimationContext.Provider value={{
      getScreenCategory, screenCategory, setScreenCategory,
      translateYValues, bgGifTopValues, tl2Global, setTl2Global
    }}>
      {children}
    </AnimationContext.Provider>
  )
}

export default AnimationProvider