import React from 'react'
import home from './home.png';
import settings from './settings.png';
import Notification from './Notification.png';
import propic from './propic.png';
import './Navbar.css';
// import { a, useNavigate } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      {/* Navbar */}


      <nav className="navbar bg-light shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand  ms-4" to="/">  <img src="https://deepthought.education/assets/images/logo/logo.svg" alt="logo" width="180" height="30" className="d-inline-block align-text-top  logodt" /></a>

          <form className="d-flex me-md-7  pe-4" role="search">
            <a className="nav-link  p-2 text-dark fs-7  " href="/posts"><img src={home}></img></a>
            <a className="nav-link  p-2 text-dark fs-7 " href="#"><img src={settings}></img></a>
            <a className="nav-link  p-2 text-dark fs-7 " href="#"><img src={Notification}></img></a>


            <div className="dropdown">
              <a className="btn " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                <img className="pro-pic" src={propic}></img>
              </a>

              <ul className="dropdown-menu" style={{ fontSize: "x-small" }}>
                <li>
                  <a className="dropdown-item" to="/Profile">My Profile</a>
                </li>
                <li><a className="dropdown-item" href="#" >Logout</a></li>

              </ul>
            </div>



          </form>
        </div>
      </nav>















      {/* 



    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <a className="navbar-brand  ms-4" to="/">  <img src= "https://deepthought.education/assets/images/logo/logo.svg"   alt="logo" width="180" height="30" className="d-inline-block align-text-top  logodt"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <form className="d-flex me-md-7  pe-4" role="search">
        <a className="nav-link house  p-2 text-dark fs-7  " href="/posts"><i className="fa-solid fa-house"></i></a>
        <a className="nav-link ht p-2 text-dark fs-7 " href="#"><i className="fa-regular fa-heart"></i></a>
         <a className="nav-link  p-2 text-dark fs-7 " href="#"><i className="fa-regular fa-heart"></i></a>
          

          <div className="dropdown">
         <a className="btn " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">

              <img className="navbar-profile-pic pro-pic" alt="profile pic" src="https://images.unsplash.com/photo-1675329363211-9bbf30434b13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"></img>
            </a>

              <ul className="dropdown-menu" style={{ fontSize: "x-small" }}>
                <li>
                  <a className="dropdown-item" to="/Profile">My Profile</a>
                </li>
                <li><a className="dropdown-item" href="#" >Logout</a></li>

              </ul> 
          </div>



        </form>
      </ul>
      
    </div>
  </div>
</nav>

 */}














    </div>
  )
}

export default Navbar;