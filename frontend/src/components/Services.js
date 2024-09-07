import React from 'react';
import './Services.css'; 
const Services = () => (
  <div className="services" id="services">
    <h1>Our Services</h1>
    <div className="services__wrapper">
      <div className="services__card">
        <h2>Popular Hashtags</h2>
        <p>Trending Twitter Hashtags</p>
        <div className="services__btn">
          <button><a href="/popularhashtags">Explore Now</a></button>
        </div>
      </div>
      <div className="services__card">
        <h2>Key Influencers</h2>
        <p>Top Influencer Analysis</p>
        <div className="services__btn">
          <button><a href="/influencer">Explore Now</a></button>
        </div>
      </div>
      <div className="services__card">
        <h2>Emerging Themes</h2>
        <p>Real-time Trends</p>
        <div className="services__btn">
          <button>Explore Now</button>
        </div>
      </div>
      <div className="services__card">
        <h2>Sentiment Analysis</h2>
        <p>Positive Sentiment Trends</p>
        <div className="services__btn">
          <button>Explore Now</button>
        </div>
      </div>
    </div>
  </div>
);

export default Services;
