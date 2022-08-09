/*eslint-disable*/
import React from 'react';
import { HashRouter, Link, Route, Router } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import { Component } from 'react';
import LoginEx from './login';
import { UseState } from 'react';
import axios from 'axios';






function App(props) {

  const[a,seta]=UseState('');
  seta(props.id);
  return(
   <LoginEx></LoginEx>
  );
}

export default App;
