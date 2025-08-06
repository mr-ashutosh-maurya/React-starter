import React from 'react'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import { Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Product from './pages/Product'
import ErrorPage from './pages/ErrorPage'
const App = () => {
  return (
    <>
    <Navbar/>
    <div className='container'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App