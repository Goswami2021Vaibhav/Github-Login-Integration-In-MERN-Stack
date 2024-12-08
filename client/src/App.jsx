import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import { Dashboard } from './Dashboard'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App