import React,{useState} from "react";
import SingleQestion from "./SingleQestion";
import './Accordion.css';

export default function AccordionView({ faq }) {
    const [activeSection, setActiveSection] = useState(null);
  return (
    <div className="accordion-container">
        <h1 className="hcolor">Frequently Asked Questions</h1>
      {faq.map((ques) => {
       return <SingleQestion key={ques.id} {...ques}  activeSection={activeSection}
       setActiveSection={setActiveSection}/>;
      })}
    </div>
  );
}
