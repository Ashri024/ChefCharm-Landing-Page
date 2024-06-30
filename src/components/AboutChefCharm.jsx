import gsap from 'gsap'
import {  useEffect, useRef,useContext } from 'react';
import { AnimationContext } from '../contexts';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LaptopMockup from "../assets/Laptop.png";
import { Back } from 'gsap/all';
import Typewriter from 'typewriter-effect/dist/core';

gsap.registerPlugin(ScrollTrigger);
function bgGifY(screenCategory) {
  if(screenCategory === 'mq500') {
    
    let bgGifTop = "60vh";
    let bgGifTopIntro = "40vh";
    return {bgGifTop,bgGifTopIntro}
  }else if(screenCategory === 'mq700') {
    let bgGifTop = "55vh";
    let bgGifTopIntro = "40vh";
    return {bgGifTop,bgGifTopIntro}
  }
  else if(screenCategory === 'mq1024') {
    let bgGifTop = "50vh";
    let bgGifTopIntro = "50vh";
    return {bgGifTop,bgGifTopIntro}
  }
  else if(screenCategory === 'mq1280') {
    let bgGifTop = "40vh";
    let bgGifTopIntro = "60vh";
    return {bgGifTop,bgGifTopIntro}
  }
  else {
    let bgGifTop = "30vh";
    let bgGifTopIntro = "70vh";
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
            top:"-6rem",
            opacity:1,
            ease: "power1.in"
          }, "<")
          .to(typeRef.current, { duration: 1, opacity: 1, translateX: 0, ease:Back.easeInOut.config(1.7) },"<" )
          .to(("#aboutList li"), { duration: 1, opacity: 1, translateX: 0, stagger:0.5 }, "<")
  return {tl4}
}

