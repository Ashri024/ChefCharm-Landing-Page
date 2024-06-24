import { useEffect, useState } from 'react'
import EllipseSvg from '../assets/EllipseSvg.svg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Ellipse() {
    // Initialize mq state with the current matchMedia result
    gsap.registerPlugin(ScrollTrigger)
    const [mq1280, setMq1280] = useState(window.matchMedia("(max-width: 1280px)").matches);
    const [mq1024, setMq1024] = useState(window.matchMedia("(max-width: 1024px)").matches);
    const [mq700, setMq700] = useState(window.matchMedia("(max-width: 700px)").matches);
    const [mq500, setMq500] = useState(window.matchMedia("(max-width: 500px)").matches);
    useEffect(() => {
      // Handler to update state on screen width change
      const handleResize = () => {
        setMq1280(window.matchMedia("(max-width: 1280px)").matches);
        setMq1024(window.matchMedia("(max-width: 1024px)").matches);
        setMq700(window.matchMedia("(max-width: 700px)").matches);
        setMq500(window.matchMedia("(max-width: 500px)").matches);
      };
  
      // Add event listener for screen resize
      window.addEventListener('resize', handleResize);
  
      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    useEffect(() => {
      // Use mq state in your GSAP animation
      const getTranslateYValue = () => {
        if (mq500) return "-20%";
        if (mq700) return "-40%";
        if (mq1024) return "-45%";
        if (mq1280) return "-55%";
        return "-63%";
      };
      
      gsap.to('.bgGradientEllipse', { duration: 2, rotate: 90, ease: "power4.inOut", translateY: getTranslateYValue(), scrollTrigger:{
        trigger: '#ellipseParent',
        end: 'bottom top',
        scrub: 1,
        markers: true
      
      }});
    }, [mq1024, mq1280, mq500, mq700]); // Re-run this effect when mq state changes
  
  return (
    <div className="h-screen z-10 overflow-hidden absolute top-0 left-0 right-0 bottom-0 max-h-[740px] max-w-[1600px] mx-auto " id="ellipseParent">
    {/* <div className="h-screen z-10 overflow-hidden absolute top-0 left-0 right-0 bottom-0 max-h-[740px] max-w-[1600px] mx-auto max-[700px]:max-h-[650px]"> */}
      <div className={`bgGradientEllipse rounded-full overflow-hidden`}>
        <img src={EllipseSvg} alt="Ellipse" className='absolute top-0 left-0 w-full h-full object-cover object-center ellipseSvg'/>
      </div>
    </div>
  )
}

export default Ellipse