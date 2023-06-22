import { Routes, Route } from "react-router-dom"

import LandingPage from "./pages/LandingPage"
import Login from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import ForgotPass from "./pages/ForgotPassPage"

import SearchCommunityPage from "./pages/SearchCommunityPage"
import DiscussionPage from "./pages/CommunityDiscussionForumPage"
import DescPage from "./pages/CommunityDescPage"
import MemberPage from "./pages/CommunityMemberPage"
import ModeratorPage from "./pages/CommunityModPage"
import Live0 from "./pages/LiveAudioPage0"
import Live1 from "./pages/LiveAudioPage1"

import AboutProfile from "./pages/CommunityAboutProfilePage"
import CommunityProfile from "./pages/CommunityProfilePage"
import TimelineProfile from "./pages/CommunityTimelineProfilePage"
import NotFoundPage from "./pages/NotFoundPage"
import CommunityEventPage from "./pages/CommunityEventPage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={RegisterPage} />
        <Route path="/forgot-password" Component={ForgotPass} />

        <Route path="/search-community" Component={SearchCommunityPage} />
        <Route path="/discussion-page" Component={DiscussionPage} />
        <Route path="/description-page" Component={DescPage} />
        <Route path="/member-page" Component={MemberPage} />
        <Route path="/moderator-page" Component={ModeratorPage} />
        <Route path="/event-page" Component={CommunityEventPage} />
        <Route path="/live-audio" Component={Live0} />
        <Route path="/live-audio/gabung" Component={Live1} />

        <Route path="/about-profile" Component={AboutProfile} />
        <Route path="/community-profile" Component={CommunityProfile} />
        <Route path="/timeline-profile" Component={TimelineProfile} />

        <Route path="*" Component={NotFoundPage} />
      </Routes>
    </>
  )
}

export default App
