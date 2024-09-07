import React from 'react';
import './About.css'; 

const blogPosts = [
  {
    title: "Zen Habits",
    excerpt: "Written by Leo Babauta, this blog focuses on simplicity, mindfulness, and personal development",
    link: "https://zenhabits.net/"
  },
  {
    title: "The Minimalists",
    excerpt: "Joshua Fields Millburn & Ryan Nicodemus share their journey of living a meaningful life with less. ",
    link: "https://www.theminimalists.com/"
  },
  {
    title: "Developing Your Own Success",
    excerpt: "Covers topics related to personal development and success strategies.",
    link: "https://www.keepinspiring.me/50-must-read-personal-development-bloggers-thatll-change-your-life/"
  }
];

const About = () => (
  <div className="main" id="about">
    <div className="main__container">
      <div className="main__img--container">
        <div className="main__img--card"><i className="fas fa-layer-group"></i></div>
      </div>
      <div className="main__content">
        <h1>Uncover Your World, One Story at a Time?</h1>
        <h3>Capturing Moments, Creating Memories</h3>
       
      </div>
    </div>
    
    <div className="blog-section">
      <h2>Inspiration Blogs</h2>
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-post">
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <a href={post.link} className="read-more">Read More</a>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default About;
