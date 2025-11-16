import './App.css'
import { Routes, Route } from "react-router"
import AdminHomePage from './pages/AdminHomePage'
import AdminUpdatePage from './pages/AdminUpdatePage'
import HomePage from './pages/HomePage.jsx'
import InfoPage from './pages/InfoPage'
import AdminCreatePage from './pages/AdminCreatePage.jsx'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<InfoPage />} />
        <Route path="/admin" element={<AdminHomePage />} />
        <Route path="/admin/:id" element={<AdminUpdatePage />} />
        <Route path="admin/create" element={<AdminCreatePage/>}/>
      </Routes>
    </div>
  )
}

export default App
