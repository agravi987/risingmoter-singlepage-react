export default function Contact() {
  return (
    <section className="bg-[#0f172a] text-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-300 text-lg">
          Have questions or want to schedule a test drive? Reach out to us
          below.
        </p>
      </div>

      <form className="max-w-2xl mx-auto space-y-6">
        <div>
          <label className="block text-gray-200 text-left mb-2">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 bg-[#1e293b] border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-gray-200 text-left mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 bg-[#1e293b] border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-gray-200 text-left mb-2">Message</label>
          <textarea
            className="w-full px-4 py-2 bg-[#1e293b] border border-gray-600 rounded-md text-white h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
