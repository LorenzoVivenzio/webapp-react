
import './App.css'
import Home from './pages/Home'
import Movies from './pages/Movies'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from './layout/defaultLayout'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element = {<DefaultLayout/>}>
      <Route path='/' element = {<Home/>}/>
      <Route path='/movies' element = {<Movies/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
