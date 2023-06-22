import { Routes, Route } from "react-router-dom"

import LandingPage from "./pages/LandingPage"
import AboutPage from "./pages/AboutPage"
import SearchCommunityPage from "./pages/SearchCommunityPage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/search-community" Component={SearchCommunityPage} />
      </Routes>
    </>
  )
}

export default App
