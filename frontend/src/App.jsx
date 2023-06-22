import { Routes, Route } from "react-router-dom"

import LandingPage from "./pages/LandingPage"
import AboutPage from "./pages/AboutPage"
import SearchCommunityPage from "./pages/SearchCommunityPage"
import Live0 from "./pages/LiveAudioPage0"
import Live1 from "./pages/LiveAudioPage1"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/search-community" Component={SearchCommunityPage} />
        <Route path="/live-audio-0" Component={Live0} />
        <Route path="/live-audio-1" Component={Live1} />
      </Routes>
    </>
  )
}

export default App
