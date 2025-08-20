import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const packages = [
  {
    id: 1,
    title: 'Kolhapur Darshan - 1 Day / 1 Night',
    price: '₹999',
    image: '/images/kolhapur1.jpeg',
    highlights: ['Mahalaxmi Temple', 'Rankala Lake', 'Shalini Palace'],
    offer: '20% Off',
  },
  {
    id: 2,
    title: 'Historical Tour - 2 Days / 2 Nights',
    price: '₹1999',
    image: '/images/kolhapur2.jpeg',
    highlights: ['Panhala Fort', 'Jyotiba Temple', 'Town Hall Museum'],
    offer: 'Summer Deal',
  },
  {
    id: 3,
    title: 'Nature Retreat - 3 Days / 3 Nights',
    price: '₹2999',
    image: '/images/kolhapur3.jpeg',
    highlights: ['Radhanagari Dam', 'Dajipur Wildlife Sanctuary', 'Pawankhind'],
    offer: 'Flat ₹500 Off',
  },
];

const Packages = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Explore Our Tour Packages</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <motion.div
            key={pkg.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
          >
            <div className="relative">
              <img src={pkg.image} alt={pkg.title} className="w-full h-56 object-cover" />
              <span className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 text-xs rounded-full">
                {pkg.offer}
              </span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{pkg.title}</h2>
              <p className="text-lg font-bold text-green-600 mb-4">Starting at {pkg.price}</p>
              <ul className="text-sm mb-4 space-y-1">
                {pkg.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-green-500">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl transition">
                Book Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Need a Custom Trip?</h2>
        <p className="mb-4">Contact us on WhatsApp or call us now to plan your dream vacation in Kolhapur.</p>
        <a
          href="/book-trip"
          className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full text-lg transition"
        >
          Plan My Trip
        </a>
      </div>
    </div>
  );
};

export default Packages;