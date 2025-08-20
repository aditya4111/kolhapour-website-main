import { Link } from "react-router-dom";
import bgImage from "../assets/kolhapur-bg.jpg"; // Replace with your image

export default function Home() {
  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to Kolhapur</h1>
        <p className="text-lg mb-6">Explore history, nature, and culture like never before.</p>
        <Link
          to="/book"
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-blue-600 hover:text-white transition"
        >
          Book a Trip
        </Link>
      </div>
    </div>
  );
}
