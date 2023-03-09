import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import "./App.css";
import App from "./App";

const rootTag = document.querySelector("#root");
const root = ReactDOM.createRoot(rootTag);

const Home = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="home-page">
      <App userDetails={users} />
    </div>
  );
};

root.render(<Home />);

export default Home;
