// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10 mt-16 relative overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left side */}
        <div className="text-center md:text-left space-y-2">
          <h3 className="text-xl font-bold text-[#e63946]">Plaza Mexico</h3>
          <p className="text-sm text-gray-300">
            Authentic Mexican flavors served hot daily.
          </p>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} Plaza Mexico. All rights reserved.</p>
        </div>

        {/* Right side with animated button */}
        <div className="flex justify-center">
          <a
            href="https://wixlabs-pdf-dev.appspot.com/assets/pdfjs/web/viewer.html?file=%2Fpdfproxy%3Finstance%3D98lpBj85TDC14KOhvZX8wofyua7oU9IiUuGIJIcN2yI.eyJpbnN0YW5jZUlkIjoiYjgzMzNjMTYtNzVmYy00Yzg2LTk3NWEtNTk5YzZlODczM2ZjIiwiYXBwRGVmSWQiOiIxM2VlMTBhMy1lY2I5LTdlZmYtNDI5OC1kMmY5ZjM0YWNmMGQiLCJtZXRhU2l0ZUlkIjoiODg5YmNlZTgtM2FhOC00MzcxLWI1OGMtNTMxNDVmNWJhNWFlIiwic2lnbkRhdGUiOiIyMDI1LTA5LTAzVDE4OjExOjQ4Ljg1NloiLCJkZW1vTW9kZSI6ZmFsc2UsImFpZCI6ImIwNDIxOGQzLTM1ZmMtNDhiOC04OGE1LWQzMTYxYmY0NmFmNyIsImJpVG9rZW4iOiIzMGE4ZjJmZS00ZjU0LTBmZjctMjJkNi0wYTg4MzFkYzk2NTIiLCJzaXRlT3duZXJJZCI6IjRhOTU4OTA3LTc1NzItNDZmNS1iODg4LTFmNTJmMzA1ODMzZCIsImJzIjoibUJjWEVfTTU3THNLUlptb0cxQ05rRzVVS2JrUVNxWUxxQkVUc1U5WTlSQSIsInNjZCI6IjIwMTYtMDMtMTBUMTg6MzA6MDcuNDQwWiJ9%26compId%3Dcomp-kbsf9t46%26url%3Dhttps%3A%2F%2Fdocs.wixstatic.com%2Fugd%2F4a9589_078637ab0a7a4cb38496b6c4e48c680f.pdf#page=1&links=false&originalFileName=PlazaMexicoMenu24&locale=en&allowDownload=true&allowPrinting=true"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-6 py-3 bg-[#e63946] text-white font-bold uppercase text-sm shadow-lg
                       transition-all duration-300 ease-in-out overflow-hidden btn-menu-neo"
          >
            <span className="relative z-10">View Full Menu</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
