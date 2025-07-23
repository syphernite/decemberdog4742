import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <h2 className="text-4xl md:text-5xl font-black tracking-wider text-white logo-pulse">
          BUILT
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
            4
          </span>
          YOU
        </h2>
        <div className="absolute inset-0 text-4xl md:text-5xl font-black tracking-wider text-green-400/20 blur-sm">
          BUILT4YOU
        </div>
      </div>
    </div>
  );
};

export default Logo;