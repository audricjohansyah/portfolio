'use client'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState, useEffect } from 'react'

export default function ExperiencePage() {
  const [isLoading, setIsLoading] = useState(true)
  const experiences = [
    {
      title: "IT Application Developer Intern",
      organization: "PT Toyoda Gosei Indonesia",
      type: "Full-time",
      duration: "Aug 2025 - Feb 2026 · 6 mos",
      location: "Karawang, West Java, Indonesia · On-site",
      bullets: [
        "Built responsive web interfaces using HTML, CSS, and JavaScript (jQuery) to deliver user-friendly front-end features.",
        "Developed back-end services with PHP/Laravel, implementing CRUD functionality and business logic for internal applications.",
        "Collaborated using Git version control, ensuring smooth teamwork and code management.",
        "Conducted application testing and debugging, resolving errors and improving performance through systematic problem-solving.  ",
        "Prepared technical documentation and user guides, and presented project outcomes to mentors and stakeholders."
      ]
    },
    {
      title: "Teaching Assistant for Information Systems Management",
      organization: "University of Indonesia",
      type: "Full-time",
      duration: "Jan 2025 - Jun 2025 · 6 mos",
      location: "Depok, West Java, Indonesia · Hybrid",
      bullets: [
        "Reviewed and graded individual and group assignments submitted by students.",
        "Supervised students during quizzes and examinations.",
        "Responded to students' questions and provided academic support.",
        "Relayed important announcements and updates from lecturers to students."
      ]
    },
    {
      title: "COMPFEST",
      organization: "",
      type: "",
      duration: "1 yr 9 mos",
      location: "Depok, West Java, Indonesia · Hybrid",
      roles: [
        {
          title: "PIC of Editorial Marketing",
          duration: "Jan 2024 to Dec 2024 · 1 yr",
          bullets: [
            "Managed a team to produce and publish marketing content to COMPFEST's official Medium blog in both English and Indonesian.",
            "Oversaw the editorial process from topic planning to proofreading and publishing, ensuring consistency and brand alignment.",
            "Proofread all submitted articles and contributed as a writer for selected pieces.",
            "Published 15+ articles, helping boost COMPFEST's online visibility and engagement."
          ]
        },
        {
          title: "Staff of Editorial Marketing",
          duration: "Apr 2023 to Dec 2023 · 9 mos",
          bullets: [
            "Contributed articles to COMPFEST's official Medium blog in both Indonesian and English.",
            "Delivered high-quality, well-researched, and engaging content to support the event's digital presence."
          ]
        }
      ]
    },
    {
      title: "Event Coordinator Staff",
      organization: "KMK Fasilkom UI",
      type: "",
      duration: "Jan 2023 to Jan 2024 · 1 yr 1 mo",
      location: "Depok, West Java, Indonesia · On-site",
      bullets: [
        "Assisted in planning and organizing events to foster community and strengthen relationships among KMK Fasilkom UI members.",
        "Collaborated with fellow committees to develop engaging event concepts and activities."
      ]
    }
  ]

  useEffect(() => {
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-pulse text-gray-500">Loading experiences...</div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      
      <main className="flex-grow px-4 py-8 md:py-8 max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-8 text-center"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Experiences</h1>
          <p className="text-gray-600">My professional journey and roles</p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

function ExperienceCard({ experience, index }) {
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
      className="bg-white/80 p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all"
    >
      <div className="flex flex-col md:flex-row md:justify-between gap-2">
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
            {experience.title}
          </h2>
          <div className="flex flex-wrap gap-x-4 mt-1">
            {experience.organization && <p className="text-gray-700">{experience.organization}</p>}
            {experience.type && <p className="text-gray-500">{experience.type}</p>}
          </div>
        </div>
        <div className="mt-2 md:mt-0 md:text-right">
          <p className="text-gray-600">{experience.duration}</p>
          <p className="text-gray-500">{experience.location}</p>
        </div>
      </div>

      {experience.bullets && (
        <ul className="mt-4 space-y-2 pl-5 list-disc">
          {experience.bullets.map((bullet, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.2 + i * 0.05 }}
              viewport={{ once: true }}
              className="text-gray-700"
            >
              {bullet}
            </motion.li>
          ))}
        </ul>
      )}

      {experience.roles && (
        <div className="mt-6 space-y-6">
          {experience.roles.map((role, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
              viewport={{ once: true }}
              className="pl-4 border-l-2 border-blue-200"
            >
              <h3 className="font-semibold text-gray-800">{role.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{role.duration}</p>
              <ul className="mt-2 space-y-1 pl-5 list-disc">
                {role.bullets.map((bullet, j) => (
                  <li key={j} className="text-gray-700 text-sm">
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  )
}