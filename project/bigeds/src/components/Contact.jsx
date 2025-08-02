import React from 'react';

function Contact() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary-dark">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary-dark">Visit Us</h3>
            <p className="text-gray-700 mb-2">
              <strong>Address:</strong> 12209 N Pennsylvania Ave<br />
              Oklahoma City, Oklahoma 73120
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Phone:</strong> <a href="tel:+14057552108" className="text-primary-dark hover:underline">(405) 755‑2108</a>
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Hours:</strong><br />
              Tuesday – Saturday: 11:00 AM – 7:30 PM<br />
              Closed Sunday & Monday
            </p>
            <p className="text-gray-700">
              We’re located in the Camelot Shopping Center on the southwest corner of NW 122nd and North Pennsylvania Avenue. Stop in or give us a call to place your order!
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary-dark">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary-dark focus:ring focus:ring-primary-light focus:ring-opacity-50"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary-dark focus:ring focus:ring-primary-light focus:ring-opacity-50"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary-dark focus:ring focus:ring-primary-light focus:ring-opacity-50"
                  placeholder="(405) 555‑1234"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary-dark focus:ring focus:ring-primary-light focus:ring-opacity-50"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-md shadow-sm transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
