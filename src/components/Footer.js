import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    {
      icon: <FaEnvelope size={21} className="text-gray-600 hover:text-blue-600" />,
      url: "mailto:audricjohansyah@gmail.com",
      label: "Email"
    },
    {
      icon: <FaGithub size={21} className="text-gray-600 hover:text-blue-600" />,
      url: "https://github.com/audricjohansyah",
      label: "GitHub"
    },
    {
      icon: <FaLinkedin size={21} className="text-gray-600 hover:text-blue-600" />,
      url: "https://www.linkedin.com/in/alexander-audric-johansyah-628806271/",
      label: "LinkedIn"
    }
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="w-full px-4 py-4 border-t bg-white/80 backdrop-blur-sm"
    >
      <div className="w-full flex flex-col items-center">
        <div className="mb-3">
          <p className="text-xs sm:text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Alexander Audric Johansyah. All rights reserved.
          </p>
        </div>
        
        <div className="flex space-x-3">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label={link.label}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}