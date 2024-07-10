import PropTypes from 'prop-types';

ListSet.propTypes = {
    LaptopMockup: PropTypes.string,
}
function ListSet({LaptopMockup}) {
  return (
    <div className="h-[350vh] transparent w-full relative z-50 overflow-hidden flex items-end justify-start gap-0 lg:gap-[2%] xl:gap-[20%] max-[700px]:flex-col pt-12 p-4" id="aboutChefCharm">

      <div id="mockupParent1" className="laptopMockup relative h-full max-[700px]:h-[350px]">
        <div id="mockup1" className='laptopMockup h-[550px] max-[1024px]:h-[450px] max-[700px]:h-[350px] opacity-0 min-[700px]:-translate-x-full'>
          <img src={LaptopMockup} alt="Chef Charm" className="w-full z-20 object-center relative" />
        </div>
      </div>

      <div className='w-full min-[700px]:w-2/3 max-w-[540px] flex flex-col justify-around items-center h-[80%]' id="whatAbout">
        <div style={{ padding:"1rem", position:"relative",height:"50%"}} className=' flex flex-col justify-center'>
          <div className='h-[110px] max-[700px]:h-[65px] relative min-w-[450px] max-[1024px]:min-w-[310px] max-[700px]:top-0'>

            <div className="relative whatIs min-[700px]:translate-x-1/2 opacity-0" id="heading1">
              What Actually is <br/><span>ChefCharm</span> ?
            </div>
          </div>
          <div className='relative mt-2 min-[700px]:mt-4'>
            <ul id="aboutList" className="relative max-w-[90%] featuresAboutList max-[700px]:max-w-full">
              <li className='mb-4 min-[700px]:translate-x-1/2 opacity-0'>It is an innovative recipe web application designed to elevate your cooking experience. </li>
              <li className='mb-4 min-[700px]:translate-x-1/2 opacity-0'>It offers a seamless and interactive way to discover, create, and manage recipes, leveraging advanced technologies.</li>
              <li className='mb-4 min-[700px]:translate-x-1/2 opacity-0'>It uses AI to bring culinary inspiration to your fingertips.</li>
            </ul>
          </div>
        </div>

        <div style={{ padding:"1rem", position:"relative",height:"50%"}} className='flex flex-col justify-center' id="list2">
          <div className=' relative min-w-[465px] max-[1024px]:min-w-[310px] max-[700px]:top-0 '>

            <div className="relative whatIs min-[700px]:translate-x-1/2 opacity-0" id="heading2">
              What Actually are its <br/><span>Features</span> ?
            </div>
          </div>
          <div className='relative mt-2 min-[700px]:mt-4'>
            <ul id="aboutList2" className="relative max-w-[90%] featuresAboutList max-[700px]:max-w-full">
              <li className='mb-4 min-[700px]:translate-x-1/2 opacity-0'>Whether you&apos;re a professional chef or an enthusiastic home cook, ChefCharm offers a comprehensive suite of features to streamline your recipe discovery, creation, and organization. </li>
              <li className='mb-4 min-[700px]:translate-x-1/2 opacity-0'>Let&apos;s delve into the key features that make ChefCharm a must-have tool for every cooking enthusiast</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListSet