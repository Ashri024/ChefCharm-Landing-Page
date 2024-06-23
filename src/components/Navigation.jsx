import { GiHamburgerMenu } from "react-icons/gi";

function Navigation() {
  return (
    <div className=" w-full py-4 bg-transparent flex justify-end items-center px-4 fixed top-0 z-20 gap-4">
      {/* <div className="flex gap-4"> */}
            <ul className="flex gap-10 text-lg">
            <li className="headingUnderline">Home</li>
            <li className="headingUnderline">About</li>
            <li className="headingUnderline">Features</li>
            <li className="headingUnderline">Tech</li>
            </ul>
            <button className="primaryBtn text-base font-semibold">Get Started</button>
            <button className="lg:hidden">
              <GiHamburgerMenu />
            </button>
            {/* </div> */}
    </div>
  )
}

export default Navigation