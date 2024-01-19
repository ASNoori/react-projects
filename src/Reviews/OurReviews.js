import React from 'react'
import Review from './Review'
import './review.css';

function OurReviews() {
  return (
    <main id='main-container'>
        <section className='review-container'>
            <div className='title'>
                <h2>Our Reviews</h2>
                <div className='underline'></div>
            </div>
            <Review/>
        </section>
        </main>
  )
}

export default OurReviews