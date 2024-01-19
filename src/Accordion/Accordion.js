import React,{useState} from 'react'
import data from './data'
import AccordionView from './AccordionView'

function Accordion() {
    const [faq]=useState(data);
   
  return (
<div style={{height:'100%'}}>
    <AccordionView faq={faq}/>
    </div>
  )
}

export default Accordion