'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useRef, useState, useEffect } from 'react';
import { FaGithub, FaInstagram } from 'react-icons/fa'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    title: "Amerta",
    period: "Jan 2025 - Jun 2025",
    description: "Enterprise Information System for PT Amerta Sukses Manunggal with inventory, CRM, dashboard, and financial modules. Served as Scrum Master and full-stack developer using Spring Boot and React.",
    role: "Scrum Master & Full-stack Developer",
    tech: ["Spring Boot", "React", "Vercel", "Google Cloud"],
    images: ["/Amerta/AmertaIG.png"],
    github: null,
    instagram: "https://www.instagram.com/p/DKsDOy7v2eh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 2,
    title: "Movie Logs",
    period: "Personal Project",
    description: "Movie tracking app integrating with TMDB API to browse top-rated, popular, and upcoming films. Users can also review movies, add them to a watchlist, or mark them as watched.",
    role: "Full-stack Developer",
    tech: ["Spring Boot", "API", "HTML/CSS"],
    images: ["/Movie Logs/MovieLogsHome.jpg", "/Movie Logs/MovieLogsMovieDetail.jpg","/Movie Logs/MovieLogsMovieDetail2.jpg",
        "/Movie Logs/MovieLogsMovieList.jpg", "/Movie Logs/MovieLogsSearch.jpg", "/Movie Logs/MovieLogsSearch2.jpg","/Movie Logs/MovieLogsReviewDetail.jpg", "/Movie Logs/MovieLogsReviews.jpg",
         "/Movie Logs/MovieLogsWrite.jpg"],
    github: "https://github.com/audricjohansyah/movielogs"
  },
  {
    id: 3,
    title: "ApapMedika - Pharmacy",
    period: "Aug 2024 - Dec 2024",
    description: "Web-based pharmacy system with CRUD for medicines and prescriptions, plus usage statistics. Built with Spring Boot and PostgreSQL for the Enterprise Application Architecture course.",
    role: "Full-stack Developer",
    tech: ["Spring Boot", "PostgreSQL", "HTML/CSS"],
    images: ["/ApapMedika/ApapmedikaHome.jpg", "/ApapMedika/ApapmedikaMedicine.jpg","/ApapMedika/ApapmedikaMedicineDetail.jpg",
        "/ApapMedika/ApapmedikaMedicineAdd.jpg", "/ApapMedika/ApapmedikaMedicineUpdate.jpg", "/ApapMedika/ApapmedikaMedicineRestock.jpg","/ApapMedika/ApapmedikaPrescription.jpg", "/ApapMedika/ApapmedikaPrescriptionDetail.jpg",
         "/ApapMedika/ApapmedikaPrescriptionAdd.jpg", "/ApapMedika/ApapmedikaStatistics.jpg"],
    github: "https://github.com/audricjohansyah/apapmedikapharmacy"
  },
  {
    id: 4,
    title: "Marmut",
    period: "Jan 2024 - Jun 2024",
    description: "Music streaming platform with podcast features, built using Django and SQL. Includes podcast playback, playlist management, and chart display. Made for Database course at UI.",
    role: "Full-stack Developer",
    tech: ["Django", "PostgreSQL", "HTML/CSS", "AJAX", "Bootstrap"],
    images: ["/Marmut/MarmutHome.jpg", "/Marmut/MarmutChart.jpg", "/Marmut/MarmutDashboard.jpg", "/Marmut/MarmutPlaylist.jpg",
        "/Marmut/MarmutSignUp.jpg", "/Marmut/MarmutSong.jpg"],
    github: "https://github.com/basdat-d1"
  },
  {
    id: 5,
    title: "Read & Brew",
    period: "Aug 2023 - Dec 2023",
    description: "Cross-platform café app developed for the Platform-Based Programming course at UI. Allows users to order food and drinks, as well as borrow, return, and review books. Built using Django (web) and Flutter (mobile).",
    role: "Full-stack Developer",
    tech: ["Django", "Flutter", "Bootstrap", "AJAX", "HTML/CSS"],
    images: ["/RnB/RnbHome.jpg", "/RnB/RnbBooks.jpg", "/RnB/RnbFood.jpg", "/RnB/RnbLogin.jpg", "/RnB/RnbOrderSummary.jpg", 
        "/RnB/RnbReview.jpg","/RnB/RnbMobile.jpg", "/RnB/RnbMobileFood.jpg"],
    github: "https://github.com/PBP-C08"
  },
  {
    id: 6,
    title: "Soundwave",
    period: "Aug 2023 - Dec 2023",
    description: "Basic cross-platform music album manager with real-time updates. Built with Django and Flutter as an intro to full-stack dev.",
    role: "Full-stack Developer",
    tech: ["Django", "Flutter", "Bootstrap", "AJAX", "HTML/CSS"],
    images: ["/Soundwave/SoundwaveLogin.jpg", "/Soundwave/SoundwaveAlbum.jpg", "/Soundwave/SoundwaveMobile.jpg", 
        "/Soundwave/SoundwaveMobileHome.jpg", "/Soundwave/SoundwaveMobileLogin.jpg"],
    github: "https://github.com/audricjohansyah/soundwave"
  }
]

export default function ProjectsPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-pulse text-gray-500">Loading projects...</div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      
      <main className="flex-grow px-4 py-8 md:py-8 mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-8 text-center"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Projects</h1>
          <p className="text-gray-600">My development work</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto px-4">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(50%-12px)]"
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

function ProjectCard({ project, index }) {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -200 : 200,
        behavior: 'smooth'
      })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.4,
          delay: index * 0.1
        }
      }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      className="bg-white rounded-lg shadow-xs border border-gray-100 overflow-hidden hover:shadow-sm transition-all"
    >
      {/* Carousel */}
      <div className="relative group">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory h-40 md:h-48"
        >
          {project.images.map((img, idx) => (
            <div key={idx} className="flex-shrink-0 snap-start w-full relative">
              <Image
                src={img}
                alt={`${project.title} screenshot ${idx + 1}`}
                fill
                className="object-contain bg-gray-50"
                priority={idx === 0} // Prioritize first image load
              />
            </div>
          ))}
        </div>
        
        {/* Navigation */}
        {project.images.length > 1 && (
          <>
            <button 
              onClick={() => scroll('left')}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm border border-gray-200"
            >
              <FiChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm border border-gray-200"
            >
              <FiChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
              {project.title}
            </h2>
            <p className="text-sm text-gray-500">{project.period}</p>
          </div>
          <div className="flex gap-3">
            {project.github && (
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
            )}
            {project.instagram && (
              <a 
                href={project.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
            )}
          </div>
        </div>

        <p className="mt-3 text-sm text-gray-700">{project.description}</p>
        
        <div className="mt-3 text-sm">
          <span className="font-medium text-gray-900">Role:</span> {project.role}
        </div>

        <div className="mt-4">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Tech Stack</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <motion.span 
                key={tech}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.05 }}
                viewport={{ once: true }}
                className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs rounded-md"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}