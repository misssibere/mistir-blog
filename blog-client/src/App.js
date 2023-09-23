import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import SharedLayer from "./components/sharedLayer/SharedLayer";
import BlogPage from "./pages/BlogPage";
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";
import { UserContextProvider } from "./Services/UserContext";
import AddBlog from "./pages/AddBlog/AddBlog";
import DetailBlogPost from "./pages/DetailBlogPost/DetailBlogPost";
import EditBlogPost from "./pages/EditBlogPost/EditBlogPost";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<SharedLayer />}>
          <Route index element={<BlogPage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/addblog" element={<AddBlog />} />
          <Route path="/addblog/:id" element={<DetailBlogPost />} />
          <Route path="/edit/:id" element={<EditBlogPost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
