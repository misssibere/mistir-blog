import React, { useContext, useEffect, useState } from 'react'
import  './Header.css'
import { UserContext } from '../../Services/UserContext';

const Header = () => {
  const {userInfo, setUserInfo } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:4444/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
      //  setUsername(userInfo.username)
        setUserInfo(userInfo);
      });
    });
  }, []);

  // log ou handler 
const logout= async()=> {
   await fetch("http://localhost:4444/logout", {
     credentials: "include",
     method: "POST",
   });
   setUserInfo(null);
 }
 const username=userInfo?.username;
  return (
    <>
      <header className="header">
        <a href="/">Mistir Blog </a>
        <nav className="navBar">
          {username && (
            <ul className="navBar-lists">
              <li>
                <a href="/addblog"> add blog</a>
              </li>
              <li>
                <a onClick={logout}>log out</a>
              </li>
            </ul>
          )}
          {!username && (
            <ul className="navBar-lists">
              <li>
                <a href="/login"> log in</a>
              </li>
              <li>
                <a href="/signup">sign up</a>
              </li>
            </ul>
          )}
        </nav>
      </header>
    </>
  );
}

export default Header