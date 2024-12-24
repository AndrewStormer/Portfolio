import Project from './components/Project'
import Projects from './pages/Projects'
import Home from './pages/Home'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <div style={{
              backgroundImage: 'repeating-linear-gradient(#201825, #131117)',//`url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              imageRendering: 'crisp-edges'
            }}>
              <Home />
            </div>
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
