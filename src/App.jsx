import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import TokenDetailPage from './pages/TokenDetailPage/TokenDetailPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/token/:tokenId" element={<TokenDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}
