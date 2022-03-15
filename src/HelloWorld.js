import React from 'react';
import axios from "axios";

const HelloWorld = () => {
  
  const fetchData = () => {
    return axios.get("http://34.123.61.215:30268/users/")
       .then((response) => console.log(response.data)
       );
    }
  return (
    <button onClick={fetchData}>Send GET Request to backend API!</button>
  );
};

export default HelloWorld;