import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Places from "./pages/Places";
import Packages from "./pages/Packages";
import Aboutus from "./pages/aboutus";

import BookTrip from "./pages/BookTrip";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/places" element={<Places />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/contact" element={<Contact />} />
            
            <Route path="/book" element={<BookTrip />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
