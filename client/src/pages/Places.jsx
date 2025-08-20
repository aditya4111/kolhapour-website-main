import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const packages = [
  {
    id: 1,
    title: 'Mahalaxmi Temple',
    price: '₹999',
    image: '/images/kolhapur1.jpeg',
    highlights: ['Mahalakshmi Temple is an important Hindu temple dedicated to Goddess Mahalakshmi.Goddess Mahalakshmi is the consort of Lord Vishnu and it is customary among Hindus to visit Tirupati Temple, Kolhapur Mahalakshmi Temple as a yatra.'],
    offer: '20% Off',
  },
  {
    id: 2,
    title: 'Bhavani Mandap',
    price: '₹1999',
    image: '/images/kolhapur2.jpeg',
    highlights: ['Bhavani Mandap is a historical structure in Kolhapur known for its rich cultural and royal significance. It served as a royal palace and court for the Chhatrapati Maharaja and is now a popular tourist attraction.'],
    offer: 'Summer Deal',
  },
  {
    id: 3,
    title: 'Town Hall Museum',
    price: '₹2999',
    image: '/images/kolhapur3.jpeg',
    highlights: ['The Town Hall Museum in Kolhapur, Maharashtra, is a neo-Gothic structure built between 1872 and 1876 by British engineer Charles Mant. Originally serving as a government office, it was converted into a museum in 1945.'],
    offer: 'Flat ₹500 Off',
  },
   {
    id: 4,
    title: 'Rankala Lake',
    price: '₹999',
    image: '/images/kolhapur1.jpeg',
    highlights: ['Rankala Lake is on the western side of Ambabai temple , it is a popular evening spot and recreation centre. This lake was constructed by late Maharajah, Shri Shahu Chhatrapati. The Lake is surrounded by Chaupati and other gardens. '],
    offer: '20% Off',
  },
  {
    id: 5,
    title: 'New Palace Museum',
    price: '₹1999',
    image: '/images/kolhapur2.jpeg',
    highlights: ['New Palace, Kolhapur is a palace situated in Kolhapur, in the Indian state of Maharashtra. The Palace took 7 years to complete, from 1877 to 1884, costing about seven lakhs of rupees.it has been an attraction for tourists.'],
    offer: 'Summer Deal',
  },
  {
    id: 6,
    title: 'Shalini Palace',
    price: '₹2999',
    image: '/images/kolhapur3.jpeg',
    highlights: ['Shalini Palace in the city of Kolhapur in the Indian state of Maharashtra was built in 1931–34 at a cost of Rs. 800,000 and was named after Princess Shalini Raje of Kolhapur. The Palace stands on the west bank of the picturesque Lake Rankala.'],
    offer: 'Flat ₹500 Off',
  },
];

const Packages = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Explore Our Tour Places</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <motion.div
            key={pkg.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
          >
            <div className="relative">
              <img src={pkg.image} alt={pkg.title} className="w-full h-56 object-cover" />
              
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{pkg.title}</h2>
              
              <ul className="text-sm mb-4 space-y-1">
                {pkg.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    
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