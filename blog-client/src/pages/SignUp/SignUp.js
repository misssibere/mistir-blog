import React, { useState } from 'react'
import  './SignUp.css'

const SignUp = () => {
   const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
   const handleForm =async (e) => {
 e.preventDefault();
    const response = await fetch("http://localhost:4444/signup", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      alert("signup successful");
    } else {
      alert("signup failed");
    }
   };
 const handleUserName= (e)=>{
  setUsername(e.target.value);
 }
 const handlePassword= (e)=>{
setPassword(e.target.value);
 }
 

 
  return (
    <>
      <section className="signup-form-section">
        <form  className="signup-form"  onSubmit={handleForm}>
          <input type="text" name="email" placeholder="E-mail" value={username} onChange={handleUserName} />
          <input type="password" name="password" placeholder="password" value={password} onChange={handlePassword} />
          <button>sign up</button>
        </form>
      </section>
    </>
  );
}

export default SignUp