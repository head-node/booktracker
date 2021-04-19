import React from "react";
import "../filter/filter.css"
const Filter = ({title,setAuthor,setCategory}) => {
  return (
    <div className="filter-div">
      <input placeholder="title" value={title}/>
      <input placeholder="author" onChange={(e)=>{
           setAuthor(e.target.value)
      }}/>
      <input placeholder="category" onChange={(e)=>{
           setCategory(e.target.value)
      }}/>
    </div>
  );
};

export default Filter;
