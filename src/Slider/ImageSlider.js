import React, { useState,useEffect} from "react";
import "./Slider.css";

function ImageSlider({ slide }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  console.log(slide[currentIndex].image);

  const currentSlide = slide[currentIndex];
  const { name, title, quote } = currentSlide;

  const imgUrl = slide[currentIndex].image;

  useEffect(() => {
    let slider = setInterval(() => {
      goToNext();
    }, 5000);

    return () => {
      clearInterval(slider);
    };
  }, [currentIndex]);

  const goToPrev = () => {
    const firstSlide = currentIndex === 0;
    const newIndex = firstSlide ? slide.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const lastSlide = currentIndex === slide.length - 1;
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideindex) => {
    setCurrentIndex(slideindex);
  };
 
  return (
    <>
      <div>
        <h3 style={{ color: "#000" }}>Image Slider</h3>
      </div>
      <div className="sliderStyle">
        {/* <div className='slide'> */}
        <div className="leftArrow" onClick={goToPrev}>
          ❰
        </div>
        <div className="rightArrow" onClick={goToNext}>
          ❱
        </div>
        <img className="image" src={imgUrl} alt={`slide ${currentIndex}`} />
        {/* <h3 className='content'>{name}</h3>
        <h4 className='content1'>{title}</h4>
        <p className='content2'>{quote}</p> */}
        </div>
        <div className="dot-container">
          {slide.map((slideimage, slideindex) => {
            return (
              <div
                className={`dot ${currentIndex === slideindex ? "active" : ""}`}
                key={slideindex}
                onClick={() => goToSlide(slideindex)}
              >
                ●
              </div>
            );
          })}
        </div>
      {/* </div> */}
    </>
  );
}

export default ImageSlider;
