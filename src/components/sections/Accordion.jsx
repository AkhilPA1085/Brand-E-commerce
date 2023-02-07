import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Accordion = ({accordionData}) => {
  const {title,content} = accordionData  
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="accordion w-full sm:w-1/2">
      <div className="p-2">
        <div className="flex items-center justify-between cursor-pointer border-b-2" onClick={() => setIsOpen(!isOpen)}>
            <button
            className="bg-white font-medium py-2 uppercase tracking-wide text-[#9B9B9B]"
            >
            {title}
            </button>
            <AiOutlinePlus className="text-[#9B9B9B]"/>
        </div>
        {isOpen && <div className="text-[#9B9B9B] py-4">{content}</div>}
      </div>
    </div>
  );
};

export default Accordion;
