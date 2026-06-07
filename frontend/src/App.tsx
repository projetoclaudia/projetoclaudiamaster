import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import Clientes from './pages/Clientes/Clientes'
import Processos from './pages/Processos/Processos'
import Financeiro from './pages/Financeiro/Financeiro'
import Usuarios from './pages/Usuarios/Usuarios'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/processos" element={<Processos />} />
        <Route path="/financeiro" element={<Financeiro />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
