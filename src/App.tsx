import React from 'react'
import './App.css'
import Nav from './components/nav/Nav'
import Nurse from './components/nurse/Nurse'
import Impre from './components/impression/Impre'
import Department from './components/department/Department'
import Sales from './components/sales/Sales'
import About from './components/about/About'
import Question from './components/faq/Question'
import Join from './components/join/Join'

const App = () => {
  return (
    <div>
    
      <Nurse/>

      <Impre/>
      <Department/>
      <Sales/>
      <About/>
      <Question/>
      <Join/>
    
    </div>
  )
}

export default App
