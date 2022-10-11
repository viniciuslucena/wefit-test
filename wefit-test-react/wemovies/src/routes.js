import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { Carrinho } from './pages/Carrinho'

export default function RoutesList() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/carrinho" exact element={<Carrinho />} />
      </Routes>
    </Router>
  )
}
