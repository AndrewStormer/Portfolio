import Header from './components/Header'
import Project from './components/Project'

import Home from './pages/Home'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route
          exact
          path='/'
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          exact
          path='/project/:name'
          element={
            <>
              <Project />
            </>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
