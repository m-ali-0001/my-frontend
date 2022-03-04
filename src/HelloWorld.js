import React from 'react';
import axios from "axios";

const HelloWorld = () => {
  
  const fetchData = () => {
    return axios.get("http://localhost:8800/")
       .then((response) => console.log(response.data));
    }

  // function sayHello() {
  //   alert('Hello, World!');
  // }
  
  return (
    <button onClick={fetchData}>Send GET Request to backend API!</button>
  );
};

export default HelloWorld;  