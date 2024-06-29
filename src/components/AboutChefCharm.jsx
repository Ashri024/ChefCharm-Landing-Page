import  { useCallback, useEffect, useRef} from "react";
import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import PropTypes from "prop-types";
import Typewriter from "typewriter-effect/dist/core"; // Ensure you are importing the correct module
import LaptopMockup from "../assets/Laptop.png";

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);

AboutChefCharm.propTypes = {
  introTl: PropTypes.object
};

function AboutChefCharm({ introTl }) {
  const typeRef = useRef(null);
  const typeRef2 = useRef(null);
  const para1 = useRef(null);
  const para2 = useRef(null);
  const para3 = useRef(null);
  const para4 = useRef(null);
  const para5 = useRef(null);

  function startTypewriter(ref, text) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (ref.current) {
          // Clear existing text
          gsap.to(ref.current, { opacity: 1, duration: 0.5, translateX: "0%",})
          // Initialize Typewriter
          const whatIs = new Typewriter(ref.current, {
            loop: false,
            delay: 40
          });
  
          // Use Typewriter to type the string
          whatIs.typeString(text)
            .callFunction(() => {
              whatIs.stop();
              const cursorElement = ref.current.querySelector('.Typewriter__cursor');
              if (cursorElement) {
                cursorElement.style.display = 'none';
              }
              resolve(); // Resolve the promise here
            })
            .start();
        } else {
          reject(new Error("typeRef.current is not available")); // Reject the promise if typeRef.current is not available
        }
      }, 2000); // 2000 milliseconds delay
    });
  }
  const addAnimationPara = useCallback((ref) => {
    gsap.to(ref.current, {
      opacity: 1,
      duration: 0.5,
      translateX: "0%",
      ease: "power1.out",
    });
  }, []);
  const descArr = useCallback(() => ([
    "It is an innovative recipe web application designed to elevate your cooking experience.",
    "It offers a seamless and interactive way to discover, create, and manage recipes, leveraging advanced technologies.",
    "It uses AI to bring culinary inspiration to your fingertips."
  ]), []); 

  const descArr2 = useCallback(() => ([
    "Whether you're a professional chef or an enthusiastic home cook, ChefCharm offers a comprehensive suite of features to streamline your recipe discovery, creation, and organization.",
    "Let's delve into the key features that make ChefCharm a must-have tool for every cooking enthusiast."]), []);
  function subParaWriter(text, ref) {
      return new Promise((resolve) => {
          const whatIs = new Typewriter(ref.current, {
            loop: false,
            delay: 10
          });
    
          // Use Typewriter to type the string
          whatIs.typeString(`<span class="aboutLi">${text}</span>`)
            .callFunction(() => {
              whatIs.stop();
              const cursorElement = ref.current.querySelector('.Typewriter__cursor');
              if (cursorElement) {
                cursorElement.style.display = 'none';
              }
              resolve(); // Resolve the promise here
            })
            .start();
      });
    }
        
