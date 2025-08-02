import React from 'react';

function About() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary-dark">About Us</h2>
        <p className="mb-4 text-gray-700 text-lg">
          Big Ed's Hamburgers & Gyros has been serving the Oklahoma City community from the same location since 1982. Our family‑owned restaurant prides itself on cooking each meal to order using the freshest ingredients. We still cut our fries fresh every day and believe that quality ingredients and friendly service never go out of style.
        </p>
        <p className="mb-4 text-gray-700 text-lg">
          Over the decades, we’ve expanded our menu to include more than just our signature burgers. Try one of our refreshing salads or subs, or go for a classic foot‑long coney or gyro. No matter what you choose, you’ll taste our commitment to homemade flavor and hearty portions.
        </p>
        <p className="mb-4 text-gray-700 text-lg">
          Join us in our comfortable dining room for lunch or dinner, and experience a true Oklahoma City tradition. Whether you’re dining solo or feeding a crowd, there’s something for everyone at Big Ed’s. Thank you for supporting local businesses—we look forward to serving you!
        </p>
      </div>
    </section>
  );
}

export default About;
