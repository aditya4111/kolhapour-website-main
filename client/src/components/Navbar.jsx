import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-200 shadow-md px-8 py-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold text-blue-600">Kolhapur Tourism</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-blue-600 font-medium">Home</Link>
        <Link to="/places" className="hover:text-blue-600 font-medium">Places</Link>
        <Link to="/packages" className="hover:text-blue-600 font-medium">Packages</Link>
        <Link to="/aboutus" className="hover:text-blue-600 font-medium">About us</Link>
        <Link to="/contact" className="hover:text-blue-600 font-medium">Contact</Link>
        <Link to="/book" className="hover:text-white bg-blue-600 px-4 py-2 rounded text-white">Book Trip</Link>
      </div>
    </nav>
  );
}
