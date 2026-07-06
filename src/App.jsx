import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './components/nav'
import Details from './pages/Details'
import Home from './pages/Home'
import './App.css'

function App() {

  return (
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
