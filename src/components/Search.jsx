import React from "react";

const Search = () => {
  return (
    <div>
      {" "}
      <div className="search">
        <div className="searchForm">
          <input
            type="text"
            placeholder="Find a user"
            // onKeyDown={handleKey}
            // onChange={(e) => setUsername(e.target.value)}
            // value={username}
          />
        </div>
        <div className="userChat">
          <img
            src="https://images.pexels.com/photos/11293719/pexels-photo-11293719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="chat img"
          />
          <div className="userChatInfo">
            <span>user</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
