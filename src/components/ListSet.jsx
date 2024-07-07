import PropTypes from 'prop-types';

ListSet.propTypes = {
    LaptopMockup: PropTypes.string,
}
function ListSet({LaptopMockup}) {
  return (
    <div className="h-[350vh] transparent w-full relative z-50 overflow-hidden flex items-end justify-around max-[700px]:flex-col pt-12" id="aboutChefCharm">

      <div id="mockupParent1" className="laptopMockup relative h-full">
        <div id="mockup1" className='laptopMockup h-[550px] max-[1024px]:h-[450px] opacity-0 -translate-x-full'>
          <img src={LaptopMockup} alt="Chef Charm" className="w-full z-20 object-center relative" />
        </div>
      </div>

      <div className='w-full min-[700px]:w-2/3 max-w-[540px] flex flex-col justify-around items-center h-[80%]'>
        <div style={{ padding:"1rem", position:"relative",height:"50%"}} className=' flex flex-col justify-center'>
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

        <div style={{ padding:"1rem", position:"relative",height:"50%"}} className='flex flex-col justify-center' id="list2">
          <div className=' relative min-w-[450px] max-[1024px]:min-w-[350px] max-[700px]:top-0 '>

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
  )
}

export default ListSet