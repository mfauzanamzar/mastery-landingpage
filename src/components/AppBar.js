import React, { useState } from "react";
import "./AppBar.css";
import { FiMenu, FiSearch } from "react-icons/fi";
import { RiCloseCircleLine } from "react-icons/ri";
import { AiOutlineSetting } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
const AppBar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div>
      <div className="appbar">
        <img className="logo" src="/logo-mastery.png" alt="logo" />
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
        <button className="hamburger">
          <FiMenu size={24} onClick={showSidebar} />
        </button>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <RiCloseCircleLine size={28} />
            </li>
            <li>
              <div className="profile-menu">
                <img src="/images/profile-comment.png" alt="" />
                <p>Kenny Ricardo</p>
              </div>
            </li>
            <li className="sub-menu">Dashboard</li>
            <li className="sub-menu">Coach</li>
            <li className="sub-menu">Assignments</li>
            <li className="sub-menu">Coaching Program</li>
            <li className="sub-menu">Accounts & Billings</li>

            <li>
              <div className="sidebar-bottom">
                <div className="setting">
                  <AiOutlineSetting size={20}/>
                  <p>Setting</p>
                </div>
                <div className="logout">
                  <p>Sign Out</p>
                  <MdLogout size={20}/>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <div className="line-container">
        <div className="line"></div>
      </div>
    </div>
  );
};

export default AppBar;
