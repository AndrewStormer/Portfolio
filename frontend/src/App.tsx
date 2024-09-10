import Header from './components/Header'
import Project from './components/Project'
import Projects from './pages/Projects'
import Home from './pages/Home'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route
          path='/'
          element={
            <>
              <Home />
            </>
          }
        />
        {/* <Route
          path='/project/:name'
          element={
            <>
              <Project />
            </>
          }
        /> */}
         <Route
          path='/projects'
          element={
            <>
              <Projects />
            </>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
