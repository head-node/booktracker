import React, { useState } from "react";
import Card from "../card";
import "./result.css";
const Result = ({ data, view,category,author}) => {
  return (
    <div className={view ? "gridview" : "listview"}>
      {
        // we are not getting undefined error in the initial rendor
        // that is happening before useEffect
        // as our data is empty
        // so data.map wont proceed to its inner function
        data != undefined
          ?  data.map((book) => { 
              return <Card book={book} />;  
            })
          : null
      }
    </div>
  );
};

export default Result;
