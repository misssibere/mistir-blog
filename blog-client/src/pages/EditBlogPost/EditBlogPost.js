import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Editor from "../../components/Editor";


const EditBlogPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4444/getDetailBlogPost/" + id).then((response) => {
      response.json().then((postInfo) => {
        setTitle(postInfo.title);
        setContent(postInfo.content);
        setSummary(postInfo.summary);    
      });
    });
  }, []);
//   update blogpost function
     const updateBlogPost= async(e)=> {
       e.preventDefault();
       const data = new FormData();
       data.set("title", title);
       data.set("summary", summary);
       data.set("content", content);
       data.set("id", id);
       if (files?.[0]) {
         data.set("file", files?.[0]);
       }
       const response = await fetch("http://localhost:4444/updateBlogPost", {
         method: "PUT",
         body: data,
         credentials: "include",
       });
       console.log(response)
       if (response.ok) {
         setRedirect(true); 
       }
     }

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleSummary = (e) => {
    setSummary(e.target.value);
  };
  // const handleContent=(e)=> {
  //     setContent(e.target.value);
  // }
  const handleFile = (e) => {
    setFiles(e.target.files);
  };
  if (redirect) {
    return <Navigate to={"/getDetailBlogPost/" + id} />;
  }

  return (
    <section className="login-form-section">
      <h1>Update BlogPost</h1>
      <form className="login-form" onSubmit={updateBlogPost}>
        <input
          type="title"
          placeholder={"Title"}
          value={title}
          onChange={handleTitle}
        />
        <input
          type="summary"
          placeholder={"Summary"}
          value={summary}
          onChange={handleSummary}
        />
        <input type="file" onChange={handleFile} />
        <Editor onChange={setContent} value={content} />
        <button className="mt-3">Update BlogPost</button>
      </form>
    </section>
  );
};

export default EditBlogPost;
