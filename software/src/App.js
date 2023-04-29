import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppRouter from "./config/router";

function App() {
  return (
    <>
    <div className="bg-light">
      <AppRouter />
    </div>
    </>
  );
}

export default App;
