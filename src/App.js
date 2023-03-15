import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Layout from './components/Layout'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
