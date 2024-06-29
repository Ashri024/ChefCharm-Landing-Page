import { MdDoubleArrow } from "react-icons/md";
function ContentBox() {
  return (
    <div id="contextBox" className="lg:w-96 w-80 z-40 h-auto min-h-5 border-solid border-2 border-white fixed bottom-4 max-[700px]:hidden lg:bottom-10 left-4 lg:left-8 p-4 rounded-lg backdrop-blur -translate-x-full opacity-0">
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50 -z-10"/>
      <h3 className="text-center text-black font-bold text-lg mb-2 ">Contents</h3>
      <ul className="text-sm text-black font-semibold contentUl">
        <li className="flex gap-2 items-center py-1 text-lg cursor-pointer"><MdDoubleArrow className="contentIcons"/>
        <span>Welcome screen</span></li>
        <li className="flex gap-2 items-center py-1 text-lg cursor-pointer"><MdDoubleArrow className="contentIcons"/>
        <span>What is ChefCharm?</span></li>
        <li className="flex gap-2 items-center py-1 text-lg cursor-pointer"><MdDoubleArrow className="contentIcons"/>
        <span>What are its features?</span></li>

        <li className="flex gap-2 items-center py-1 text-lg cursor-pointer"><MdDoubleArrow className="contentIcons"/>
        <span>What tech stack is used in building it?</span> </li>

        <li className="flex gap-2 items-center py-1 text-lg cursor-pointer"><MdDoubleArrow className="contentIcons"/>
        <span>Contact Me</span></li>

      </ul>
    </div>
  )
}

export default ContentBox