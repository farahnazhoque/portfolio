// Home.jsx
import { useState, useEffect } from 'react';
import '../style/App.css';
import { Link } from 'react-router-dom';
import Modal from './Modal';

function Home() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [activeSection, setActiveSection] = useState('space-landing');
  const [flickerKey, setFlickerKey] = useState(0);
  const [currentUrl, setCurrentUrl] = useState(`www.farahnazhoqe.tech/home/${activeSection}`);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [showUniversityModal, setShowUniversityModal] = useState(false);
  const [showSOARModal, setShowSOARModal] = useState(false);
  const [showSOLOModal, setShowSOLOModal] = useState(false);
  const [showCommitChangeModal, setShowCommitChangeModal] = useState(false);
  const [showProgramModal, setShowProgramModal] = useState(false);
  const [showMLModal, setShowMLModal] = useState(false);
  const [showLAModal, setShowLAModal] = useState(false);
  const [showYouTubeModal, setShowYouTubeModal] = useState(false);

  const handleSectionClick = (newSection) => {
    setActiveSection(newSection);
    setFlickerKey((prev) => prev + 1);
    setCurrentUrl(`www.farahnazhoqe.tech/home/${newSection}`);
  };

  // Scroll the viewport to the top when any modal is opened.
  useEffect(() => {
    if (
      showUniversityModal ||
      showSOARModal ||
      showSOLOModal ||
      showCommitChangeModal ||
      showProgramModal
    ) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [showUniversityModal, showSOARModal, showSOLOModal, showCommitChangeModal, showProgramModal]);

  return (
    <div className="absolute lg:top-10 mt-20 left-1/2 -translate-x-1/2 
      w-full sm:max-w-[500px] md:max-w-[80vw] lg:max-w-[1000px]
      bg-[#c0c0c0] border-2 border-white rounded-lg shadow-xl
      overflow-hidden 
      min-h-[450px] md:min-h-[600px] lg:min-h-[650px]">
      
      <div className="w-full h-[450px] md:w-[80vw] md:h-[600px] lg:w-[1000px] lg:h-[650px] bg-[#c0c0c0] border-2 border-white rounded-lg shadow-xl relative">
        {/* Window Title Bar */}
        <div className="bg-gradient-to-r from-[#000080] to-[#4169E1] px-3 py-2 flex items-center justify-between rounded-t-lg">
          <div className="flex items-center">
            <img
              src="../../public/IEIcon.png"
              alt="IE Icon"
              className="w-5 h-5 mr-2 animate-pulse"
            />
            <span className="text-white font-PerfectDOSVGA437 text-lg">Welcome - Home</span>
          </div>
          <div className="flex gap-2">
            <button
              className="px-3 py-1 bg-[#c0c0c0] rounded-md border-2 border-t-white border-l-white border-r-black border-b-black hover:bg-gray-300 transition-colors duration-200"
              onClick={() => setIsMinimized(true)}
            >
              _
            </button>
            <button className="px-3 py-1 bg-[#c0c0c0] rounded-md border-2 border-t-white border-l-white border-r-black border-b-black hover:bg-gray-300 transition-colors duration-200">
              □
            </button>
            <Link
              to="/layout"
              className="px-3 py-1 bg-[#c0c0c0] rounded-md border-2 border-t-white border-l-white border-r-black border-b-black hover:bg-gray-300 transition-colors duration-200"
            >
              ✖
            </Link>
          </div>
        </div>

        {/* Window Menu Bar */}
        <div className="bg-[#c0c0c0] border-b-2 border-gray-400 px-4 py-2 font-PerfectDOSVGA437 text-sm">
          <a 
            href="https://www.linkedin.com/in/farahnazhoque/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mr-6 hover:text-[#000080] hover:underline cursor-pointer transition-colors duration-200"
          >
            📁 LinkedIn
          </a>
          <a 
            href="https://github.com/farahnazhoque" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mr-6 hover:text-[#000080] hover:underline cursor-pointer transition-colors duration-200"
          >
            👾 GitHub
          </a>
          <a 
            href="https://farahnazhoque.substack.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mr-6 hover:text-[#000080] hover:underline cursor-pointer transition-colors duration-200"
          >
            📝 Substack
          </a>
          <a 
            href="mailto:fhoque@uci.edu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mr-6 hover:text-[#000080] hover:underline cursor-pointer transition-colors duration-200"
          >
            💌 Email
          </a>
          <button 
            className="mr-6 hover:text-[#000080] hover:underline cursor-pointer transition-colors duration-200"
            onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
          >
            {isSidebarExpanded ? '⭐ Hide Favorites' : '⭐ Show Favorites'}
          </button>
        </div>

        {/* URL Bar */}
        <div className="bg-[#c0c0c0] border-b-2 border-gray-400 px-4 py-2 flex items-center">
          <span className="font-PerfectDOSVGA437 text-sm mr-2">Address:</span>
          <div className="flex-1 bg-white border-2 border-gray-600 px-2 py-1">
            <input 
              type="text" 
              value={currentUrl}
              onChange={(e) => setCurrentUrl(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  window.open(`https://www.google.com/search?q=${encodeURIComponent(currentUrl)}`, '_blank');
                }
              }}
              placeholder="Type and press Enter to search Google..."
              className="w-full font-PerfectDOSVGA437 text-sm outline-none"
            />
          </div>
        </div>

        {/* Window Content */}
        <div className="flex h-[calc(100%-6rem)]">
          {/* Favorites Sidebar */}
          <div className={`transition-all duration-300 ${isSidebarExpanded ? 'w-64' : 'w-12'} lg:w-64 bg-gradient-to-b from-[#c0c0c0] to-[#d3d3d3] border-r-2 border-gray-400 relative z-10`}>
            <div className={`${isSidebarExpanded ? 'opacity-100' : 'opacity-0 lg:opacity-100'} transition-opacity duration-300`}>
              <div className="p-4">
                <div className="font-PerfectDOSVGA437 text-sm mb-4 font-bold rounded-lg text-[#000080]">✨ Favorites ✨</div>
                <div className="space-y-2">
                  <div 
                    className={`flex items-center hover:bg-[#4169E1] hover:text-white cursor-pointer p-2 rounded-md transition-all duration-200 ${activeSection === 'mission' ? 'bg-[#4169E1] text-white' : ''}`}
                    onClick={() => handleSectionClick('mission')}
                  >
                  <span className="font-PerfectDOSVGA437 text-sm">🎯 Mission</span>
                  </div>
                  <div 
                    className={`flex items-center hover:bg-[#4169E1] hover:text-white cursor-pointer p-2 rounded-md transition-all duration-200 ${activeSection === 'experiences' ? 'bg-[#4169E1] text-white' : ''}`}
                    onClick={() => handleSectionClick('experiences')}
                  >
                    <span className="font-PerfectDOSVGA437 text-sm">💼 Experiences</span>
                  </div>
                  <div className="flex items-center hover:bg-[#4169E1] hover:text-white cursor-pointer p-2 rounded-md transition-all duration-200">
                    <span className="font-PerfectDOSVGA437 text-sm">🛠️ Tech Stacks</span>
                  </div>
                  <a 
                    className={`flex items-center hover:bg-[#4169E1] hover:text-white cursor-pointer p-2 rounded-md transition-all duration-200 ${activeSection === 'pinterest' ? 'bg-[#4169E1] text-white' : ''}`}
                    href="https://pin.it/427HWOdjJ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="font-PerfectDOSVGA437 text-sm">📌 Pinterest</span>
                  </a>
                  <div 
                    className={`flex items-center hover:bg-[#4169E1] hover:text-white cursor-pointer p-2 rounded-md transition-all duration-200 ${activeSection === 'youtube' ? 'bg-[#4169E1] text-white' : ''}`}
                    onClick={() =>  handleSectionClick('youtube')}
                  >
                    <span className="font-PerfectDOSVGA437 text-sm">🎥 YouTube</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white flex-1 ie-load overflow-y-auto custom-scrollbar pb-8 relative">
            {activeSection === 'space-landing' && (
              <div className="p-8 w-[734px] h-[499px]" style={{
                backgroundImage: 'url(../../public/LoadingHome.gif)', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat'
              }}>
                <h1 key={flickerKey} className="text-3xl"></h1>
              </div>
            )}

            <div className="bg-white">
            {activeSection === 'mission' && (
              <div 
                className="relative min-h-screen bg-[#f8f5ef] p-6 md:p-10 text-[#3d3d3d]" 
                style={{
                  //If you have a paper/grain texture image, uncomment and adjust:
                  backgroundImage: 'url("../../public/Mission.jpeg")',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'repeat',
                }}
              >
                {/* Top "Window" Bar */}
                <div className="border-b border-white flex items-center justify-between px-2 py-1 mb-4">
                  <span className="text-sm text-white font-PerfectDOSVGA437">The Mission</span>
                  {/* You can place a small icon or close/minimize buttons on the right if you like */}
                </div>

                {/* Main content container (like a "window") */}
                <div className="border border-black p-4 md:p-8 bg-white/80 shadow-md">
                  {/* Large image at the top, reminiscent of Poolsuite's hero */}
                  <div className="overflow-hidden border-b border-black pb-4 mb-4">
                    <img 
                      src="../../public/Mission.png" 
                      alt="Courtyard" 
                      className="w-full h-auto object-cover"
                    />
                  </div>      

                  {/* Main Text / Image Section */}
                  <div className="mb-8 flex flex-col md:flex-row">
                    <a 
                      href="https://www.linkedin.com/in/farahnazhoque/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="md:mr-6 mb-4 md:mb-0"
                    >
                      <img 
                        src="../../public/Farahnaz.webp" 
                        alt="Farahnaz Hoque"
                        className="w-64 h-auto rounded-2xl shadow-xl border-4 border-[#c0c0c0] hover:scale-105 transition-transform duration-200 cursor-pointer"
                      />
                    </a>
                    <div>
                      <p className="font-kodchasan text-gray-700 text-base md:text-lg mb-4">
                        I am a <span className="font-bold italic text-indigo-900">Computer Science</span> major specializing in <span className="font-bold italic text-indigo-900">Intelligent Systems</span> with a minor in <span className="font-bold italic text-indigo-900">Health Informatics</span>. I have a deep interest in <span className="font-bold italic text-indigo-900">AI-driven solutions for healthcare, safety, and community impact.</span> My mission is to leverage artificial intelligence, cloud computing, and data-driven insights to build scalable, innovative solutions that address real-world challenges.
                      </p>
                      <p className="font-kodchasan text-gray-700 text-base md:text-lg">
                        With a background in full-stack development, AI applications, and software engineering, <span className="font-bold italic text-indigo-900">I aim to bridge the gap between cutting-edge technology and practical implementation in industries such as:</span>
                      </p>
                    </div>
                  </div>

                  {/* Key Focus Areas */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <h2 className="font-PerfectDOSVGA437 font-bold text-lg text-indigo-900 col-span-full mb-2">Key Focus Areas:</h2>
                    
                    {/* Healthcare Card */}
                    <div className="group [perspective:1000px] h-32">
                      <div className="relative transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] h-full">
                        {/* Front */}
                        <div className="p-4 flex items-center justify-center bg-blue-100 border-2 border-black rounded-lg absolute backface-hidden w-full h-full">
                          <h3 className="items-center text-center font-PerfectDOSVGA437 font-bold italic text-indigo-900">Healthcare Technology Innovation</h3>
                        </div>
                        {/* Back */}
                        <div className="p-4 flex items-center justify-center bg-green-100 border-2 border-black rounded-lg absolute backface-hidden w-full h-full [transform:rotateY(180deg)]">
                          <p className="text-center items-center font-PerfectDOSVGA437 text-gray-700">Developing AI-driven solutions for medical applications</p>
                        </div>
                      </div>
                    </div>

                    {/* Intelligent Systems Card */}
                    <div className="group [perspective:1000px] h-32">
                      <div className="relative transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] h-full">
                      <div className="p-4 flex items-center justify-center bg-blue-100 border-2 border-black rounded-lg absolute backface-hidden w-full h-full">
                      <h3 className="text-center items-center justify-center font-PerfectDOSVGA437 font-bold italic text-indigo-900">Intelligent Systems & Automation</h3>
                        </div>
                        <div className="p-4 flex items-center justify-center bg-green-100 border-2 border-black rounded-lg absolute backface-hidden w-full h-full [transform:rotateY(180deg)]">
                          <p className="text-center items-center font-PerfectDOSVGA437 text-gray-700">Building smart systems that adapt and learn</p>
                        </div>
                      </div>
                    </div>

                    {/* Product Design Card */}
                    <div className="group [perspective:1000px] h-32">
                      <div className="relative transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] h-full">
                        <div className="p-4 flex items-center justify-center bg-blue-100 border-2 border-black rounded-lg absolute backface-hidden w-full h-full">
                          <h3 className="text-center items-center justify-center font-PerfectDOSVGA437 font-bold italic text-indigo-900">Product Design & Development</h3>
                        </div>
                        <div className="p-4 flex items-center justify-center bg-green-100 border-2 border-black rounded-lg absolute backface-hidden w-full h-full [transform:rotateY(180deg)]">
                          <p className="text-center items-center font-PerfectDOSVGA437 text-gray-700">Creating intuitive and impactful user experiences</p>
                        </div>
                      </div>
                    </div>

                    {/* Cloud Solutions Card */}
                    <div className="group [perspective:1000px] h-32">
                      <div className="relative transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] h-full">
                      <div className="p-4 flex items-center justify-center bg-blue-100 border-2 border-black rounded-lg absolute backface-hidden w-full h-full">
                      <h3 className="text-center items-center justify-center font-PerfectDOSVGA437 font-bold italic text-indigo-900">Scalable Cloud Solutions</h3>
                        </div>
                        <div className="p-4 flex items-center justify-center bg-green-100 border-2 border-black rounded-lg absolute backface-hidden w-full h-full [transform:rotateY(180deg)]">
                          <p className="text-center items-center font-PerfectDOSVGA437 text-gray-700">Architecting robust distributed systems</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Final paragraph */}
                  <p className="font-kodchasan text-gray-700 text-base md:text-lg">
                    Since my days in High School, I have always been passionate about communities and solving large scale problems that affect the lives of many, resulting in me co-founding <span className="font-bold italic text-indigo-900">Iccheghuri</span>, a non-profit organization in Bangladesh.
                  </p>
                </div>

                
              </div>
            )}

              {activeSection === "experiences" && (
                <div className="p-8" style={{
                  backgroundImage: 'url(../../public/Experience.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'repeat'
                }}>
                  <div className="flex justify-center items-center mb-4" >
                    <img src="../../public/Experiences.gif" alt="saturn" className="justify-center items-center mx-auto"/>
                  </div>
                  <div className="border-4 border-dotted border-black p-6 space-y-4 bg-white/30 rounded-lg">
                    {[
                      {
                        title: "JOE C. WEN SCHOOL OF POPULATION AND PUBLIC HEALTH",
                        role: "DATA SCIENCE RESEARCH ASSISTANT",
                        image: "../../public/jcwen.jpeg",
                        period: "JANUARY 2025 - PRESENT",
                        onClick: () => setShowUniversityModal(true),
                        href: "https://www.jocwen.uci.edu/",
                        badges: ["CLOUD COMPUTING", "AI SYSTEMS"],
                        description: "Website Crawling, Data Collection, Data Analysis & Visualization"
                      },
                      {
                        title: "STUDENT OUTREACH AND RETENTION CENTER",
                        role: "WEBSITE AND COMMUNICATIONS COORDINATOR",
                        image: "../../public/soar.jpeg", 
                        href: "https://www.soar.uci.edu/",
                        period: "AUGUST 2024 - PRESENT",
                        onClick: () => setShowSOARModal(true),
                        badges: ["WEB DEVELOPMENT", "WEB DESIGN", "ACCESSIBILITY"],
                        description: "Website Design, Newsletter Creation, Engagement Campaigns"
                      },
                      {
                        title: "SOLO",
                        role: "LEAD SOFTWARE ENGINEER INTERN",
                        image: "../../public/SOLOLogo.png",
                        href: "https://www.linkedin.com/in/jenelle-king/",
                        period: "MARCH 2024 - SEPTEMBER 2024",
                        onClick: () => setShowSOLOModal(true),
                        badges: ["MYSQL", "NODEJS", "AWS"],
                        description: "Full Stack Development, App Design & Deployment"
                      },
                      {
                        title: "STAND UP TO TRASH",
                        role: "FULL STACK DEVELOPER",
                        image: "../../public/standup.avif",
                        href: "https://www.standuptotrash.com/",
                        period: "MARCH 2024 - SEPTEMBER 2024",
                        onClick: () => setShowCommitChangeModal(true),
                        badges: ["REACT", "POSTGRESQL", "AWS"],
                        description: "Volunteer Management System Development"
                      },
                      {
                        title: "STUDENT OUTREACH AND RETENTION CENTER",
                        role: "PROGRAM CO-DIRECTOR",
                        image: "../../public/soar.jpeg",
                        href: "https://www.soar.uci.edu/",
                        period: "AUGUST 2022 - JUNE 2024",
                        onClick: () => setShowProgramModal(true),
                        badges: ["LEADERSHIP", "EVENT PLANNING", "ADVOCACY"],
                        description: "Community Programs & Volunteer Management"
                      },
                      {
                        title: "DONALD BREN SCHOOL OF ICS",
                        role: "MACHINE LEARNING RESEARCH ASSISTANT",
                        image: "../../public/dbh.jpeg",
                        href: "https://www.ics.uci.edu/",
                        period: "JANUARY 2023 - MARCH 2024",
                        onClick: () => setShowMLModal(true),
                        badges: ["PYTORCH", "TENSORFLOW", "ROS2"],
                        description: "ML Research & Robotics Development"
                      },
                      {
                        title: "DONALD BREN SCHOOL OF ICS",
                        role: "LEARNING ASSISTANT",
                        image: "../../public/dbh.jpeg",
                        period: "JANUARY 2023 - MARCH 2024",
                        onClick: () => setShowLAModal(true),
                        badges: ["DISCRETE MATHEMATICS", "COURSE PLANNING", "TUTORING"],
                        description: "Learning Assistant & Tutoring"
                      }
                    ].map((exp, index) => (
                      <div key={index}
                        className="bg-purple-50 border-2 border-black p-4 rounded hover:bg-purple-100 transition-all cursor-pointer"
                        onClick={exp.onClick}
                      >
                        <div className="flex items-start gap-4">
                          <img href={exp.href} src={exp.image} alt={exp.title} className="w-16 h-16 rounded-full border-2 border-black"/>
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-PerfectDOSVGA437 text-xl font-bold text-s">{exp.title}</h3>
                                <p className="font-PerfectDOSVGA437 text-sm text-gray-600">{exp.role}</p>
                                <p className="font-PerfectDOSVGA437 text-xs text-gray-500 mt-1">{exp.period}</p>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-3">
                              {exp.badges.map((badge, i) => (
                                <span key={i} className="px-3 py-3 bg-blue-100 text-xs font-PerfectDOSVGA437 text-blue-600 rounded">
                                  {badge}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Keep all the modals as they were */}
                  {showUniversityModal && (
                    <Modal onClose={() => setShowUniversityModal(false)} useFixed={true}>
                      <div className="bg-gradient-to-r from-purple-100 to-purple-50 p-6 rounded-sm border-4 border-purple-200">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-PerfectDOSVGA437  text-gray-600">
                            [THREAD] JOE C. WEN SCHOOL OF POPULATION AND PUBLIC HEALTH
                          </h2>
                          <button onClick={() => setShowUniversityModal(false)} className="text-pink-500 hover:text-pink-600 text-xl">
                            [X]
                          </button>
                        </div>
                        <div className="space-y-4 font-PerfectDOSVGA437">
                          <div className="bg-white/50 p-4 rounded border border-black">
                            <p className="text-purple-800 font-bold text-lg">ROLE: Data Science Research Assistant</p>
                            <p className="text-gray-600 mt-2">PERIOD: JANUARY 2023 - PRESENT</p>
                              <p className="text-gray-600 mt-2">RESPONSIBILITIES:</p>
                              <ul className="list-disc pl-5 text-gray-600 font-['Kodchasan']">
                                <li>Website Crawling</li>
                                <li>Data Collection</li>
                                <li>Data Analysis & Visualization</li>
                              </ul>
                          </div>
                        </div>
                      </div>
                    </Modal>
                  )}

                  {/* SOAR Modal */}
                  {showSOARModal && (
                    <Modal onClose={() => setShowSOARModal(false)} useFixed={true}>
                      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg border-4 border-blue-200">
                        <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-PerfectDOSVGA437  text-gray-600">
                        [THREAD] STUDENT OUTREACH AND RETENTION CENTER
                          </h2>
                          <button onClick={() => setShowSOARModal(false)} className="text-pink-500 hover:text-pink-600 text-xl">
                            [X]
                          </button>
                        </div>
                        <div className="space-y-4 font-PerfectDOSVGA437">
                          <div className="bg-white/50 p-4 rounded border border-black">
                          <p className="text-purple-800 font-bold text-lg">SUBJECT: Website and Communications Coordinator Role</p>
                            <p className="text-gray-600 mt-2">PERIOD: AUGUST 2024 - PRESENT</p>
                            <p className="text-gray-600 mt-2">STATUS: ACTIVE</p>
                            <div className="mt-2 space-y-2">
                              <p className="text-gray-600">RESPONSIBILITIES:</p>
                              <ul className="list-disc pl-5 text-gray-600 font-['Kodchasan']">
                                <li>Website Design & Development</li>
                                <li>Newsletter Design & Writing</li>
                                <li>Engagement Campaigns</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Modal>
                  )}

                  {/* SOLO Modal */}
                  {showSOLOModal && (
                    <Modal onClose={() => setShowSOARModal(false)} useFixed={true}>
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg border-4 border-blue-200">
                      <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-PerfectDOSVGA437  text-gray-600">
                      [THREAD] SOLO
                        </h2>
                        <button onClick={() => setShowSOLOModal(false)} className="text-pink-500 hover:text-pink-600 text-xl">
                          [X]
                        </button>
                      </div>
                      <div className="space-y-4 font-PerfectDOSVGA437">
                        <div className="bg-white/50 p-4 rounded border border-black">
                        <p className="text-purple-800 font-bold text-lg">ROLE: LEAD SOFTWARE ENGINEER INTERN</p>
                          <p className="text-gray-600 mt-2">PERIOD: MARCH 2024 - SEPTEMBER 2024</p>
                          <p className="text-gray-600 mt-2">STATUS: INACTIVE</p>
                          <div className="mt-2 space-y-2">
                            <p className="text-gray-600">RESPONSIBILITIES:</p>
                            <ul className="list-disc pl-5 text-gray-600 font-['Kodchasan']">
                              <li>Application Design & Development</li>
                              <li>Database Creation & Management</li>
                              <li>AWS Cloud Services Integration</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Modal>
                  )}

                  {/* Commit Change Modal */}
                  {showCommitChangeModal && (
                  <Modal onClose={() => setShowCommitChangeModal(false)} useFixed={true}>
                      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg border-4 border-blue-200">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-PerfectDOSVGA437  text-gray-600">
                            [THREAD] STAND UP TO TRASH
                          </h2>
                          <button onClick={() => setShowCommitChangeModal(false)} className="text-pink-500 hover:text-pink-600 text-xl">
                            [X]
                          </button>
                        </div>
                        <div className="space-y-4 font-PerfectDOSVGA437">
                          <div className="bg-white/50 p-4 rounded border border-black">
                          <p className="text-purple-800 font-bold text-lg">ROLE: FULL STACK DEVELOPER</p>
                            <p className="text-gray-600 mt-2">PERIOD: OCTOBER 2023 - JUNE 2024</p>
                            <p className="text-gray-600 mt-2">STATUS: INACTIVE</p>
                            <div className="mt-2 space-y-2">
                              <p className="text-gray-600">RESPONSIBILITIES:</p>
                              <ul className="list-disc pl-5 text-gray-600 font-['Kodchasan']">
                                <li>Volunteer Management System</li>
                                <li>Data Analytics Dashboard</li>
                                <li>Cloud Infrastructure Setup</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Modal>
                  )}

                  {/* Program Modal */}
                  {showProgramModal && (
                    <Modal onClose={() => setShowProgramModal(false)} useFixed={true}>
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg border-4 border-blue-200">
                      <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-PerfectDOSVGA437  text-gray-600">
                          [THREAD] STUDENT OUTREACH AND RETENTION CENTER
                        </h2>
                        <button onClick={() => setShowProgramModal(false)} className="text-pink-500 hover:text-pink-600 text-xl">
                          [X]
                        </button>
                      </div>
                      <div className="space-y-4 font-PerfectDOSVGA437">
                        <div className="bg-white/50 p-4 rounded border border-black">
                        <p className="text-purple-800 font-bold text-lg">ROLE: PROGRAM CO-DIRECTOR</p>
                          <p className="text-gray-600 mt-2">PERIOD: AUGUST 2022 - JUNE 2024</p>
                          <p className="text-gray-600 mt-2">STATUS: INACTIVE</p>
                          <div className="mt-2 space-y-2">
                            <p className="text-gray-600">RESPONSIBILITIES:</p>
                            <ul className="list-disc pl-5 text-gray-600 font-['Kodchasan']">
                              <li>Budget Allocation and Management</li>
                              <li>Internship Management</li>
                              <li>Event Creation and Management</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Modal>
                  )}

                  {/* ML Modal */}
                  {showMLModal && (
                    <Modal onClose={() => setShowMLModal(false)} useFixed={true}>
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg border-4 border-blue-200">
                      <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-PerfectDOSVGA437  text-gray-600">
                          [THREAD] DONALD BREN SCHOOL OF ICS
                        </h2>
                        <button onClick={() => setShowMLModal(false)} className="text-pink-500 hover:text-pink-600 text-xl">
                          [X]
                        </button>
                      </div>
                      <div className="space-y-4 font-PerfectDOSVGA437">
                        <div className="bg-white/50 p-4 rounded border border-black">
                        <p className="text-purple-800 font-bold text-lg">ROLE: MACHINE LEARNING RESEARCH ASSISTANT</p>
                          <p className="text-gray-600 mt-2">PERIOD: JANUARY 2023 - MARCH 2024</p>
                          <p className="text-gray-600 mt-2">STATUS: INACTIVE</p>
                          <div className="mt-2 space-y-2">
                            <p className="text-gray-600">RESPONSIBILITIES:</p>
                            <ul className="list-disc pl-5 text-gray-600 font-['Kodchasan']">
                              <li>Research on Internet of Things</li>
                              <li>Rover Development using ROS2</li>
                              <li>Data Collection and Visualization using TensorFlow</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Modal>
                  )}

                  {/* LA Modal */}
                  {showLAModal && (
                    <Modal onClose={() => setShowLAModal(false)} useFixed={true}>
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg border-4 border-blue-200">
                      <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-PerfectDOSVGA437  text-gray-600">
                          [THREAD] DONALD BREN SCHOOL OF ICS
                        </h2>
                        <button onClick={() => setShowLAModal(false)} className="text-pink-500 hover:text-pink-600 text-xl">
                          [X]
                        </button>
                      </div>
                      <div className="space-y-4 font-PerfectDOSVGA437">
                        <div className="bg-white/50 p-4 rounded border border-black">
                        <p className="text-purple-800 font-bold text-lg">ROLE: LEARNING ASSISTANT</p>
                          <p className="text-gray-600 mt-2">PERIOD: SEPTEMBER 2022 - DECEMBER 2022</p>
                          <p className="text-gray-600 mt-2">STATUS: INACTIVE</p>
                          <div className="mt-2 space-y-2">
                            <p className="text-gray-600">RESPONSIBILITIES:</p>
                            <ul className="list-disc pl-5 text-gray-600 font-['Kodchasan']">
                              <li>Student Support & Tutoring</li>
                              <li>Course Material Development and Preparation</li>
                              <li>Office Hours Management</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Modal>
                  )}

                </div>
              )}
              {activeSection === 'youtube' && (
                <div className="p-6" style={{backgroundImage: "url('../../public/Youtube.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6 bg-red-700 p-3 rounded-lg">
                    <div className="flex items-center">
                      <img src="../../public/YoutubeLogo.png" alt="Retro YouTube" className="w-12 h-12 mr-2" />
                      <h1 className="text-white font-PerfectDOSVGA437 text-xl">Farahnaz's Current Favorite Videos</h1>
                    </div>
                  </div>

                  {/* Embedded YouTube */}
                  <div className="w-full aspect-[16/9] bg-black">
                    <iframe
                      width="100%"
                      height="100%" 
                      src="https://www.youtube.com/watch?v=zAQYtolfB4g&list=PL32z1p066aKhld-hXx6-T279zvA9sw1sD&pp=gAQB"
                      title="YouTube Channel"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>

                  

                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