// Inside your component
const startParaTypewriter = useCallback(async (mode="first") => {
  await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 5 seconds before starting

  if(mode==="first"){
  gsap.to("#aboutList", {
    opacity: 1,
    duration: 0.5,
    translateX: "0%",
    ease: "power1.out",
  });
  let arr = descArr();
  if (arr.length > 0) {
    addAnimationPara(para1);
    await subParaWriter(arr[0], para1); // Wait for the first paragraph to complete
    if (arr.length > 1) {
      addAnimationPara(para2);
      await subParaWriter(arr[1], para2); // Wait for the second paragraph to complete
      if (arr.length > 2) {
        addAnimationPara(para3);
        await subParaWriter(arr[2], para3); // Wait for the third paragraph to complete
      }
    }
  }}else{
    gsap.to("#aboutList2", {
      opacity: 1,
      duration: 0.5,
      translateX: "0%",
      ease: "power1.out",
    });
    let arr = descArr2();
    if (arr.length > 0) {
      addAnimationPara(para4);
      await subParaWriter(arr[0], para4); // Wait for the first paragraph to complete
      if (arr.length > 1) {
        addAnimationPara(para5);
        await subParaWriter(arr[1], para5); // Wait for the second paragraph to complete
      }
    }
  }
}, [descArr, addAnimationPara, descArr2]); // Add any other dependencies here
function resetParaStates(mode="first") {
  return new Promise((resolve, reject) => {
    const headRef = mode==="first"?typeRef.current:typeRef2.current;
    const para1Ref = mode==="first"?para1.current:para4.current;
    const para2Ref = mode==="first"?para2.current:para5.current;
    const para3Ref = mode==="first"?para3.current:true;
    const arr = mode==="first"?[para1Ref,para2Ref,para3Ref]:[para1Ref,para2Ref];
    if (headRef && para1Ref && para2Ref && para3Ref) {
      // Create a new GSAP timeline
const tl = gsap.timeline();

gsap.killTweensOf([headRef, ...arr])
tl.to(headRef, {
  duration: 0.5,
  opacity: 0,
  translateX: "100%",
  ease: "power1.out",
  onComplete: function() {
    this.innerHTML = ''; // Clear innerHTML after animation completes
  }})
tl.to(arr, {
  opacity: 0, // Target opacity
  duration: 0.5,
  translateX: "100%", // Duration of each animation
  stagger: {
    each: 0.2, // Time between the start of each animation
    onComplete: function() {
      this.targets().forEach(target => {
        target.innerHTML = ''; // Clear innerHTML after animation completes
      });
    }
  },
  ease: "power1.out", // Easing function
});

// Add animation for laptopMockup after the staggered animations
if(mode === "first"){
tl.to("#laptopMockup", {
  duration: 0.5,
  opacity: 0,
  ease: "back.inOut(1.7)",
  translateX: "-100%",
  onComplete: resolve, // Resolve the promise after the animation completes
});
}else{
  tl.call(resolve)
}
    } else {
      reject(new Error("One or more elements do not exist."));
    }
  });
}
  useEffect(()=>{
    ScrollTrigger.create({
      trigger: "#aboutChefCharm",
      start: "top 80%",
      end: "bottom bottom",
      // markers: true,
      toggleActions: "restart pause reverse pause",
      onEnter: async() => {
        console.log("entering the scroll area... scrolling to the aboutchefcharm");
        await resetParaStates("first")
          gsap.to(window, {
            scrollTo: { y: "#aboutChefCharm", offsetY: 0 },
            duration: 1,
          });
      },
      onLeaveBack:async()=>{
        console.log("leaving");
        await resetParaStates("first")
        gsap.to(window, {
          scrollTo: { y: "#chefCharmIntro", offsetY: 0 },
          duration: 1,
        });
      }
    });
   
  },[]);

  useEffect(() => {
    
    
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#aboutChefCharm",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
        onEnter:async() => {
          if (introTl && introTl.reverse) {
            await introTl.reverse();
            console.log("reversing");
            document.querySelector('html').style.overflowY = 'auto';
          }
        },
        onLeaveBack: async() => {
          if (introTl && introTl.play) {
            await resetParaStates()
            introTl.play();
          }
        }
      }
    });

    function bgGifY() {
      if (window.matchMedia("(min-width: 1400px)").matches) {
        return "70%";
      } else if (window.matchMedia("(min-width: 1280px)").matches) {
        return "40%";
      }
      return "10%";
    }

    tl.to(".bgGradientEllipse", {
      duration: 4,
      rotate: 180,
      ease: "linear",
      translateX: "40%",
      translateY: "-20%"
    }, "<")
      .to("#bgGifLottie", {
        duration: 4,
        ease: "linear",
        top:"55vh",
        rotate: 90,
        translateX: "-37%",
        translateY: bgGifY()
      }, "<")
      .to("#bgGif",{
        duration: 2,
        top:"-2rem",
        opacity:1,
        ease: "power1.in"
      }, "<")
      

    gsap.to("#laptopMockup", {
      duration: 2,
      opacity: 1,
      ease: "back.inOut(1.7)",
      translateX: "0%",
      delay: 1,
      scrollTrigger: {
        trigger: "#aboutChefCharm",
         toggleActions: "restart pause restart none"
      }
    });
 



