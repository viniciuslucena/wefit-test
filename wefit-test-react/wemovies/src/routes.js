import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { Carrinho } from './pages/Carrinho'
import { CompraRealizada } from './pages/CompraRealizada'

export default function RoutesList() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/compra-realizada" element={<CompraRealizada />} />
      </Routes>
    </Router>
  )
}
