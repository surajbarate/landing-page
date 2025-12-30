import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import ViewCourse from "./pages/ViewCourse";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />   {/* Always Visible */}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/course/:id" element={<ViewCourse />} />
      </Routes>

      <Footer />   {/* Always Visible */}
    </Router>
  );
}

export default App;
