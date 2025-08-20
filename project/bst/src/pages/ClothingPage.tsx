import React, { useEffect, useState } from 'react';
import { ArrowLeft, Shirt, ExternalLink, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaSnapchatGhost } from 'react-icons/fa';

const ClothingPage = () => {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          window.location.href = "https://staksclothing.com";
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const progress = (countdown / 10) * circumference;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 z-50 p-6">
        <Link 
          to="/" 
          className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
        >
          <ArrowLeft className="w-6 h-6 mr-2" />
          <span className="font-medium">BACK</span>
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-1 items-center justify-center text-center px-6">
        <div>
          <Shirt className="w-20 h-20 text-yellow-400 mx-auto mb-6 animate-pulse" />
          <h1 className="text-6xl md:text-8xl font-light tracking-widest mb-6">
            STAKS
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10">
            CLOTHING COLLECTION
          </p>
          <a
            href="https://staksclothing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-4 border-2 border-yellow-400 text-yellow-400 font-medium tracking-wide hover:bg-yellow-400 hover:text-black transition-all duration-300 animate-bounce"
          >
            SHOP COLLECTION
            <ExternalLink className="w-5 h-5 ml-2" />
          </a>

          {/* Countdown Circle */}
          <div className="mt-10 flex flex-col items-center space-y-4">
            <svg className="w-20 h-20">
              <circle
                cx="40"
                cy="40"
                r={radius}
                stroke="gray"
                strokeWidth="6"
                fill="transparent"
              />
              <circle
                cx="40"
                cy="40"
                r={radius}
                stroke="yellow"
                strokeWidth="6"
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={circumference - progress}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-linear"
                transform="rotate(-90 40 40)"
              />
              <text
                x="50%"
                y="50%"
                dy=".3em"
                textAnchor="middle"
                className="fill-yellow-400 text-lg font-bold"
              >
                {countdown}
              </text>
            </svg>
            <p className="text-sm text-gray-400">
              Redirecting in {countdown} seconds...
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto flex justify-center space-x-6">
          <a 
            href="https://instagram.com/staks.tn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-yellow-400 transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a 
            href="https://t.snapchat.com/RInsoZeO"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Snapchat"
            className="flex items-center space-x-2 hover:text-yellow-400 transition-colors"
          >
            <FaSnapchatGhost className="w-6 h-6" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ClothingPage;
