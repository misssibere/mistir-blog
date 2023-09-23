import React, { useContext, useState } from "react";
import "./LogIn.css";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../Services/UserContext";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
   const [redirect, setRedirect] = useState(false);
   const { setUserInfo } = useContext(UserContext);
  const handleForm = async (e) => {
    e.preventDefault();
   const response=  await fetch("http://localhost:4444/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
       credentials: "include",
    });
    if (response.ok) {
      // setRedirect(true);
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert("wrong credentials");
    }
  };
  const handleUserName = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
   if (redirect) {
     return <Navigate to={"/"} />;
   }
  return (
    <>
      <section className="login-form-section">
        <h1>Log In</h1>
        <form className="login-form" onSubmit={handleForm}>
          <input
            type="text"
            name="email"
            placeholder="E-mail"
            value={username}
            onChange={handleUserName}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={handlePassword}
          />
          <button>log in</button>
        </form>
      </section>
    </>
  );
};

export default LogIn;
