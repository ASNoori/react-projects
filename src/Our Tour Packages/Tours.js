import React from "react";
import Tour from "./Tour";
import './tours.css';

function Tours({ tours,removeTour }) {
  return (
    <section>
      <div className="tours-container">
        <h2 className="text-align">Our Tours</h2>
      </div>
      <div className="tour-grid">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
}

export default Tours;
