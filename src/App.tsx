import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import ListarCategoria from './categorias/listarCategorias/ListarCategorias'
import DeletarCategoria from './categorias/deletarCategorias/DeletarCategorias'
import FormularioCategoria from './categorias/formCategorias/FormCategorias'

function App() {

  return (
    <>

      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListarCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} /> 
            <Route path="/cadastroCategoria" element={<FormularioCategoria/>} />
            <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
          
          </Routes>
        </div>

        <Footer />

      </BrowserRouter>


    </>


  )
}

export default App