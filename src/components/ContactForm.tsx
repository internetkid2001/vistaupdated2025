'use client'

export default function ContactForm() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <form
        action="https://formspree.io/f/xqaqwlva"
        method="POST"
        className="space-y-6"
      >
        {/* Name Fields */}
        <div>
          <label className="block text-sm font-semibold text-black mb-2">
            Name <span className="text-gray-500">(required)</span>
          </label>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="first_name"
              required
              placeholder="First Name"
              className="w-full border border-gray-300 bg-gray-50 px-3 py-2 text-sm focus:outline-none"
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              className="w-full border border-gray-300 bg-gray-50 px-3 py-2 text-sm focus:outline-none"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-black mb-2">
            Email <span className="text-gray-500">(required)</span>
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-gray-300 bg-gray-50 px-3 py-2 text-sm focus:outline-none"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block text-sm font-semibold text-black mb-2">
            Subject <span className="text-gray-500">(required)</span>
          </label>
          <input
            type="text"
            name="subject"
            required
            className="w-full border border-gray-300 bg-gray-50 px-3 py-2 text-sm focus:outline-none"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-semibold text-black mb-2">
            Message <span className="text-gray-500">(required)</span>
          </label>
          <textarea
            name="message"
            rows={5}
            required
            className="w-full border border-gray-300 bg-gray-50 px-3 py-2 text-sm focus:outline-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="px-8 py-2 border border-black text-black rounded-full text-sm font-semibold hover:bg-black hover:text-white transition"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </section>
  )
}
