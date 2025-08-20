export default function BookTrip() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-white text-center px-4">
      <h2 className="text-3xl font-bold mb-4 text-blue-600">Book Your Trip</h2>
      <p className="text-gray-600 mb-6">Fill the form to reserve your journey to Kolhapur.</p>
      <form className="space-y-4 w-full max-w-md">
        <input type="text" placeholder="Full Name" className="w-full p-3 border rounded" />
        <input type="email" placeholder="Email Address" className="w-full p-3 border rounded" />
        <input type="date" className="w-full p-3 border rounded" />
        <select className="w-full p-3 border rounded">
          <option value="">Select Package</option>
          <option>1D/1N</option>
          <option>2D/2N</option>
            <option>3D/3N</option>
        </select>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-800">Book Now</button>
      </form>
    </div>
  );
}
