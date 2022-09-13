import React from "react";
import Navbar from "../components/Navbar";
import Chat from "./Chat";
import Search from "./Search";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <Chat />
    </div>
  );
};

export default Sidebar;
