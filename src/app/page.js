'use client'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProfileImage from '@/components/ProfileImage'
import Image from 'next/image';
import {
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact,
  FaGithub, FaLinkedin, FaInstagram, FaLine,
  FaDiscord, FaWhatsapp, FaSpotify, FaEnvelope, FaGitAlt
} from 'react-icons/fa'
import {
  SiFlutter,
  SiDjango,
  SiSpringboot,
  SiPostgresql,
  SiTableau,
  SiGooglecloud,
} from 'react-icons/si';
import { RiNextjsFill } from "react-icons/ri";

const skills = [
  { icon: <FaPython size={32} style={{ color: '#3776AB' }} />, url: 'https://www.python.org/', name: 'Python' },
  { icon: <FaJava size={32} style={{ color: '#ED1D25' }} />, url: 'https://www.java.com/', name: 'Java' },
  { icon: <SiFlutter size={32} style={{ color: '#02569B' }} />, url: 'https://flutter.dev/', name: 'Flutter' },
  { icon: <FaGitAlt size={32} style={{ color: '#F05032' }} />, url: 'https://git-scm.com/', name: 'Git' },
  { icon: <SiDjango size={32} style={{ color: '#092E20' }} />, url: 'https://www.djangoproject.com/', name: 'Django' },
  { icon: <SiSpringboot size={32} style={{ color: '#6DB33F' }} />, url: 'https://spring.io/projects/spring-boot', name: 'Spring' },
  { icon: <SiPostgresql size={32} style={{ color: '#336791' }} />, url: 'https://www.postgresql.org/', name: 'PostgreSQL' },
  { icon: <FaCss3Alt size={32} style={{ color: '#1572B6' }} />, url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', name: 'CSS' },
  { icon: <FaHtml5 size={32} style={{ color: '#E34F26' }} />, url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', name: 'HTML' },
  { icon: <SiTableau size={32} style={{ color: '#E97627' }} />, url: 'https://www.tableau.com/', name: 'Tableau' },
  { icon: <FaReact size={32} style={{ color: '#61DAFB' }} />, url: 'https://react.dev/', name: 'React' },
  { icon: <SiGooglecloud size={32} style={{ color: '#4285F4' }} />, url: 'https://cloud.google.com/', name: 'GCP' },
  { icon: <RiNextjsFill size={32} style={{ color: '#000000' }} />, url: 'https://nextjs.org/', name: 'Next.js' },
  {
    icon: (
      <div className="w-8 h-8 relative">
        <Image 
          src="/PowerBi.svg" 
          alt="Power BI"
          width={32}
          height={32}
          className="object-contain"
        />
      </div>
    ),
    url: 'https://powerbi.microsoft.com/',
    name: 'Power BI'
  }
];

const contacts = [
  { icon: <FaEnvelope size={20} />, label: 'Email', url: 'mailto:audricjohansyah@gmail.com' },
  { icon: <FaLine size={20} />, url: 'https://line.me/ti/p/MPG4lDwzdw', label: 'Line' },
  { icon: <FaWhatsapp size={20} />, url: 'https://wa.me/6281385217010', label: 'WhatsApp' },
  { icon: <FaDiscord size={20} />, url: 'https://discord.com/users/459272476065529856', label: 'Discord' },
]

const socials = [
  { icon: <FaLinkedin size={20} />, url: 'https://www.linkedin.com/in/alexander-audric-johansyah-628806271/', label: 'LinkedIn' },
  { icon: <FaInstagram size={20} />, url: 'https://www.instagram.com/audricjohansyah/', label: 'Instagram' },
  { icon: <FaGithub size={20} />, url: 'https://github.com/audricjohansyah', label: 'GitHub' },
  { icon: <FaSpotify size={20} />, url: 'https://open.spotify.com/user/alexanderaudric?si=1ec343ce3e3a4751', label: 'Spotify' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      
      <main className="flex-grow px-4 py-8 md:py-12 max-w-6xl mx-auto w-full">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col md:flex-row gap-8 md:gap-12"
        >
         {/* Profile Section */}
          <motion.div 
            variants={itemVariants}
            className="md:w-1/3 flex flex-col items-center"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}  
              whileTap={{ scale: 0.98 }}
              className="mb-4 p-1 rounded-full bg-gradient-to-br from-blue-50 to-gray-50" 
            >
              <ProfileImage className="w-24 h-24 md:w-28 md:h-28" /> 
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-2xl font-bold text-gray-900 mb-1 text-center"
            >
              Hello, I'm Audric 👋
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-base text-gray-600 mb-4 text-center" 
            >
              Information Systems Student
            </motion.p>
            
            {/* Contact Buttons */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-2 gap-2 w-full"
            >
              {[...contacts, ...socials].map((item, idx) => (
                <motion.a
                  key={idx}
                  variants={itemVariants}
                  href={item.url}
                  whileHover={{ 
                    scale: 1.03, 
                    backgroundColor: 'rgba(59, 130, 246, 0.1)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center p-2 rounded-lg border border-gray-200 bg-white hover:bg-blue-50 transition-all text-sm" 
                >
                  <span className="mr-1.5">{item.icon}</span> 
                  <span className="text-xs font-medium text-gray-700">{item.label}</span> 
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            variants={containerVariants}
            className="md:w-2/3"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-xl font-bold text-gray-900 mb-3 pb-2 border-b border-gray-200">
                About Me
              </h2>
              <p className="text-gray-600 text-base mb-6 leading-relaxed">
                Passionate about turning ideas into functional websites, managing projects efficiently, 
                and extracting insights from data using business intelligence tools. Currently pursuing 
                Information Systems with focus on web development, data analysis and project management.
              </p>
            </motion.div>

            {/* Skills Section */}
            <motion.div variants={itemVariants}>
              <h2 className="text-xl font-bold text-gray-900 mb-3 pb-2 border-b border-gray-200">Technical Skills</h2>
              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3"
              >
                {skills.map((skill, idx) => (
                  <motion.a
                    key={idx}
                    variants={itemVariants}
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.08,
                      y: -3,
                      boxShadow: '0 2px 4px -1px rgba(0, 0, 0, 0.1)'
                    }}
                    className="flex flex-col items-center p-3 rounded-lg bg-white border border-gray-200 hover:border-blue-200 transition-all"
                  >
                    {skill.icon}
                    <span className="mt-1.5 text-xs font-medium text-gray-700">{skill.name}</span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  )
}