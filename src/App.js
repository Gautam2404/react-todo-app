import React from 'react';
import './App.css';
import Todos from "./components/Todos";

const App = () => {
  return (
    <div className="container-fluid vw-100 vh-100">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Todos />
      </div>
    </div>
  );
};

export default App;
