// App.js
import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from './Container'
class App extends React.Component{
  render() {
    return (<React.Fragment>
      <Container />,
      </React.Fragment>)
}
}

export default App;