ScrollTrigger.create({
  trigger: "#aboutChefCharm",
  start: "top bottom",
  end: "bottom bottom",
  markers: true,
 toggleActions: "restart pause resume reverse",
  onEnter: async() => {
     // 2000 milliseconds delay
    console.log("entering aboutchefcharm");
    await startTypewriter(typeRef,"<span id='whatIs'>What actually is<br><span>ChefCharm</span> ?</span>")
    startParaTypewriter()
  },
  
});
  }, [introTl, startParaTypewriter]);

  useEffect(()=>{
    ScrollTrigger.create({
      trigger: "#aboutPart2",
      start: "top 80%",
      end: "bottom bottom",
      // markers: true,
      toggleActions: "restart pause reverse pause",
      onEnter: async() => {
        gsap.to(window, {
          scrollTo: { y: "#aboutPart2", offsetY: 0 },
          duration: 1,
        });
      },
      onLeaveBack:()=>{
        gsap.to(window, {
          scrollTo: { y: "#aboutChefCharm", offsetY: 0 },
          duration: 1,
        });
      }
    })
    ScrollTrigger.create({
      trigger: "#aboutPart2",
      start: "top 80%",
      end: "bottom bottom",
      // markers: true,
      toggleActions: "restart pause reverse pause",
      onEnter: async() => {
        console.log("entering");
        
        const tl = gsap.timeline();
          tl.to(typeRef.current, { opacity: 0, duration: 0.5, translateX: "-100%",})
          .to(typeRef2.current, { opacity: 1, duration: 0.5, translateX: "0%"})
          .to("#aboutList", { opacity: 0, duration: 0.5, translateX: "-100%",})
          .to("#aboutList2", { opacity: 1, duration: 0.5, translateX: "0%",})
          .call(async() => {
            await startTypewriter(typeRef2,"<span id='whatIs'>What actually are its<br><span>Features</span> ?</span>")
            startParaTypewriter("second")
            await resetParaStates("first")
      })},

      onLeaveBack:()=>{
        console.log("leaving");
        const tl = gsap.timeline();
          tl.to(typeRef2.current, { opacity: 0, duration: 0.5, translateX: "100%",})
          .to(typeRef.current, { opacity: 1, duration: 0.5, translateX: "0%",})
          .to("#aboutList2", { opacity: 0, duration: 0.5, translateX: "100%",})
          .to("#aboutList", { opacity: 1, duration: 0.5, translateX: "0%",}).call(async()=>{
            startParaTypewriter("first")
           await resetParaStates("second")
          })
      }
    })

  },[startParaTypewriter])
  return (
    <div className="h-screen transparent w-full relative z-50" id="aboutChefCharm">
    <div className="h-screen transparent w-full fixed z-50 overflow-hidden flex items-center justify-around top-0 left-0" >
      <div id="laptopMockup" style={{ width: "42rem", translate: "-100% 0",opacity:0 }} className="relative -left-2">
        <img src={LaptopMockup} alt="Chef Charm" className="w-full z-20 h-full object-cover object-center relative" />
      </div>
      <div style={{ height: "90%", paddingTop: "7rem",width:"540px",position:"relative" }}>
        <div ref={typeRef} className="opacity-0 translate-x-full absolute top-32 left-0" id="typewriter"/>
        <div ref={typeRef2} className="opacity-0 translate-x-full absolute top-32 left-0" id="typewriter2"/>
        <ul id="aboutList" className="absolute bottom-40 opacity-0 translate-x-full">
          <li ref={para1} className="opacity-0 translate-x-full"></li>
          <li ref={para2} className="opacity-0 translate-x-full"></li>
          <li ref={para3} className="opacity-0 translate-x-full"></li>
        </ul>
        <ul id="aboutList2" className="absolute bottom-40 opacity-0 translate-x-full">
          <li ref={para4} className="opacity-0 translate-x-full"></li>
          <li ref={para5} className="opacity-0 translate-x-full"></li>
        </ul>
      </div>
      
    </div>
    </div>
  );
}

export default AboutChefCharm;
