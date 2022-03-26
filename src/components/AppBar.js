import React, { useState } from "react";
import "./AppBar.css";
import "./SliderThree.css";
import "../css/style.css";
import "../css/custom.css";
import "../css/animate.css";
import "../css/magnific-popup.css";
import { FiMenu, FiSearch } from "react-icons/fi";
import { RiCloseCircleLine } from "react-icons/ri";
import { AiOutlineSetting } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
const AppBar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [mobileinput, setMobileinput] = useState(false);
  const [AppbarChange, setAppbarChange] = useState(false)

  const showSidebar = () => setSidebar(!sidebar);
  const showInput = () => setMobileinput(!mobileinput);
  
  const changeNavbar = () => {
    if (window.scrollY >= 80){
      setAppbarChange (true);
      document.getElementById("logoApp").style.width = "150px";
      document.getElementById("gotoTop").style.display = "block";
    }
    else{
      setAppbarChange(false)
      document.getElementById("logoApp").style.width = "250px";
    }
  }
  window.addEventListener('scroll', changeNavbar)
  return (
    <div>
      <div className={AppbarChange ? 'appbar shaodw' : 'appbar'}>
        <div className="appbar-container">
          <div className="appbar-logo">
            <img width={250} id="logoApp" className='logo' src="/logo-mastery.png" alt="logo" />
          </div>
          <div className="searchbar">
            <button className="button-search">
              <FiSearch size={18} />
            </button>
            <input
              placeholder="What do you want to learn?"
              className="inputbar"
              type="text"
            />
          </div>
          <div className="searchbar-secondary">
            <button
              onClick={showInput}
              className="button-search button-search-secondary "
            >
              <FiSearch size={18} />
            </button>
          </div>
          <div className="appbar-toggle">
            <button onClick={showSidebar} className="hamburger">
              <FiMenu className="menu-icon" size={24} />
            </button>
          </div>

            <div className={sidebar ? "side-panel-open" : "side-panel"} id="side-panel">
            
              <div class="side-panel-wrap">
              <div id="side-panel-trigger-close" class="side-panel-trigger">
                <a href="#" onClick={showSidebar}>
                  <i class="icon-line-cross"></i>
                </a>
              </div>
                <div class="user-profile-wrap">
                  <img src="images/user.jpg" class="user-image" />
                  <div class="user-name">Kenny Recardo</div>
                </div>
                <nav class="nav-tree">
                  <ul  onClick={showSidebar}>
                    <li>
                      <a href="#">Dashboard</a>
                    </li>
                    <li>
                      <a href="#">Coach</a>
                    </li>
                    <li>
                      <a href="#">Assignments</a>
                    </li>
                    <li class="active">
                      <a href="#">Coaching Program</a>
                    </li>
                    <li>
                      <a href="#">Rewards</a>
                    </li>
                    <li>
                      <a href="#">Accounts & Billings</a>
                    </li>
                  </ul>
                </nav>
                <div class="sidebar-bottom-actions">
                  <a href="#" class="left-icon">
                    <i class="icon-line-cog"></i> Settings
                  </a>
                  <a href="#" class="right-icon sign-out">
                    Sign Out <i class="icon-line-outbox"></i>
                  </a>
                </div>
              </div>
            </div>
        </div>

        <input
          placeholder="What do you want to learn?"
          className={
            mobileinput
              ? "inputbar-mobile inputbar-mobile-active"
              : "inputbar-mobile"
          }
          type="text"
        />
      </div>
      <div className="line-container">
        <div className="line"></div>
      </div>
    </div>
  );
};

export default AppBar;
