
import React, { Component }  from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import Log from "./components/Modal/LoginModal/LoginModal";

import list from "./components/Header/List/List";
//import FAQ from "./components/pages/faq/faq.js";
import './index.scss';
import {Registration} from '../dev/components/pages/Registration/Registration'


ReactDOM.render(
  <Registration/>

, document.getElementById("root"));







import Main from './components/pages/main/main' //++

import Rules from './components/Rules/Rules'//++
import Top from './components/Top/Top' //++
import Priz from './components/Priz/Priz' //++
import Random from './components/Random/Random' //++
import Winners from './components/Winners/Winners' //++



import Grid from '@material-ui/core/Grid';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

//   const counter = document.getElementById('counter')
//   const add = document.getElementById('add')
//   const sub = document.getElementById('sub')
//   const async = document.getElementById('async')

// let state = 0;

// function rootReducer(state, action){
//   switch (action.type){
//     case INCREMENT:
//       state.counter++
//       break;
//     case DECREMENT:
//       state.counter--
//       break;
//     }
//   return state
// }

// const store = createStore(rootReducer, 
//   {
//     counter: 0
//   })

// store.subscribe(()=>{
//   const state = store.getState();
//   counter.textContent = state.counter
// });


// store.dispatch({type: 'INIT'});

// add.addEventListener('click', ()=>{
//   store.dispatch(increment())
// });

// sub.addEventListener('click', ()=>{
//   store.dispatch(decrement())

// });

// async.addEventListener('click', ()=>{
//   setTimeout(() => {

//   }, 1000);

// })

// //types
//   const INCREMENT = 'INCREMENT';
//   const DECREMENT = 'DECREMENT';


// //actions
//   function increment(){
//     return {
//       type:INCREMENT
//     }
//   }
//   function decrement(){
//     return {
//       type:DECREMENT
//     }
//   }