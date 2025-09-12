import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Head,Card,Card2,Thirdparty} from './Header'
import reactlogo from "./assets/react.svg"   // to import image 


function App() {

  return (
    <>
      <Header/>
      <Card/>
      <Card2/>
      <Thirdparty/>
      <img src={reactlogo} alt=""/> 
      <img src="./src/assets/react.svg" alt=""/>    // using path
    </>
  )
}

export default App




// Here is a concise note on using ./ and ../ paths in React (and JavaScript):

// Note on ./ and ../ Paths in React
// ./ means current folder: Use this to import files from the same directory.

// Example: import Component from './Component'; (imports from the same folder)

// ../ means one folder up: Use this to import files from the parent directory.

// Example: import Util from '../utils/Util'; (goes one folder up, then into utils folder)

// To go up multiple folders, chain ../ segments — one for each level up.

// 2 folders up: ../../file.js

// 3 folders up: ../../../file.js

// Use as many ../ segments as required, but exceeding the root directory leads to errors.

// A "folder" is the same as a "directory" — containers in the file system that hold files or other folders.

// These path notations help organize imports and manage file locations relative to the current file, especially in React projects.
