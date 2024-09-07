import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Your Creative Journey Starts Here</h1>
    </header>
  );
};

const BlogSection = ({ posts }) => {
  return (
    
    <div className="blog-sectiona">
      {posts.length > 0 ? (
        posts.map(post => (
          <div key={post._id} className="post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <Link to={`/post/${post._id}`}>Read More</Link>
          </div>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

const FindOtherBlogs = () => {
  return (
    <div className="find-blogs">
      <Link to="/About">Find Other Blogs</Link>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <p></p>
    </footer>
  );
};

const Home = ({ posts }) => {
  return (
    <>
      <Header />
      <BlogSection posts={posts} />
      <FindOtherBlogs />
      <Footer />
    </>
  );
};

export default Home;
