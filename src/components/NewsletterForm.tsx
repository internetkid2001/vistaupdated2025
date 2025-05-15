'use client'

export default function NewsletterForm() {
  return (
    <section className="flex flex-col items-center px-4 text-center mt-10">
      <img
        src="https://victor-videos.b-cdn.net/VIRA-ANIMATION-V3-COLOR-unscreen.gif"
        alt="Newsletter animation"
        className="w-40 mb-6"
      />
      <p className="text-sm font-medium mb-4">
        Sign up to receive early access and updates from VISTA
      </p>

      <form
        action="https://gmail.us8.list-manage.com/subscribe/post?u=a92e95079a6c80aaf4c7951dd&amp;id=c2f39fe888&amp;f_id=002913e1f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank"
        noValidate
        className="w-full max-w-sm space-y-4"
      >
        <div>
          <label htmlFor="mce-EMAIL" className="sr-only">Email</label>
          <input
            type="email"
            name="EMAIL"
            id="mce-EMAIL"
            placeholder="Email"
            required
            className="w-full border border-gray-300 p-3 rounded focus:outline-none"
          />
        </div>

        {/* Honeypot anti-bot field (hidden) */}
        <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
          <input
            type="text"
            name="b_a92e95079a6c80aaf4c7951dd_c2f39fe888"
            tabIndex={-1}
            defaultValue=""
          />
        </div>

        <button
          type="submit"
          name="subscribe"
          className="w-full bg-black text-white py-3 rounded font-semibold hover:bg-gray-800"
        >
          
        </button>
      </form>
    </section>
  )
}
