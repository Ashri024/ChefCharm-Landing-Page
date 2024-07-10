import { GiHamburgerMenu } from "react-icons/gi";
import PropTypes from 'prop-types'

Navigation.propTypes = {
  setIsSidePanelOpen: PropTypes.func
}
function navigateInstantly(e) {
  e.preventDefault(); // Prevent default anchor behavior
  const target = e.target.getAttribute('href'); // Get the href attribute of the clicked link
  window.location.hash = target; // Change the hash directly, causing an instant jump to the target
}
function Navigation({setIsSidePanelOpen}) {
  
  return (
    <div className=" w-full py-4 bg-transparent flex justify-between lg:justify-end items-center px-4 fixed top-0 z-[1000] gap-8">
      {/* <div className="flex gap-4"> */}
            <ul className="gap-4 text-lg hidden lg:flex ">
            <li className="headingUnderline"><a href="#introChefCharm" onClick={(e)=>navigateInstantly(e)}>Home</a></li>
            <li className="headingUnderline"><a href="#whatAbout" onClick={(e)=>navigateInstantly(e)}>About</a></li>
            <li className="headingUnderline"><a href="#mockupParent3" onClick={(e)=>navigateInstantly(e)}>Features</a></li>
            <li className="headingUnderline"><a href="#mockupParent8" onClick={(e)=>navigateInstantly(e)}>Tech</a></li>
            </ul>
            <button className="lg:hidden" onClick={()=>setIsSidePanelOpen(true)}>
              <GiHamburgerMenu style={{
                color: 'white',
                fontSize: '1.6rem'
              }} />
            </button>
            <button className="primaryBtn text-base font-semibold disabled:opacity-80 disabled:pointer-events-none" disabled>Coming Soon</button>
            {/* </div> */}
    </div>
  )
}

export default Navigation