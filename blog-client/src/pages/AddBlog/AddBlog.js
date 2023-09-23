import React, { useState } from 'react';
import   './AddBlog.css';
import "react-quill/dist/quill.snow.css";
import { Navigate } from 'react-router-dom';
import Editor from '../../components/Editor';

const AddBlog = () => {
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");
    const [files, setFiles] = useState("");
    const [redirect, setRedirect] = useState(false);

    
    const handleNewAddBlogPost=async(e)=> {
        const data = new FormData();
        data.set("title", title);
        data.set("summary", summary);
        data.set("content", content);
        data.set("file", files[0]);
       e.preventDefault();
    //    console.log(files)
    const response = await fetch('http://localhost:4444/addBlogPost', {
      method: 'POST',
      body: data,
      credentials: 'include',
    });
// console.log(await response.json())
    if (response.ok) {
      setRedirect(true);
    }
    }
    const handleTitle=(e)=> {
        setTitle(e.target.value);
    }
    const handleSummary=(e)=> {
        setSummary(e.target.value);
    }
    const handleFile=(e)=> {
        setFiles(e.target.files);
    }
    if (redirect) {
      return <Navigate to={"/"} />;
    }
  return (
    <>
      <section className="login-form-section">
        <h1>Add blog</h1>
        <form className="login-form" onSubmit={handleNewAddBlogPost}>
          <input
            type="title"
            name="title"
            placeholder="title"
            value={title}
            onChange={handleTitle}
          />
          <input
            type="summary"
            name="summary"
            placeholder="summary"
            value={summary}
            onChange={handleSummary}
          />
          <input type="file" onChange={handleFile} />
          <Editor onChange={setContent} value={content} />
          <button className="mt-3">Post Blog</button>
        </form>
      </section>
    </>
  );
}

export default AddBlog