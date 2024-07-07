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
    let tlTemp = gsap.timeline({defaults: { ease: "power4.inOut" }});
    tlTemp
        .to(`#${mockupId}`, {
          duration: 1,
          opacity: 1,
          translateX: 0,
        })
        .to(`#${headingId}`, { duration: 1, opacity: 1, translateX: 0 },"<")
        .to(`#${listId} li`, { duration: 1, opacity: 1, translateX: 0, stagger: 0.2 })
    ScrollTrigger.create({
      trigger: `#${mockupParentId}`,
      start: "top 90%",
      end: "bottom bottom",
      id: mockupParentId,
      toggleActions: "restart none none reverse",
      markers: true,
      animation: tlTemp,
    })
  },[headingId, listId, mockupId, mockupParentId])
    
  return (
    <div className="h-[250vh] transparent w-full relative z-50 overflow-hidden flex items-end justify-around max-[700px]:flex-col pt-12" id={featureId}>
    <div className=' absolute opacity-20 top-0 left-0 w-full h-full'></div>
      <div id={mockupParentId} className="laptopMockup relative h-[60%] flex items-center justify-center">
        <div id={mockupId} className='laptopMockup h-[550px] max-[1024px]:h-[450px] opacity-0 -translate-x-full'>
          <img src={LaptopMockup} alt="Chef Charm" className="w-full z-20 object-center relative" />
        </div>
      </div>

      <div className='w-full min-[700px]:w-2/3 max-w-[540px] flex flex-col justify-around items-center h-[60%]'>
        <div style={{ padding:"1rem", position:"relative",height:"50%"}} className=' flex flex-col justify-center'>
          <div className='relative min-w-[450px] max-[1024px]:min-w-[350px] max-[700px]:top-0'>

            <div className="relative whatIs translate-x-1/2 opacity-0 featureHeading" id={headingId}>
              {heading}
            </div>
          </div>
          <div className='relative mt-2 min-[700px]:mt-4'>
            <ul id={listId} className="relative max-w-[90%] featuresAboutList max-[700px]:max-w-full">
             {isTech? 
                listArray.map((listItem,index) => {
                  return (
                     <li key={index} className='mb-4 translate-x-1/2 opacity-0'><strong>{listItem.title}:</strong> {listItem.text}</li>
                  )
                })
             :
                listArray.map((listItem,index) => {
                  return (
                     <li key={index} className='mb-4 translate-x-1/2 opacity-0'>{listItem}</li>
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