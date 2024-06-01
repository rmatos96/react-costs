import { Link, Outlet } from 'react-router-dom'
import './App.css'
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {

  return (
    <div>
      <Navbar />
        <Outlet />
      <Footer />
    </div>
  )
}

export default App
