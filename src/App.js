import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainBody from "./components/MainBody";
import Jobs from "./components/Jobs";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import SearchedJob from "./components/SearchedJob";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<MainBody />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/signin" element={<LoginSignup />} />
        <Route path="/signup" element={<LoginSignup />} />
        <Route path="/search" element={<SearchedJob />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
