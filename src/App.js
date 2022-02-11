import logo from './logo.svg';
import './App.css';
import './css/myCSS.css';
import NavBar from './myComponents/NavBar';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SearchPost from './myComponents/SearchPost';
import Posts from './myComponents/Posts';
import Footer from './myComponents/Footer';
import CheckCollections from './myComponents/CheckCollections';
import HeaderForFilter from './myComponents/HeaderForFilter';
import About from './myComponents/About';
import ContactUs from './myComponents/ContactUs';

function App() {
  let tempItems = ["Apple", "Banana", "Cat", "Dog", "Elephant", "Fish", "Aeroplane"];
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <SearchPost />
                <Posts />
              </>)
          }}>
          </Route>
          <Route exact path="/ByCompanyName" render={() => {
            return (
              <>
                <HeaderForFilter name="by Company Name" />
                <CheckCollections items={tempItems} />
              </>)
          }}>
          </Route>
          <Route exact path="/ByAreaOfWork" render={() => {
            return (
              <>
                <HeaderForFilter name="by Area of Work" />
                <CheckCollections items={tempItems} />
              </>)
          }}></Route>
          <Route exact path="/ByJobType" render={() => {
            return (
              <>
                <HeaderForFilter name="by Job Type" />
                <CheckCollections items={tempItems} />
              </>)
          }}></Route>
          <Route exact path="/About" render={() => {
            return (
              <>
                <About />
              </>)
          }}></Route>
          <Route exact path="/ContactUs" render={() => {
            return (
              <>
                <ContactUs />
              </>)
          }}></Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
