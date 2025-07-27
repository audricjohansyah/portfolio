import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" }
  ];

  return (
    <header className="w-full px-4 py-3 border-b bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="w-full flex justify-between items-center">
        <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 ml-2 sm:ml-4 tracking-tight"
            >
            Alexander Audric Johansyah
        </motion.h1>
    
        <nav className="flex space-x-4 sm:space-x-6 mr-2 sm:mr-4">
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <Link 
                href={item.path}
                className="relative text-sm sm:text-base text-gray-700 hover:text-blue-600 transition-colors font-medium"
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
      </div>
    </header>
  );
}