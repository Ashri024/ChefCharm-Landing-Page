import { GiHamburgerMenu } from "react-icons/gi";
import PropTypes from 'prop-types'

Navigation.propTypes = {
  setIsSidePanelOpen: PropTypes.func
}
function Navigation({setIsSidePanelOpen}) {
  
  return (
    <div className=" w-full py-4 bg-transparent flex justify-between lg:justify-end items-center px-4 fixed top-0 z-[1000] gap-8">
      {/* <div className="flex gap-4"> */}
            <ul className="gap-10 text-lg hidden lg:flex ">
            <li className="headingUnderline"><a href="#introChefCharm" className="">Home</a></li>
            <li className="headingUnderline"><a href="#aboutChefCharm" className="">About</a></li>
            <li className="headingUnderline"><a href="#featuresPart1" className="">Features</a></li>
            <li className="headingUnderline"><a href="#" className="">Tech</a></li>
            </ul>
            <button className="lg:hidden" onClick={()=>setIsSidePanelOpen(true)}>
              <GiHamburgerMenu style={{
                color: 'white',
                fontSize: '1.6rem'
              }} />
            </button>
            <button className="primaryBtn text-base font-semibold">Get Started</button>
            {/* </div> */}
    </div>
  )
}

export default Navigation