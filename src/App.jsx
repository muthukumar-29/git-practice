import About from './About'
import './App.css'
import Home from './Home'
import Ref from './Ref'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createContext } from 'react'
import Memo from './Memo'
import CustomHook from './customHook'
import SubmitForm from './SubmitForm'

export const loginContext = createContext();

function App() {

  const test = "check login";

  return (
    <>
      <BrowserRouter>
        <loginContext.Provider value={test}>
          <Routes>
            <Route path='/' element={<Home name="Muthukumar" />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/ref' element={<Ref />}></Route>
            <Route path='/memo' element={<Memo />}></Route>
            <Route path='/hook' element={<CustomHook />}></Route>
            <Route path='/forms' element={<SubmitForm />}></Route>
          </Routes>
        </loginContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
