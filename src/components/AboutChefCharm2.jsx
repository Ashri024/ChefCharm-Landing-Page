import gsap from 'gsap'
import {  useEffect, useRef,useContext } from 'react';
import { AnimationContext } from '../contexts';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LaptopMockup from "../assets/Laptop.png";
import { Back } from 'gsap/all';
import Typewriter from 'typewriter-effect/dist/core';

gsap.registerPlugin(ScrollTrigger);
function bgGifY() {
  if (window.matchMedia("(min-width: 1400px)").matches) {
    return "70%";
  } else if (window.matchMedia("(min-width: 1280px)").matches) {
    return "40%";
  }
  return "10%";
}
function typeWriting(text,typeRef,typewriter){
  if(!typewriter) return;
  typewriter.callFunction(()=>{
                // typewriter.stop()
                const cursorElement = typeRef.current.querySelector('.Typewriter__cursor');
                  if (cursorElement) {
                    cursorElement.style.display = 'inline-block';
                  }
              }).deleteAll()
                .typeString(text)
                .callFunction(()=>{
                  // typewriter.stop()
                  const cursorElement = typeRef.current.querySelector('.Typewriter__cursor');
                    if (cursorElement) {
                      cursorElement.style.display = 'none';
                    }
                })
                .start();
  }
function onPageEnterAnimation(typeRef){
  let tl4= gsap.timeline()
  let typewriter= new Typewriter(typeRef.current, {
    loop: false,
    delay:40 
  });
          tl4.to('.bgGradientEllipse', { duration: 2, rotate: 180, ease: "power4.inOut", translateX: "40%",translateY: "-20%" })
          .to("#bgGifLottie", { duration: 2, rotate:90,top:"55vh",translateX:"-37%",translateY: bgGifY() },"<")
          .to("#bgGif",{
            duration: 2,
            top:"-2rem",
            opacity:1,
            ease: "power1.in"
          }, "<")
          .call(async()=> {
              console.log('called')
              typeWriting("<span id='whatIs'>What actually is<br><span>ChefCharm</span> ?</span>",typeRef,typewriter)
          })
              
              

  return {tl4,typewriter}
}

function AboutChefCharm2() {
  const {screenCategory,translateYValues,tl2Global} = useContext(AnimationContext);
  const typeRef = useRef(null);
  const para1 = useRef(null);
  const para2 = useRef(null);
  const para3 = useRef(null);

  useEffect(() => {
    let tl4="";
    let typewriter="";
    if(!tl2Global) return;
    const tl3 = gsap.timeline({
      defaults: { ease: "power4.inOut" },
    })
      tl3.to("#laptopMockup", { duration: 2, opacity: 1, translateX: 0, ease:Back.easeInOut.config(1.7) },"<")
      .to(typeRef.current, { duration: 1, opacity: 1, translateX: 0, ease:Back.easeInOut.config(1.7) },"<")
      
     gsap.to('.bgGradientEllipse', { duration: 2, rotate: 90, ease: "power4.inOut", translateY: translateYValues[screenCategory] })
     ScrollTrigger.create({
       animation: tl3,
       id: "aboutChefCharm",
       trigger: "#aboutChefCharm",
       start: "top 90%",
       end: "bottom bottom",
      //  markers: true,
       scrub: 1,
       toggleActions: "play pause resume restart",
       // pin: true,
       onEnter: async() => {
         console.log('onEnter aboutChefCharm')
         gsap.to(window, { duration: 1, scrollTo: "#aboutChefCharm" })
         tl2Global.timeScale(2).reverse('end')
         let obj= onPageEnterAnimation(typeRef)
          tl4=obj.tl4
          console.log("obj",obj);
          typewriter=obj.typewriter
         tl3.pause()
       },
       onLeaveBack: async() => {
         console.log('onLeaveBack aboutChefCharm')
         tl3.timeScale(2).reverse()
         tl4.timeScale(2).reverse().eventCallback('onReverseComplete',()=>{
          console.log('onReverseComplete')
          // typewriter.deleteAll()
         })
         tl2Global.play()
       },
       onEnterBack: async() => {
        tl3.pause()
       }
     });

     ScrollTrigger.create({
      id: "aboutChefCharm2",
       trigger: "#aboutChefCharm2",
       start: "top 90%",
       end: "bottom bottom",
       markers: true,
       scrub: 1,
       toggleActions: "play pause resume restart",

       onEnter:()=> typeWriting("<span id='whatIs'>What actually are its<br><span>Features</span> ?</span>",typeRef,typewriter),
       onLeaveBack:()=> typeWriting("<span id='whatIs'>What actually is<br><span>ChefCharm</span> ?</span>",typeRef,typewriter)
     })
  },[screenCategory, tl2Global, translateYValues])

  return (
    <div className="h-screen opacity-100 transparent w-full relative z-50" id="aboutChefCharm">
      <div className="h-screen transparent w-full fixed z-50 overflow-hidden flex items-center justify-around top-0 left-0" >
      <div id="laptopMockup" style={{ width: "42rem", translate: "-100% 0",opacity:0 }} className="relative -left-2">
        <img src={LaptopMockup} alt="Chef Charm" className="w-full z-20 h-full object-cover object-center relative" />
      </div>
      <div style={{ height: "90%", paddingTop: "7rem",width:"540px",position:"relative" }}>
        <div ref={typeRef} className="opacity-0 translate-x-full absolute top-32 left-0" id="typewriter"/>
        <ul id="aboutList" className="absolute bottom-40 opacity-0 translate-x-full">
          <li ref={para1} className="opacity-0 translate-x-full"></li>
          <li ref={para2} className="opacity-0 translate-x-full"></li>
          <li ref={para3} className="opacity-0 translate-x-full"></li>
        </ul>
      </div>
      
    </div>
    </div>
  )
}

export default AboutChefCharm2