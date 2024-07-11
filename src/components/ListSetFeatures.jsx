import gsap, { ScrollTrigger } from 'gsap/all';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

ListSetFeatures.propTypes = {
    LaptopMockup: PropTypes.string,
    mockupParentId: PropTypes.string,
    mockupId: PropTypes.string,
    headingId: PropTypes.string,
    listId: PropTypes.string,
    liId: PropTypes.string,
    heading: PropTypes.string,
    listArray: PropTypes.array,
    featureId: PropTypes.string,
    isTech: PropTypes.bool,
}

function ListSetFeatures({LaptopMockup,mockupParentId,mockupId,headingId,listId,heading,listArray,featureId,isTech=false}) {
  useEffect(()=>{
    console.log("ListSetFeatures")
    let tlTemp = gsap.timeline({defaults: { ease: "power4.out" }});
    tlTemp
        .to(`#${mockupId}`, {
          duration: 0.5,
          opacity: 1,
          translateX: 0,
        })
        .to(`#${headingId}`, { duration: 0.5, opacity: 1, translateX: 0 })
        .to(`#${listId} li`, { duration: 0.5, opacity: 1, translateX: 0, stagger: 0.1 })
    ScrollTrigger.create({
      trigger: `#${mockupParentId}`,
      start: "top 90%",
      end: "bottom bottom",
      id: mockupParentId,
      toggleActions: "restart none none reverse",
      // markers: true,
      animation: tlTemp,
    })
  },[headingId, listId, mockupId, mockupParentId])
    
  return (
    <div className={`h-[200vh] ${isTech?"max-[768px]:h-[780px]":"max-[768px]:h-[768px]"} transparent w-full relative z-50 overflow-hidden flex items-center justify-around max-[768px]:flex-col  featuresList p-4 pt-12`} id={featureId}>
    <div className=' absolute opacity-20 top-0 left-0 w-full h-full'></div>
      <div id={mockupParentId} className="laptopMockup relative h-[60%] max-[768px]:h-auto flex items-center justify-center">
        <div id={mockupId} className='laptopMockup h-[550px] max-[1024px]:h-[450px] featureMockups opacity-0 min-[769px]:-translate-x-full'>
          <img src={LaptopMockup} alt="Chef Charm" className="w-full z-20 object-center relative" />
        </div>
      </div>

      <div className='w-full min-[769px]:w-2/3 max-w-[540px] flex flex-col justify-around items-center h-[60%]'>
        <div style={{ padding:"1rem", position:"relative",height:"50%"}} className=' flex flex-col justify-center'>
          <div className='relative min-w-[465px] max-[1024px]:min-w-[310px] max-[768px]:top-0'>

            <div className="relative whatIs min-[769px]:translate-x-1/2 opacity-0 featureHeading" id={headingId}>
              {heading}
            </div>
          </div>
          <div className='relative mt-2 min-[769px]:mt-4'>
            <ul id={listId} className="relative max-w-[90%] featuresAboutList max-[768px]:max-w-full">
             {isTech? 
                listArray.map((listItem,index) => {
                  return (
                     <li key={index} className='mb-4 min-[769px]:translate-x-1/2 opacity-0'><strong>{listItem.title}:</strong> {listItem.text}</li>
                  )
                })
             :
                listArray.map((listItem,index) => {
                  return (
                     <li key={index} className='mb-4 min-[769px]:translate-x-1/2 opacity-0'>{listItem}</li>
                  )
                })
             }
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default ListSetFeatures