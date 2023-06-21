import { Routes, Route } from "react-router-dom"

import LandingPage from "./pages/LandingPage"
import AboutPage from "./pages/AboutPage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/about" Component={AboutPage} />
      </Routes>
    </>
  )
}

export default App
