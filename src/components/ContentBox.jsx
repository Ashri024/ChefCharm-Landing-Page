import { MdDoubleArrow } from "react-icons/md";
function ContentBox() {
  return (
    <div id="contextBox" className="lg:w-96 w-80 z-40 h-auto min-h-5 border-solid border-2 border-white fixed bottom-4 max-[700px]:hidden lg:bottom-10 left-4 lg:left-8 p-4 rounded-lg backdrop-blur -translate-x-full opacity-0">
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50 -z-10"/>
      <h3 className="text-center text-black font-bold text-lg mb-2 ">Contents</h3>
      <div className="text-sm text-black font-semibold contentUl">
        <a className="flex gap-2 items-center py-1 text-lg cursor-pointer" href="#introChefCharm"><MdDoubleArrow className="contentIcons"/>
        <span>Welcome screen</span></a>

        <a href="#whatAbout" className="flex gap-2 items-center py-1 text-lg cursor-pointer"><MdDoubleArrow className="contentIcons"/>
        <span>What Actually is ChefCharm?</span></a>

        <a href="#mockupParent3" className="flex gap-2 items-center py-1 text-lg cursor-pointer"><MdDoubleArrow className="contentIcons"/>
        <span>What are its features?</span></a>

        <a href="#mockupParent8" className="flex gap-2 items-center py-1 text-lg cursor-pointer"><MdDoubleArrow className="contentIcons"/>
        <span>What tech stack has been used?</span> </a>

        <a href="#finalPage" className="flex gap-2 items-center py-1 text-lg cursor-pointer"><MdDoubleArrow className="contentIcons"/>
        <span>Contact Me</span></a>

      </div>
    </div>
  )
}

export default ContentBox