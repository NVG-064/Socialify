import { Routes, Route } from "react-router-dom"

import LandingPage from "./pages/LandingPage"
import SearchCommunityNoLoginPage from "./pages/SearchCommunityNoLoginPage"
import SearchEventNoLogin from "./pages/SearchEventNoLoginPage"

import Login from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import ForgotPass from "./pages/ForgotPassPage"

import Homepage from "./pages/Homepage"
import Eksplor from "./pages/Eksplor"
import Notifikasi from "./pages/Notification"

import SearchCommunityPage from "./pages/SearchCommunityPage"
import SearchEvent from "./pages/SearchEventPage"

import DescPage from "./pages/CommunityDescPage"
import DiscussionPage from "./pages/CommunityDiscussionForumPage"
import MemberPage from "./pages/CommunityMemberPage"
import ModeratorPage from "./pages/CommunityModPage"
import CommunityEventPage from "./pages/CommunityEventPage"
import Live0 from "./pages/LiveAudioPage0"
import Live1 from "./pages/LiveAudioPage1"

import AboutProfile from "./pages/CommunityAboutProfilePage"
import CommunityProfile from "./pages/CommunityProfilePage"
import TimelineProfile from "./pages/CommunityTimelineProfilePage"
import NotFoundPage from "./pages/NotFoundPage"

function App() {
  return (
    <>
      <Routes>
        {/* home */}
        <Route path="/" Component={LandingPage} />
        <Route path="/komunitas-nologin" Component={SearchCommunityNoLoginPage} />
        <Route path="/event-nologin" Component={SearchEventNoLogin} />

        {/* Login, Register, Forgot Password */}
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={RegisterPage} />
        <Route path="/forgot-password" Component={ForgotPass} />

        {/* explor */}
        <Route path="/eksplor" Component={Eksplor} />

        {/* Notifikasi */}
        <Route path="/notifikasi" Component={Notifikasi} />

        {/* Home Page After Login */}
        <Route path="/eksplor" Component={Eksplor} />
        <Route path="/homepage" Component={Homepage} />
        <Route path="/notifikasi" Component={Notifikasi} />

        {/* Search */}
        <Route path="/komunitas" Component={SearchCommunityPage} />
        <Route path="/event" Component={SearchEvent} />

        {/* Komunitas */}
        <Route path="/komunitas/description" Component={DescPage} />
        <Route path="/komunitas/discussion" Component={DiscussionPage} />
        <Route path="/komunitas/member" Component={MemberPage} />
        <Route path="/komunitas/moderator" Component={ModeratorPage} />

        {/* Event */}
        <Route path="/komunitas/event" Component={CommunityEventPage} />
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
  );
}

export default App
