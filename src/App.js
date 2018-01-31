import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import Layout from '../src/containers/Layout/Layout';

class App extends Component {
  render() {
    return (      
        <div className="container">
          <Layout />
        </div>      
    );
  }
}

export default App;
