import { GiHamburgerMenu } from "react-icons/gi";
import PropTypes from 'prop-types'

Navigation.propTypes = {
  setIsSidePanelOpen: PropTypes.func
}
function Navigation({setIsSidePanelOpen}) {
  
  return (
    <div className=" w-full py-4 bg-transparent flex justify-between lg:justify-end items-center px-4 fixed top-0 z-20 gap-8">
      {/* <div className="flex gap-4"> */}
            <ul className="gap-10 text-lg hidden lg:flex ">
            <li className="headingUnderline">Home</li>
            <li className="headingUnderline">About</li>
            <li className="headingUnderline">Features</li>
            <li className="headingUnderline">Tech</li>
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