import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Post.css';

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedContent, setEditedContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/posts/${id}`);
        setPost(response.data);
        setEditedTitle(response.data.title);
        setEditedContent(response.data.content);
      } catch (error) {
        console.error('There was an error fetching the post!', error);
      }
    };

    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/posts/${id}`);
      navigate('/'); // Redirect to home after deletion
    } catch (error) {
      console.error('There was an error deleting the post!', error);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:5000/posts/${id}`, {
        title: editedTitle,
        content: editedContent,
      });
      setPost({ ...post, title: editedTitle, content: editedContent });
      setIsEditing(false);
    } catch (error) {
      console.error('There was an error updating the post!', error);
    }
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <button onClick={handleSave} className="save-button">
            Save
          </button>
          <button onClick={() => setIsEditing(false)} className="cancel-button">
            Cancel
          </button>
        </>
      ) : (
        <>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <button onClick={handleEdit} className="edit-button">
            Edit Post
          </button>
          <button onClick={handleDelete} className="delete-button">
            Delete Post
          </button>
        </>
      )}
    </div>
  );
};

export default Post;
