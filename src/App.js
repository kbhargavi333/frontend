// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './nav/Home'
import Navigation from './nav/Navigation'
import Contact from './nav/Contact'
import About from './nav/About'
import './App.css'
import './index.css'
import Signin from './nav/Signin'
import Signup from './nav/Signup'
import NotFound from './nav/NotFound'
import Products from './nav/Products'
export default class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/*" element={<NotFound/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/products" element={<Products/>}/>



      </Routes>
      </BrowserRouter> 
      </div>
    )
  }
}
