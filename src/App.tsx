import './App.css'
import About from './components/about/About'
import Department from './components/department/Department'
import Question from './components/faq/Question'
import Impre from './components/impression/Impre'
import Join from './components/join/Join'
import Nurse from './components/nurse/Nurse'
import Sales from './components/sales/Sales'

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
