import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Experiences", path: "/experiences" }
  ];

  return (
    <header className="w-full px-4 py-3 border-b bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="ml-2 sm:ml-6"
        >
          <Link href="/" passHref>
            <div className="w-10 h-10 sm:w-12 sm:h-12 relative cursor-pointer">
              <Image 
                src="/AAJ.ico" 
                alt="AAJ Logo"
                width={48}
                height={48}
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </motion.div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <nav className="flex space-x-4 sm:space-x-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Link 
                  href={item.path}
                  className="relative text-sm lg:text-base text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  {item.name}
                  <motion.span
                    whileHover={{ width: "100%" }}
                    className="absolute bottom-0 left-0 h-0.5 bg-blue-500"
                    style={{ width: 0 }}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CV Download*/}
          <motion.a
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            href="/Alexander Audric Johansyah - CV.pdf"
            download="Alexander Audric Johansyah - CV.pdf"
            className="flex items-center gap-1.5 px-3 py-1.5 lg:px-4 lg:py-2 text-sm lg:text-base bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiDownload className="text-sm lg:text-base" />
            <span>CV</span>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white border-t mt-3"
        >
          <div className="px-4 py-3 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="/Alexander Audric Johansyah - CV.pdf"
              download="Alexander Audric Johansyah - CV.pdf"
              className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FiDownload />
              <span>Download CV</span>
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}