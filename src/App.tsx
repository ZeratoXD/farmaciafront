import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>

      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/home" element={<Home />}  />
            {/*<Route path="/cadastroCategoria" element = {<FormularioCategoria/>} />
            * <Route path="/categorias" element={<ListaCategorias/>}  />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />*/ }
          </Routes>
        </div>

        <Footer />

      </BrowserRouter>


    </>


  )
}

export default App