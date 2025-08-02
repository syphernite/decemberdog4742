import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/cheeseburger.jpg';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[70vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">Big Ed's Hamburgers & Gyros</h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-100 max-w-2xl mx-auto">
            Classic American comfort food served with love since 1982
          </p>
          <Link
            to="/menu"
            className="mt-8 inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-200"
          >
            Explore Our Menu
          </Link>
        </div>
      </section>
      {/* Feature Sections */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary-dark">Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Made to Order</h3>
              <p className="text-gray-600 text-sm">
                Every burger, gyro and dog is cooked to order using fresh ingredients. We hand‑cut our fries daily and prepare your meal just the way you like it.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Family Atmosphere</h3>
              <p className="text-gray-600 text-sm">
                A family‑owned staple since 1982, Big Ed's welcomes you with a friendly smile and a comfortable, inviting dining room perfect for all ages.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Generous Portions</h3>
              <p className="text-gray-600 text-sm">
                From our famous Big Ed Burger to jumbo foot‑long coneys, our generous portions ensure you’ll never leave hungry. Bring the family and share!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