function AboutChefCharm2() {
  const {screenCategory,translateYValues,tl2Global} = useContext(AnimationContext);
  const typeRef = useRef(null);
  
  useEffect(() => {
    if(!tl2Global) return;
    let typewriter= new Typewriter(typeRef.current, {
      loop: false,
      delay:10
    });
    const tl3 = gsap.timeline({
      defaults: { ease: "power4.inOut" },
    })
    let tl4="";
    let tl5=""
    let tl6=""

      tl3.to("#laptopMockup", { duration: 2, opacity: 1, translateX: 0, ease:Back.easeInOut.config(1.7) },"<")
      
     gsap.to('.bgGradientEllipse', { duration: 2, rotate: 90, ease: "power4.inOut", translateY: translateYValues[screenCategory] })
     ScrollTrigger.create({
       animation: tl3,
       id: "aboutChefCharm",
       trigger: "#aboutChefCharm",
       start: "top 90%",
       end: "bottom bottom",
       scrub: 1,
       toggleActions: "play pause resume restart",
       onEnter: async() => {
        let obj= onPageEnterAnimation(typeRef,screenCategory)
         tl4=obj.tl4
         gsap.to("#aboutList", { duration: 1, opacity: 1, }, "<")
         console.log('onEnter aboutChefCharm')
         await onChangeEnterAnimation("<span id='whatIs'>What actually is <br><span>ChefCharm</span> ?</span>",typewriter,typeRef)
         await tl2Global.timeScale(3).reverse()
         tl3.pause()
       },
       onLeaveBack: async() => {
        console.log('onLeaveBack aboutChefCharm')
        tl3.timeScale(2).reverse()
        typewriter.deleteAll(1);
        console.log("progress tl4: ",tl4.progress())

        gsap.killTweensOf(tl4)
        if(tl6)
          gsap.killTweensOf(tl6)

        let tl4reverse = gsap.timeline()
        tl4reverse.to("#aboutList li", { duration: 1, opacity: 0, translateX: "100%", stagger:0.5 }, "<")
        .to(typeRef.current, { duration: 1, opacity: 0, translateX: "100%", ease:Back.easeInOut.config(1.7) },"<" )
        .to('.bgGradientEllipse', { duration: 2, rotate: 90, ease: "power4.inOut", translateY: translateYValues[screenCategory],translateX:0 }, "<")
        .to("#bgGifLottie", { duration: 2, rotate:0,top:bgGifY(screenCategory).bgGifTop,translateX:0,translateY: 0 },"<")
        .to("#bgGif",{
          duration: 2,
          top:0,
          opacity:0,
          ease: "power1.in",
        }, "<")
        .to("#aboutList", { duration: 1, opacity: 0, }, "<")
        
        tl2Global.play()
      },
       onEnterBack: async() => {
        tl3.pause()
       },
     });

     ScrollTrigger.create({
      id: "aboutChefCharm2",
       trigger: "#aboutChefCharm2",
       start: "top 90%",
       end: "bottom bottom",
       markers: true,
       scrub: 1,
       toggleActions: "play pause resume restart",

       onEnter:async()=> {
        console.log('onEnter aboutChefCharm2')
       await onChangeEnterAnimation("<span id='whatIs'>What actually are its <br><span>Features</span> ?</span>",typewriter,typeRef)
      //  gsap.killTweensOf(tl4)
        tl5= gsap.timeline()
       tl5.to(("#aboutList li"), { duration: 1, opacity: 0, translateX: "-100%", stagger:0.5 }, "<")
       .to(("#aboutList2 li"), { duration: 1, opacity: 1, translateX: 0, stagger:0.5 }, "<")
      },
       onLeaveBack:async()=> {
        console.log('onLeaveBack aboutChefCharm2')
        await onChangeEnterAnimation("<span id='whatIs'>What actually is <br><span>ChefCharm</span> ?</span>",typewriter,typeRef)
        tl6 = gsap.timeline()
        // gsap.killTweensOf(tl5)
        tl6.to(("#aboutList2 li"), { duration: 1, opacity: 0, translateX: "100%", stagger:0.5 }, "<")
        .to(("#aboutList li"), { duration: 1, opacity: 1, translateX: 0, stagger:0.5 }, "<")
       },
       onLeave:()=>{
        console.log('onLeave aboutChefCharm2')
       }
     })
  },[screenCategory, tl2Global, translateYValues])

  return (
    <div className="h-screen opacity-100 transparent w-full relative z-50" id="aboutChefCharm">
      <div className="h-screen transparent w-full fixed z-50 overflow-hidden flex items-center justify-around top-0 left-0 max-[700px]:flex-col pt-12" >
      <div id="laptopMockup" style={{ translate: "-100% 0",opacity:0 }} className="relative left-6 sm:-left-2 h-[550px] max-[1024px]:h-[450px] min-[700px]:-top-12">
        <img id="mockup1" src={LaptopMockup} alt="Chef Charm" className="w-full z-20 h-full object-cover object-center absolute top-0 left-0" />
      </div>
      <div className='w-full min-[700px]:w-2/3 max-w-[540px]' style={{ height: "90%",position:"relative",padding:"1rem"}}>
        <div ref={typeRef} className="opacity-0 translate-x-full relative top-8 left-0 min-w-[450px]max-[700px]:min-w-[350px] max-[700px]:top-0" id="typewriter"/>
        <div className='relative mt-2'>
          <ul id="aboutList" className="absolute top-0 left-0 max-w-[90%] max-[700px]:max-w-full">
            <li className='opacity-0 translate-x-full mb-4'>It is an innovative recipe web application designed to elevate your cooking experience. </li>
            <li className='opacity-0 translate-x-full mb-4'>It offers a seamless and interactive way to discover, create, and manage recipes, leveraging advanced technologies.</li>
            <li className='opacity-0 translate-x-full mb-4'>It uses AI to bring culinary inspiration to your fingertips.</li>
          </ul>
          <ul id="aboutList2" className="absolute top-0 left-0 max-w-[90%] max-[700px]:max-w-full">
            <li className='opacity-0 translate-x-full mb-4'>Whether you&apos;re a professional chef or an enthusiastic home cook, ChefCharm offers a comprehensive suite of features to streamline your recipe discovery, creation, and organization. </li>
            <li className='opacity-0 translate-x-full mb-4'>Let&apos;s delve into the key features that make ChefCharm a must-have tool for every cooking enthusiast</li>
          </ul>
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default AboutChefCharm2