import React,{useState} from 'react'
import ImageSlider from './ImageSlider'
import data from './data'
import './Slider.css'

function Slider() {
    const [slides,setSlides] = useState(data);
    console.log(slides);
  return (
    <div className='containerStyle'>
        <ImageSlider slide={slides}/>
    </div>
  )
}

export default Slider