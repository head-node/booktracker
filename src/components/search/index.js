import React from "react";
import "../search/search.css"
const Search = ({title,setTitle,handleData}) => {
  return (
    <div style={{
        display:"flex",
        justifyContent:"center",
        margin:"5vw"
    }}>
      <input className="search-in" onChange={(e)=>{
       setTitle(e.target.value)
      }}></input>
      <button className="search-btn" onClick={handleData}>Search</button>
    </div>
  );
};

export default Search;
