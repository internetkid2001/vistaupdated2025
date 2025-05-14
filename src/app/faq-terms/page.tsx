'use client'

import styles from './page.module.css'

export default function FAQTermsPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>FAQ &amp; Terms</h1>

      {/* FAQ Section */}
      <section className={styles.section}>
        <h2 className={styles.subheading}>Frequently Asked Questions</h2>
        <ul className={styles.qaList}>
          <li className={styles.qaItem}>
            <div className={styles.question}> What is the password to the store?</div>
            <div className={styles.answer}>
              The store automatically unlocks when we have a product drop. No password will be required to access it.
            </div>
          </li>

          <li className={styles.qaItem}>
            <div className={styles.question}>🌍 Do you ship internationally?</div>
            <div className={styles.answer}>
              Yes — we ship worldwide. Shipping costs are automatically calculated at checkout based on your region. Just enter your address to view the shipping total before completing your purchase.
            </div>
          </li>

          <li className={styles.qaItem}>
            <div className={styles.question}>🛒 Can I buy Vista products anywhere else?</div>
            <div className={styles.answer}>
              No. Vista products are only available directly through our official website. We will never request payment through services like Zelle, PayPal, or CashApp. If you encounter another site or account claiming to sell Vista items, it is not affiliated with us. Please be aware of potential scams and impersonators.
            </div>
          </li>

          <li className={styles.qaItem}>
            <div className={styles.question}>✉️ How can I contact you?</div>
            <div className={styles.answer}>
              For general questions or help with an order, email us at{' '}
              <a href="mailto:volunteersinservicetoart@gmail.com" className={styles.link}>
                volunteersinservicetoart@gmail.com
              </a>{' '}
              or use the Contact Form on our website.
            </div>
          </li>

          <li className={styles.qaItem}>
            <div className={styles.question}>🔁 Can I return or exchange an item?</div>
            <div className={styles.answer}>
              All sales are final. We do not offer refunds or exchanges. Please carefully review your cart, item details, and address before placing your order.
            </div>
          </li>

          <li className={styles.qaItem}>
            <div className={styles.question}>🏠 I made a mistake on my shipping address. Can it be fixed?</div>
            <div className={styles.answer}>
              Yes — if your order hasn’t shipped yet, we can update the address. Email{' '}
              <a href="mailto:volunteersinservicetoart@gmail.com" className={styles.link}>
                volunteersinservicetoart@gmail.com
              </a>{' '}
              with your correct address and Order Number. Invalid addresses may cause delays until corrected.
            </div>
          </li>

          <li className={styles.qaItem}>
            <div className={styles.question}>📏 I ordered the wrong size. Can I switch it?</div>
            <div className={styles.answer}>
              No — we cannot exchange items due to sizing errors. Be sure to double-check all details before checkout.
            </div>
          </li>

          <li className={styles.qaItem}>
            <div className={styles.question}> I received the wrong item or size. What should I do?</div>
            <div className={styles.answer}>
              If you received an incorrect item or size, email{' '}
              <a href="mailto:volunteersinservicetoart@gmail.com" className={styles.link}>
                volunteersinservicetoart@gmail.com
              </a>{' '}
              with your Order Number or checkout email. You’ll be asked to return the incorrect item, and we’ll ship you the correct one.
            </div>
          </li>

          <li className={styles.qaItem}>
            <div className={styles.question}>⏳ When will my order ship?</div>
            <div className={styles.answer}>
              Turnaround times vary depending on the product and whether it’s in-stock or part of a preorder.
              Each product page includes estimated fulfillment timeframes. If you need an update on your order,
              contact us directly.
            </div>
          </li>
        </ul>
      </section>

      {/* Return Policy */}
      <section className={styles.section}>
        <h2 className={styles.subheading}>Return Policy</h2>
        <ul className={styles.bullets}>
          <li>All sales are final.</li>
          <li>No returns or exchanges unless the item is incorrect or defective.</li>
          <li>Vista is not responsible for lost or stolen packages. Use a secure shipping address.</li>
        </ul>
      </section>

      {/* Customer Service */}
      <section className={styles.section}>
        <h2 className={styles.subheading}>Customer Service</h2>
        <p>
          Email{' '}
          <a href="mailto:volunteersinservicetoart@gmail.com" className={styles.link}>
            volunteersinservicetoart@gmail.com
          </a>{' '}
          with any order-related questions. Be sure to include your Order Number in the subject line.
          We respond within 48 hours or less.
        </p>
      </section>

      {/* Privacy Policy */}
      <section className={styles.section}>
        <h2 className={styles.subheading}>Privacy Policy</h2>
        <p>Effective Date: 5/14/2025</p>

        <ol className={styles.privacyList}>
          <li>
            <strong>Introduction</strong><br />
            Welcome to Vista. We respect your privacy. This policy outlines how we collect and handle your
            information when you subscribe to our marketing emails or texts.
          </li>
          <li>
            <strong>What We Collect</strong>
            <ul className={styles.bullets}>
              <li>Personal Info: Name, email, phone number, and other info you share</li>
              <li>Usage Data: Email opens, clicks, and interaction with messages</li>
            </ul>
          </li>
          <li>
            <strong>How It’s Used</strong>
            <ul className={styles.bullets}>
              <li>To send promotional emails, drop notifications, and updates</li>
              <li>To improve our communications</li>
              <li>To manage your subscription preferences</li>
            </ul>
          </li>
          <li>
            <strong>Data Security</strong><br />
            We follow industry-standard security measures, but no method is 100% secure.
          </li>
          <li>
            <strong>Sharing Your Info</strong><br />
            We never sell your data. We may work with trusted providers who assist with messaging, and they must keep your data confidential.
          </li>
          <li>
            <strong>Your Options</strong>
            <ul className={styles.bullets}>
              <li>Emails: Unsubscribe using the link in any email</li>
              <li>Texts: Reply STOP to opt out at any time</li>
            </ul>
          </li>
          <li>
            <strong>Children’s Privacy</strong><br />
            Vista does not knowingly collect information from anyone under age 13.
          </li>
          <li>
            <strong>Updates</strong><br />
            We may update this policy. Any major changes will be announced via email or text.
          </li>
          <li>
            <strong>Contact Us</strong><br />
            For privacy questions, email{' '}
            <a href="mailto:volunteersinservicetoart@gmail.com" className={styles.link}>
              volunteersinservicetoart@gmail.com
            </a>
          </li>
        </ol>
      </section>
    </div>
  )
}
