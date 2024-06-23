import { useEffect, useState } from 'react'
import EllipseSvg from '../assets/EllipseSvg.svg'
import gsap from 'gsap'

function Ellipse() {
    // Initialize mq state with the current matchMedia result
    const [mq1280, setMq1280] = useState(window.matchMedia("(max-width: 1280px)").matches);
    const [mq1024, setMq1024] = useState(window.matchMedia("(max-width: 1024px)").matches);
    const [mq700, setMq700] = useState(window.matchMedia("(max-width: 700px)").matches);
    useEffect(() => {
      // Handler to update state on screen width change
      const handleResize = () => {
        setMq1280(window.matchMedia("(max-width: 1280px)").matches);
        setMq1024(window.matchMedia("(max-width: 1024px)").matches);
        setMq700(window.matchMedia("(max-width: 700px)").matches);
      };
  
      // Add event listener for screen resize
      window.addEventListener('resize', handleResize);
  
      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    useEffect(() => {
      // Use mq state in your GSAP animation
      if (mq700) {
        gsap.to('.bgGradientEllipse', { duration: 2, rotate: 90, ease: "power4.inOut", translateY: "-40%" });
      } 
      else if (mq1024) {
        gsap.to('.bgGradientEllipse', { duration: 2, rotate: 90, ease: "power4.inOut", translateY: "-45%" });
      } else if(mq1280){
        gsap.to('.bgGradientEllipse', { duration: 2, rotate: 90, ease: "power4.inOut", translateY: "-55%" });
      }
      else {
        gsap.to('.bgGradientEllipse', { duration: 2, rotate: 90, ease: "power4.inOut", translateY: "-63%" });
      }
    }, [mq1024, mq1280, mq700]); // Re-run this effect when mq state changes
  
  return (
    <div className="h-screen z-10 overflow-hidden absolute top-0 left-0 right-0 bottom-0 max-h-[740px] max-w-[1600px] mx-auto max-[700px]:max-h-[540px]">
      <div className={`bgGradientEllipse rounded-full overflow-hidden`}>
        <img src={EllipseSvg} alt="Ellipse" className='absolute top-0 left-0 w-full h-full object-cover object-center ellipseSvg'/>
      </div>
    </div>
  )
}

export default Ellipse