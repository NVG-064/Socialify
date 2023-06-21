import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import ForgotPassword from "./pages/forgot-password";
import Diskusi from "./pages/Komunitas-diskusi";
import Anggota from "./pages/Komunitas-anggota";
import ModeratordanAdmin from "./pages/Kom-moderator";
import ForumDiskusi from "./pages/forum-diskusi";
import ProfileTentang from "./pages/profile-tentang";
import ProfileKomunitas from "./pages/profile-komunitas";
import ProfileLinimasa from "./pages/profile-linimasa";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/diskusi" element={<Diskusi />} />
        <Route path="/komunitas-anggota" element={<Anggota />} />
        <Route path="/forum-diskusi" element={<ForumDiskusi />} />
        <Route path="/profil-tentang" element={<ProfileTentang />} />
        <Route path="/profil-linimasa" element={<ProfileLinimasa />} />
        <Route path="/profil-komunitas" element={<ProfileKomunitas />} />
        <Route
          path="/komunitas-moderator-admin"
          element={<ModeratordanAdmin />}
        />
      </Routes>
    </Router>
  );
}

export default App;