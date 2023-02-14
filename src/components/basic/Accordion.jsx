import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Accordion = ({accordionData,styles}) => {
  const {title,content} = accordionData  
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`accordion ${styles.width}`}>
      <div className={`${styles.border} p-2`}>
        <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <button
            className={`${styles.titletext}`}
            >
            {title}
            </button>
            {styles.show ? (<AiOutlinePlus className={`${styles.text}`}/>):``}
            
        </div>
        {isOpen && <div className={`${styles.text} py-4`}>{content}</div>} 
      </div>
    </div>
  );
};

export default Accordion;
