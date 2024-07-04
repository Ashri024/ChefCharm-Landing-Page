import gsap from 'gsap'
import {  useEffect, useContext, } from 'react';
import { AnimationContext } from '../contexts';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LaptopMockup from "../assets/Laptop.png";
import HomePage from '../assets/HomePageChefCharm.png';
import RecipeMethod from '../assets/MultiMode.png';
import RecipeManage from '../assets/RecipeManage.png';
import listAndMealPlanner from '../assets/listAndMealPlanner.png';
import colotThemes from '../assets/ColorThemes.png';
import teckStack2 from '../assets/techStackFinal.png';
import Ellipse from './Ellipse';
import PropTypes from 'prop-types';

AboutChefCharm2.propTypes = {
  height: PropTypes.string,
}

gsap.registerPlugin(ScrollTrigger);

function AboutChefCharm2({height}) {
  const {screenCategory,translateYValues,tl2Global,onPageEnterAnimation,onChangeEnterAnimation,bgGifY} = useContext(AnimationContext);
  useEffect(() => {
    if(!tl2Global) return;
    ScrollTrigger.create({
      trigger: "#aboutChefCharm",
      start: "top 90%",
      end: "bottom bottom",
      id: "aboutChefCharm",
      onEnter: () => {
        // gsap.set("#mockup1", {
        //   position:"fixed",
        //   top:"4rem",
        //   left:"0",
        // })
      }
    })
    gsap.set(".ellipse2", { translateX:"100%" })

    let tl= gsap.timeline({defaults: { ease: "power4.inOut" }});
        tl.to("#mockup1", {
          duration: 1,
          position:"fixed",
          top:"3rem",
          left:"0",
          translateX:0,
          opacity:1
        })
        .set(".ellipse2", { translateX:"100%" },"<")
        .to('.ellipse2', { duration: 1, rotate: 180, ease: "power4.inOut", translateX: "40%",translateY: "-20%" },"<")
        .to("#heading1", { duration: 1, opacity: 1, translateX: 0 },"<")
        .to("#aboutList li", { duration: 1, opacity: 1, translateX: 0, stagger: 0.2 })
        
    ScrollTrigger.create({
      animation: tl,
      trigger: "#aboutChefCharm",
      start: "top 20%",
      end: "bottom bottom",
      id: "aboutChefCharm",
      toggleActions: "restart none none reverse",
      markers: true,
      onEnter: () => {
      },
      onLeaveBack: () => {  
        // gsap.to("#mockup1", {
        //   duration: 1,
        //   position:"relative",
        //   top:"0",
        //   left:"0",
        //   ease: "power1.inOut",
        // })
      },
      onLeave: () => {
        // Select the parent container and the mockup element
        const parentContainer = document.querySelector('#mockupParent1');
        const mockupElement = document.querySelector('#mockup1');
        const parentRect = parentContainer.getBoundingClientRect();
        const mockupRect = mockupElement.getBoundingClientRect();
        // Calculate the offset of mockup1 from the top of its parent (laptopMockup)
        const offsetTop = mockupRect.top - parentRect.top;
        
        // Use GSAP to animate #mockup1 to the calculated offset position
        // and change its position to absolute
        console.log(`parentContainer.offsetTop: ${parentRect.top}`)
        console.log(`mockupElement.offsetTop: ${mockupRect.top}`)
        console.log(`offsetTop: ${offsetTop}`)

        gsap.set("#mockup1", {
          top: `${offsetTop}px`, // Apply the calculated offset
          position: "absolute",
        });
        
      },
      onEnterBack: () => {
        gsap.set("#mockup1", {
          position:"fixed",
          top:"3rem",
        });
      }
    })

    let tl2 = gsap.timeline({defaults: { ease: "power4.inOut" }});
        tl2.to("#heading2", { duration: 1, opacity: 1, translateX: 0 },"<")
        .to("#aboutList2 li", { duration: 1, opacity: 1, translateX: 0, stagger: 0.2 })
    ScrollTrigger.create({
      trigger: "#list2",
      start: "top 90%",
      end: "bottom bottom",
      id: "list2",
      toggleActions: "restart none none reverse",
      markers: true,
      animation: tl2,
      onEnter: () => {
      }
    })
  },[bgGifY, onChangeEnterAnimation, onPageEnterAnimation, screenCategory, tl2Global, translateYValues])

  return (
    <div className=" opacity-100 transparent w-full relative z-[70]" id="aboutChefCharm" >
      <div className='absolute top-0 left-0 w-full h-full opacity-100 bgGradient'></div>
      <Ellipse height={height} idName={"ellipse2"} />
      <div className="h-[300vh] transparent w-full relative z-50 overflow-hidden flex items-center justify-around max-[700px]:flex-col pt-12" >
      <div id="mockupParent1" className="laptopMockup relative h-full">
        <div id="mockup1" className='laptopMockup h-[550px] max-[1024px]:h-[450px] opacity-0 -translate-x-full'>
          <img src={LaptopMockup} alt="Chef Charm" className="w-full z-20 object-center relative" />
        </div>
       
      </div>

    <div className='w-full min-[700px]:w-2/3 max-w-[540px] flex flex-col justify-around items-center h-full'>
      <div style={{ padding:"1rem", position:"relative",height:"50%"}} className=' flex flex-col items-center justify-center'>
        <div className='h-[110px] relative min-w-[450px] max-[1024px]:min-w-[350px] max-[700px]:top-0'>

          <div className="relative whatIs translate-x-1/2 opacity-0" id="heading1">
            What Actually is <br/><span>ChefCharm</span> ?
          </div>
        </div>
        <div className='relative mt-2 min-[700px]:mt-4'>
          <ul id="aboutList" className="relative max-w-[90%] featuresAboutList max-[700px]:max-w-full">
            <li className='mb-4 translate-x-1/2 opacity-0'>It is an innovative recipe web application designed to elevate your cooking experience. </li>
            <li className='mb-4 translate-x-1/2 opacity-0'>It offers a seamless and interactive way to discover, create, and manage recipes, leveraging advanced technologies.</li>
            <li className='mb-4 translate-x-1/2 opacity-0'>It uses AI to bring culinary inspiration to your fingertips.</li>
          </ul>
        </div>
      </div>

      <div style={{ padding:"1rem", position:"relative",height:"50%"}} className='flex flex-col items-center justify-center' id="list2">
        <div className='h-[110px] relative min-w-[450px] max-[1024px]:min-w-[350px] max-[700px]:top-0 '>

          <div className="relative whatIs translate-x-1/2 opacity-0" id="heading2">
            What Actually are its <br/><span>Features</span> ?
          </div>
        </div>
        <div className='relative mt-2 min-[700px]:mt-4'>
          <ul id="aboutList2" className="relative max-w-[90%] featuresAboutList max-[700px]:max-w-full">
            <li className='mb-4 translate-x-1/2 opacity-0'>It is an innovative recipe web application designed to elevate your cooking experience. </li>
            <li className='mb-4 translate-x-1/2 opacity-0'>It offers a seamless and interactive way to discover, create, and manage recipes, leveraging advanced technologies.</li>
            <li className='mb-4 translate-x-1/2 opacity-0'>It uses AI to bring culinary inspiration to your fingertips.</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default AboutChefCharm2