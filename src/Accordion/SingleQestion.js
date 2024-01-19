import React,{useState} from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import './Accordion.css';
function SingleQestion({title,info, activeSection, setActiveSection }) {
    // const [showInfo,setShowInfo] = useState(false);
    const showInfo = activeSection === title;
  return (
    <article>
        <header className='Question'>
            <h4>{title}</h4>
            <button className='button'
            //  onClick={()=>setShowInfo(!showInfo)}
            onClick={() => setActiveSection(showInfo ? null : title)}
             >
                {showInfo ? < AiOutlineMinus/> : < AiOutlinePlus/> }
            </button>
        </header>
        {showInfo && <p className='align-content'>{info}</p>}
    </article>
  )
}

export default SingleQestion