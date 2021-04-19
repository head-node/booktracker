import React, { useState } from "react";

import Search from "./components/search";
import "./App.css";
import Result from "./components/result";
import Filter from "./components/filter";
const App = () => {
  const [initialData, setInitialData] = useState([]);
  const [view, setView] = useState(true);
  const [flag, setFlag] = useState(true);
  const [title, setTitle] = useState("java"); 
  const [author,setAuthor] = useState("") ;
  const [category,setCategory] = useState("") ;
  const handleData = () => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${title}&key=AIzaSyDiwnhgZp1PCOa0IOKlRFw6Kvflpc7RWeg&maxResults=10`
    )
      .then((response) => response.json())
      .then((result) => setInitialData(result.items))
      .catch((error) => console.log("error", error));
  };

  React.useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${title}&key=AIzaSyDiwnhgZp1PCOa0IOKlRFw6Kvflpc7RWeg&maxResults=10`
    )
      .then((response) => response.json())
      .then((result) => setInitialData(result.items))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div id="main-div" className={flag ? "light" : "dark"}>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={() => {
            setFlag(!flag);
          }}
        >
          {flag ? "DarkMode" : "LightMode"}
        </button>
        <button
          onClick={() => {
            setView(!view);
          }}
        >
          {view ? "List" : "Grid"}
        </button>
      </div>

      <Search title={title} setTitle={setTitle} handleData={handleData} />
      <Filter title={title} author={author} setAuthor={setAuthor} category={category} setCategory={setCategory} />
      <Result data={initialData} view={view} category={category} author={author} />
    </div>
  );
};

export default App;
