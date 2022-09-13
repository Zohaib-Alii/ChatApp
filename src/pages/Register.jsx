import React from "react";
import Add from "../img/addAvatar.png";
const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="displayName" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} id="file" type="file" />
          <label htmlFor="file">
            <img src={Add} alt="alternate" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>You do have an account ? Login</p>
      </div>
    </div>
  );
};

export default Register;
