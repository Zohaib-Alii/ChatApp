import React from "react";

const Search = () => {
  // var Arr = [1, 7, 2, 8, 3, 4, 5, 0, 9];
  var Arr = [11, 4, 33, 7, 3, 8, 6, 1, 0];
  const sortingg = () => {
    for (let i = 1; i < Arr.length; i++) {
      debugger;
      for (let j = 0; j < i; j++) {
        debugger;
        if (Arr[i] < Arr[j]) {
          debugger;
          var x = Arr[i];
          Arr[i] = Arr[j];
          Arr[j] = x;
        }
      }
    }

    console.log(Arr);
  };
  const minNumr = () => {
    let leastNo = Arr[0];
    for (let i = 0; i < Arr.length; i++) {
      if (leastNo > Arr[i]) {
        leastNo = Arr[i];
      }

      console.log(leastNo, "temp");
    }
  };
  const printThisPage = () => {
    window.print();
  };
  return (
    <div>
      {" "}
      <div className="search">
        <button onClick={sortingg}> perform</button>
        <button onClick={minNumr}>Least No print</button>
        <button onClick={printThisPage}>prrrint this page </button>
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
