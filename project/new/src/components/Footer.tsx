export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/20">
      <div className="max-w-[1320px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="text-white font-bold text-xl tracking-wider mb-4">
              KOVSK
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Custom high-end web development that converts.
            </p>
          </div>

          <div>
            <h3 className="text-white text-sm font-medium mb-4 tracking-wide">
              SERVICES
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                >
                  Custom Websites
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                >
                  Full-Stack Apps
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                >
                  SEO & Content
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                >
                  Google Business
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-medium mb-4 tracking-wide">
              COMPANY
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                >
                  Process
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-medium mb-4 tracking-wide">
              CONNECT
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@kovsk.com"
                  className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                >
                  hello@kovsk.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+18005551234"
                  className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                >
                  (800) 555-1234
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 KOVSK. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a
              href="#privacy"
              className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
