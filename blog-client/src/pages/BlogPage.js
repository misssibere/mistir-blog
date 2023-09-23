import React, { useEffect, useState } from "react";
import BlogPost from "../components/BlogPost/BlogPost";

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4444/getBlogPost").then((response) => {
      response.json().then((posts) => {
        console.log(posts);
        setBlogPosts(posts);
      });
    });
  }, []);
  return (
    <>
      {blogPosts.length > 0 &&
        blogPosts?.map((BlogpostItem, i) => (
          <BlogPost key={i} {...BlogpostItem} />
        ))}
      {/* <BlogPost />
      <BlogPost />
      <BlogPost />  */}
    </>
  );
};

export default BlogPage;
