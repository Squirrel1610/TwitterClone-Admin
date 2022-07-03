import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { SidebarAdmin } from "../../Styles/StylePages/Admin/SidebarAdmin";
import {
  MdLineStyle,
  MdPermIdentity,
  MdStorefront,
  IoMdAnalytics,
  MdCategory,
  AiOutlineLogout,
  MdCreate,
  FaRetweet,
  FaReply,
  BsFilePost,
  HiUserGroup,
  BiMessageRoundedDots,
} from "../../Imports/Icons";
import { LogoutInitiate } from "../../redux/Action/ActionAdmin";
import { useDispatch } from "react-redux";
const SidebarAdmins = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const dispatch = useDispatch();
  const location = useLocation();
  const handleLogout = () => {
    dispatch(LogoutInitiate());
  };
  useEffect(() => {
    if (location.pathname === "/admin") {
      setActiveTab("Home");
    } else if (location.pathname === "/profileAdmin") {
      setActiveTab("Profile");
    } else if (location.pathname === "/users") {
      setActiveTab("Users");
    } else if (location.pathname === "/products") {
      setActiveTab("Products");
    } else if (location.pathname === "/newproduct") {
      setActiveTab("Create");
    } else if (location.pathname === "/reply") {
      setActiveTab("Category");
    } else if (location.pathname === "/accountAdmin") {
      setActiveTab("AccountAdmin");
    } else if (location.pathname === "/payment") {
      setActiveTab("Payment");
    } else if (location.pathname === "/bill") {
      setActiveTab("Bill");
    } else if (location.pathname === "/rating") {
      setActiveTab("Rating");
    } else if (location.pathname === "/infoapp") {
      setActiveTab("Info");
    } else if (location.pathname === "/billdetail") {
      setActiveTab("billdetail");
    } else if (location.pathname === "/voucher") {
      setActiveTab("voucher");
    }
  }, [location]);
  return (
    <>
      <SidebarAdmin>
        <div className="sidebar">
          <div className="sidebarWrapper">
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Dashboard</h3>
              <ul className="sidebarList">
                <Link to="/admin" className="link">
                  <li
                    className={` sidebarListItem  ${
                      activeTab === "Home" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("Home")}
                  >
                    <MdLineStyle className="sidebarIcon" />
                    Home
                  </li>
                </Link>
              </ul>
            </div>
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Infomation</h3>
              <ul className="sidebarList">
                <Link to="/profileAdmin" className="link">
                  <li
                    className={` sidebarListItem  ${
                      activeTab === "Profile" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("Profile")}
                  >
                    <i className="far fa-user-circle sidebarIcon"></i>
                    Profile
                  </li>
                </Link>
                <Link to="/users" className="link">
                  <li
                    className={` sidebarListItem  ${
                      activeTab === "Users" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("Users")}
                  >
                    <MdPermIdentity className="sidebarIcon" />
                    Users
                  </li>
                </Link>
                <Link to="/tweet" className="link">
                  <li
                    className={` sidebarListItem  ${
                      activeTab === "Products" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("Products")}
                  >
                    <BsFilePost className="sidebarIcon" />
                    Tweets
                  </li>
                </Link>
                <Link to="/reply" className="link">
                  <li
                    className={` sidebarListItem  ${
                      activeTab === "Category" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("Category")}
                  >
                    <FaReply className="sidebarIcon" />
                    Replies
                  </li>
                </Link>
                <Link to="/newproduct" className="link">
                  <li
                    className={` sidebarListItem  ${
                      activeTab === "Create" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("Create")}
                  >
                    <FaRetweet className="sidebarIcon" />
                    Retweet
                  </li>
                </Link>
              </ul>
            </div>
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Chats && Messages</h3>
              <ul className="sidebarList">
                <Link to="/billdetail" className="link">
                  <li
                    className={` sidebarListItem  ${
                      activeTab === "billdetail" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("billdetail")}
                  >
                    <HiUserGroup className="sidebarIcon" />
                    Chats
                  </li>
                </Link>
                <Link to="/payment" className="link">
                  <li
                    className={` sidebarListItem  ${
                      activeTab === "Payment" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("Payment")}
                  >
                    <BiMessageRoundedDots className="sidebarIcon" />
                    Messages
                  </li>
                </Link>
              </ul>
            </div>
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Another</h3>
              <ul className="sidebarList">
                <li className="sidebarListItem" onClick={handleLogout}>
                  <AiOutlineLogout className="sidebarIcon" />
                  Log out
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SidebarAdmin>
    </>
  );
};

export default SidebarAdmins;
