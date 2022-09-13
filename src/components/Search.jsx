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
          <img alt="" />
          <div className="userChatInfo">
            <span>userr</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
