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
        {/* home */}
        <Route path="/" Component={LandingPage} />

        {/* Login, Register, Forgot Password */}
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={RegisterPage} />
        <Route path="/forgot-password" Component={ForgotPass} />

        {/* Home Page After Login */}
        {/* Jaya Route */}
        {/* <Route path="" Component={} /> ini bg tinggal di uncomment isi path dan componen sesuai halaman  */}

        {/* Komunitas */}
        <Route path="/komunitas" Component={SearchCommunityPage} />
        <Route path="/komunitas/description" Component={DescPage} />
        <Route path="/komunitas/discussion" Component={DiscussionPage} />
        <Route path="/komunitas/member" Component={MemberPage} />
        <Route path="/komunitas/moderator" Component={ModeratorPage} />
        <Route path="/komunitas/event" Component={CommunityEventPage} />

        {/* Event */}
        <Route path="/event" Component={CommunityEventPage} />
        <Route path="/event/live-audio" Component={Live0} />
        <Route path="/event/live-audio/gabung" Component={Live1} />

        {/* User */}
        <Route path="/user" Component={AboutProfile} />
        <Route path="/user/community-profile" Component={CommunityProfile} />
        <Route path="/user/timeline-profile" Component={TimelineProfile} />
        
        {/* Not Found */}
        <Route path="*" Component={NotFoundPage} />
      </Routes>
    </>
  )
}

export default App
