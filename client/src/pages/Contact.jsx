const Contact = () => {
  return (
    <div className="min-h-screen px-4 py-10 max-w-xl mx-auto" data-aos="fade-up">
      <h1 className="text-4xl font-bold text-center mb-8 text-red-700">Contact Us</h1>
      <form className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <button
          type="submit"
          className="bg-red-600 text-white px-6 py-3 rounded-lg w-full font-semibold hover:bg-red-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
