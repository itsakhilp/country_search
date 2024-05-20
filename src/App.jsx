import React from "react";
import Countries from "./components/Countries";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Countries />
    </>
  );
};

export default App;
