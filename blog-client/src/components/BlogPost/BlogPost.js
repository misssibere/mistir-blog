import React from 'react'
// import { formatISO9075 } from "date-fns";
import  './BlogPost.css'
import { Link } from 'react-router-dom';

const BlogPost = ({
  _id,
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
}) => { 
// const createdAtDate = new Date(createdAt);
  console.log(author?.username);

  return (
    <>
      <div className="blog-post-container">
        <div className="blog-post-banner">
          <Link to={`/addblog/${_id}`} >
          <img src={"http://localhost:4444/" + cover} alt="react" />
          </Link>
        </div>
        <div className="blog-post-text">
          <h3>{title}</h3>
          <p>
            React is a declarative, efficient, and flexible JavaScript library
            for building user interfaces or UI components.
            <br /> It lets you compose complex UIs from small and isolated
            pieces of code called “components”.
          </p>
          <p>
            {author?.username}
            <time>{createdAt}</time>
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogPost