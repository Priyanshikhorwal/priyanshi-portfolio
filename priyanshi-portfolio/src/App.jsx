import profile from "./assets/profileimg.png";
import { Github, Linkedin, MapPin , Mail } from "lucide-react";

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans scroll-smooth overflow-x-hidden">

  {/* ================= NAVBAR ================= */}
 <header>
  {/* Desktop Navbar - Top */}
  <div className="hidden md:flex fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
           <nav className="flex gap-8 text-gray-400 text-sm">
        {["About", "Skills", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-white transition duration-300"
          >
            {item}
          </a>
        ))}
      </nav>
    </div>
  </div>

  {/* Mobile Navbar - Bottom */}
  <div className="md:hidden fixed bottom-0 left-0 w-full bg-black/80 backdrop-blur-md border-t border-gray-800 z-50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex justify-around items-center">
      {["About", "Skills", "Projects", "Contact"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="text-gray-400 text-sm hover:text-white transition duration-300"
        >
          {item}
        </a>
      ))}
    </div>
  </div>
</header>


  {/* ================= HERO ================= */}
  <section className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-20 sm:pb-24">

    {/* Background Glow Responsive */}
    <div className="absolute top-16 left-1/2 -translate-x-1/2 
    w-[250px] sm:w-[400px] md:w-[500px] 
    h-[250px] sm:h-[400px] md:h-[500px] 
    bg-blue-600/20 blur-[120px] rounded-full -z-10"></div>

    <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">

      {/* ================= LEFT ================= */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">

        {/* Profile Image */}
        <div className="relative group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr 
          from-blue-500 to-purple-500 blur-xl opacity-40 
          group-hover:opacity-70 transition duration-500"></div>

          <div className="relative 
          w-32 h-32 
          sm:w-40 sm:h-40 
          md:w-52 md:h-52 
          rounded-full border-4 border-blue-500 
          overflow-hidden shadow-lg shadow-blue-500/30 
          hover:scale-105 transition duration-500">
            <img
              src={profile}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-400 mt-6 text-sm sm:text-base">
          <MapPin size={16} />
          <span>Indore, Madhya Pradesh, India</span>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mt-6 text-gray-400">
          <a href="https://github.com/PriyanshiKhorwal" target="_blank" rel="noreferrer">
            <Github size={22} className="hover:text-white hover:scale-110 transition duration-300" />
          </a>

          <a href="https://www.linkedin.com/in/priyanshi-khorwal-304412332/" target="_blank" rel="noreferrer">
            <Linkedin size={22} className="hover:text-blue-500 hover:scale-110 transition duration-300" />
          </a>

          <a href="mailto:priyanshikhorwal0905@gmail.com" target="_blank" rel="noreferrer">
            <Mail size={22} className="hover:text-purple-400 hover:scale-110 transition duration-300" />
          </a>
        </div>

      </div>

      {/* ================= RIGHT ================= */}
      <div className="flex-1 text-center md:text-left">

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight 
        bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 
        bg-clip-text text-transparent">
          Priyanshi Khorwal
        </h1>

        <p className="text-blue-400 text-lg sm:text-xl mt-4">
          Java Backend Developer
        </p>

        <p className="text-gray-400 mt-6 max-w-xl mx-auto md:mx-0 
        text-sm sm:text-base leading-relaxed">
          I build scalable REST APIs and secure backend systems using
          Java, Spring Boot, and MySQL. Passionate about clean architecture,
          performance optimization, and system design.
        </p>

        {/* CTA Buttons Responsive */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">

          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-gradient-to-r 
            from-blue-600 to-purple-600 text-white text-sm sm:text-base
            hover:opacity-90 transition duration-300"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="px-6 py-3 rounded-xl border border-gray-600 
            text-sm sm:text-base
            hover:border-blue-500 hover:text-blue-400 
            transition duration-300"
          >
            Download Resume
          </a>

        </div>

      </div>
    </div>
  </section>


{/* ================= ABOUT ================= */}
<section id="about" className="max-w-6xl mx-auto px-6 py-24 border-t border-gray-800">

  <div className="text-center mb-16">
    <h2 className="text-3xl font-semibold mb-4">About Me</h2>
    <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
      I am a passionate Java Backend Developer focused on building secure,
      scalable server-side applications. I specialize in REST API development,
      authentication systems, and database-driven applications using Spring Boot and MySQL.
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-12 items-start">

    {/* LEFT SIDE - Professional Summary Card */}
    <div className="bg-gradient-to-br from-gray-900 to-gray-950 
    p-8 rounded-3xl border border-gray-800 shadow-lg">

      <h3 className="text-xl font-semibold mb-4 text-blue-400">
        Career Objective
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed">
        Currently pursuing my degree while actively building real-world backend
        projects. My goal is to become a highly skilled backend engineer capable
        of designing scalable and distributed systems with clean architecture
        and optimized performance.
      </p>

    </div>

    {/* RIGHT SIDE - Education Timeline */}
    <div className="space-y-8">

      {/* B.Tech */}
      <div className="relative pl-6 border-l border-blue-500">
        <h4 className="text-lg font-semibold">
          Bachelor of Technology
        </h4>
        <p className="text-gray-400 text-sm">
          Acropolis Institute of Technology & Research, Indore
        </p>
        <p className="text-gray-500 text-sm">
          2023 – Present | Computer Science & Engineering
        </p>
        <p className="text-blue-400 text-sm mt-1">
          CGPA: 7.61
        </p>
      </div>

      {/* Class 12 */}
      <div className="relative pl-6 border-l border-purple-500">
        <h4 className="text-lg font-semibold">
          Higher Secondary Certificate (Class XII)
        </h4>
        <p className="text-gray-400 text-sm">
          Little Star Shailesh Memorial School, Sagar
        </p>
        <p className="text-gray-500 text-sm">
          2022 – 2023 | CBSE Board
        </p>
        <p className="text-purple-400 text-sm mt-1">
          81%
        </p>
      </div>

      {/* Class 10 */}
      <div className="relative pl-6 border-l border-indigo-500">
        <h4 className="text-lg font-semibold">
          Secondary School Certificate (Class X)
        </h4>
        <p className="text-gray-400 text-sm">
          Little Star Shailesh Memorial School, Sagar
        </p>
        <p className="text-gray-500 text-sm">
          2020 – 2021 | CBSE Board
        </p>
        <p className="text-indigo-400 text-sm mt-1">
          84%
        </p>
      </div>

    </div>

  </div>
</section>

      {/* ================= SKILLS ================= */}
<section id="skills" className="max-w-6xl mx-auto px-6 py-24 border-t border-gray-800">

  <div className="text-center mb-16">
    <h2 className="text-3xl font-semibold mb-4">Skills</h2>
    <p className="text-gray-400 max-w-2xl mx-auto">
      Technologies and tools I use to build scalable and secure backend systems.
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-10">

    {/* Backend Card */}
    <div className="bg-gradient-to-br from-gray-900 to-gray-950 
    p-8 rounded-3xl border border-gray-800 
    hover:border-blue-500 transition duration-500 group">

      <h3 className="text-xl font-semibold text-blue-400 mb-6">
        Backend Development
      </h3>

      <div className="flex flex-wrap gap-3">

        {[
          "Java",
          "Spring Boot",
          "REST APIs",
          "Hibernate",
          "JWT Authentication",
          "Exception Handling",
          "Clean Architecture"
        ].map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 text-sm bg-gray-800 
            rounded-xl text-gray-300 
            hover:bg-blue-600 hover:text-white 
            transition duration-300 cursor-default"
          >
            {skill}
          </span>
        ))}

      </div>
    </div>

    {/* Database Card */}
    <div className="bg-gradient-to-br from-gray-900 to-gray-950 
    p-8 rounded-3xl border border-gray-800 
    hover:border-purple-500 transition duration-500 group">

      <h3 className="text-xl font-semibold text-purple-400 mb-6">
        Database & Tools
      </h3>

      <div className="flex flex-wrap gap-3">

        {[
          "MySQL",
          "Database Design",
          "Query Optimization",
          "Git",
          "Docker",
          "Postman"
        ].map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 text-sm bg-gray-800 
            rounded-xl text-gray-300 
            hover:bg-purple-600 hover:text-white 
            transition duration-300 cursor-default"
          >
            {skill}
          </span>
        ))}

      </div>
    </div>

  </div>

</section>
{/* ================= PROJECTS ================= */}
<section id="projects" className="max-w-6xl mx-auto px-6 py-24 border-t border-gray-800">

  <div className="text-center mb-16">
    <h2 className="text-3xl font-semibold mb-4">Featured Projects</h2>
    <p className="text-gray-400 max-w-2xl mx-auto">
      A selection of backend systems and APIs showcasing scalability,
      security, and clean architecture principles.
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-12">

    {/* ================= PROJECT CARD ================= */}
    <div className="group relative rounded-3xl overflow-hidden 
    bg-gradient-to-br from-blue-600 via-purple-500 to-indigo-600 
    p-[1px] hover:scale-[1.03] transition duration-500">

      <div className="bg-[#0b0b0f] rounded-3xl p-8 h-full">

        {/* Image Preview with Overlay */}
        <div className="relative h-48 rounded-xl overflow-hidden mb-6 border border-gray-800">
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-500"></div>
          <div className="h-full w-full bg-gradient-to-br from-gray-800 to-black 
          flex items-center justify-center text-gray-600">
            Project Preview
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-white mb-3">
          Electricity Monitoring System
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          Real-time electricity tracking backend that stores per-minute
          consumption data, generates predicted vs actual analytics,
          and secures endpoints using JWT-based authentication.
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-3 mb-6">
          {["Spring Boot", "MySQL", "JWT", "REST API"].map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs bg-gray-800 rounded-lg 
              text-blue-400 border border-gray-700 
              hover:bg-blue-600 hover:text-white transition"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <a
            href="#"
            className="px-5 py-2 rounded-lg bg-gradient-to-r 
            from-blue-600 to-purple-600 text-white text-sm 
            hover:opacity-90 transition"
          >
            GitHub
          </a>

          <a
            href="#"
            className="px-5 py-2 rounded-lg border border-gray-600 
            text-gray-300 text-sm hover:border-blue-500 
            hover:text-blue-400 transition"
          >
            Live Demo
          </a>
        </div>

      </div>
    </div>

    {/* ================= SECOND PROJECT ================= */}
    <div className="group relative rounded-3xl overflow-hidden 
    bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 
    p-[1px] hover:scale-[1.03] transition duration-500">

      <div className="bg-[#0b0b0f] rounded-3xl p-8 h-full">

        <div className="relative h-48 rounded-xl overflow-hidden mb-6 border border-gray-800">
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-500"></div>
          <div className="h-full w-full bg-gradient-to-br from-gray-800 to-black 
          flex items-center justify-center text-gray-600">
            Project Preview
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-white mb-3">
          Authentication API
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          Role-based authentication and authorization system built with
          Spring Boot & Hibernate. Implements JWT security,
          layered architecture, and centralized exception handling.
        </p>

        <div className="flex flex-wrap gap-3 mb-6">
          {["Java", "Spring Boot", "Hibernate", "MySQL"].map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs bg-gray-800 rounded-lg 
              text-emerald-400 border border-gray-700 
              hover:bg-emerald-600 hover:text-white transition"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href="#"
            className="px-5 py-2 rounded-lg bg-gradient-to-r 
            from-emerald-500 to-teal-500 text-white text-sm 
            hover:opacity-90 transition"
          >
            GitHub
          </a>

          <a
            href="#"
            className="px-5 py-2 rounded-lg border border-gray-600 
            text-gray-300 text-sm hover:border-emerald-500 
            hover:text-emerald-400 transition"
          >
            Live Demo
          </a>
        </div>

      </div>
    </div>

  </div>
</section>

{/* ================= CONTACT ================= */}
<section id="contact" className="relative max-w-4xl mx-auto px-6 py-28 border-t border-gray-800 text-center">

  {/* Background Glow */}
  <div className="absolute left-1/2 -translate-x-1/2 top-10 
  w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full -z-10"></div>

  <h2 className="text-4xl md:text-5xl font-bold mb-6 
  bg-gradient-to-r from-blue-400 to-purple-400 
  bg-clip-text text-transparent">
    Let’s Work Together
  </h2>

  <p className="text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
    I’m currently open to internships and backend development opportunities.
    If you're looking for a passionate Java backend developer who loves
    building scalable systems — let’s connect.
  </p>

  {/* CTA Buttons */}
  <div className="flex justify-center gap-6 flex-wrap">

    <a
      href="https://www.linkedin.com/in/priyanshi-khorwal-304412332/"
      className="px-8 py-3 rounded-xl 
      bg-gradient-to-r from-blue-600 to-purple-600 
      text-white text-lg hover:opacity-90 
      transition duration-300 shadow-lg shadow-blue-600/30"
    >
      Connect on LinkedIn
    </a>
  </div>

</section>


{/* ================= FOOTER ================= */}
<footer className="border-t border-gray-800 py-10">

  <div className="max-w-6xl mx-auto px-6 flex 
  flex-col md:flex-row items-center justify-between gap-6">

    <p className="text-gray-500 text-sm">
      © 2026 Priyanshi Khorwal. All rights reserved.
    </p>

    <div className="flex gap-6 text-gray-500">
      <a href="https://github.com/yourusername" target="_blank" rel="noreferrer"
         className="hover:text-white transition">
        GitHub
      </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer"
         className="hover:text-blue-400 transition">
        LinkedIn
      </a>
      <a href="mailto:priyanshi@email.com"
         className="hover:text-purple-400 transition">
        Email
      </a>
    </div>

  </div>

</footer>

    </div>
  );
}

export default App;
