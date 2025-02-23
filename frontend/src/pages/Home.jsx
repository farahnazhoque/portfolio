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
            <span className="text-white font-mono text-lg">Welcome - Home</span>
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
        <div className="bg-[#c0c0c0] border-b-2 border-gray-400 px-4 py-2 font-mono text-sm">
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
          <span className="font-mono text-sm mr-2">Address:</span>
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
              className="w-full font-mono text-sm outline-none"
            />
          </div>
        </div>

        {/* Window Content */}
        <div className="flex h-[calc(100%-6rem)]">
          {/* Favorites Sidebar */}
          <div className={`transition-all duration-300 ${isSidebarExpanded ? 'w-64' : 'w-12'} lg:w-64 bg-gradient-to-b from-[#c0c0c0] to-[#d3d3d3] border-r-2 border-gray-400 relative z-10`}>
            <div className={`${isSidebarExpanded ? 'opacity-100' : 'opacity-0 lg:opacity-100'} transition-opacity duration-300`}>
              <div className="p-4">
                <div className="font-mono text-sm mb-4 font-bold rounded-lg text-[#000080]">✨ Favorites ✨</div>
                <div className="space-y-2">
                  <div 
                    className={`flex items-center hover:bg-[#4169E1] hover:text-white cursor-pointer p-2 rounded-md transition-all duration-200 ${activeSection === 'mission' ? 'bg-[#4169E1] text-white' : ''}`}
                    onClick={() => handleSectionClick('mission')}
                  >
                    <span className="font-mono text-sm">🎯 Mission</span>
                  </div>
                  <div 
                    className={`flex items-center hover:bg-[#4169E1] hover:text-white cursor-pointer p-2 rounded-md transition-all duration-200 ${activeSection === 'experiences' ? 'bg-[#4169E1] text-white' : ''}`}
                    onClick={() => handleSectionClick('experiences')}
                  >
                    <span className="font-mono text-sm">💼 Experiences</span>
                  </div>
                  <div className="flex items-center hover:bg-[#4169E1] hover:text-white cursor-pointer p-2 rounded-md transition-all duration-200">
                    <span className="font-mono text-sm">🛠️ Tech Stacks</span>
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
                  // If you have a paper/grain texture image, uncomment and adjust:
                  // backgroundImage: 'url("../../public/paper-texture.png")',
                  // backgroundSize: 'cover',
                  // backgroundRepeat: 'repeat',
                }}
              >
                {/* Top "Window" Bar */}
                <div className="border-b border-black flex items-center justify-between px-2 py-1 mb-4">
                  <span className="text-sm font-serif">The Mission</span>
                  {/* You can place a small icon or close/minimize buttons on the right if you like */}
                </div>

                {/* Main content container (like a “window”) */}
                <div className="border border-black p-4 md:p-8 bg-white/80 shadow-md">
                  {/* Large image at the top, reminiscent of Poolsuite’s hero */}
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
                      <p className="font-mono text-gray-700 text-base md:text-lg mb-4">
                        I am a <span className="font-bold italic text-indigo-900">Computer Science</span> major specializing in <span className="font-bold italic text-indigo-900">Intelligent Systems</span> with a minor in <span className="font-bold italic text-indigo-900">Health Informatics</span>. I have a deep interest in <span className="font-bold italic text-indigo-900">AI-driven solutions for healthcare, safety, and community impact.</span> My mission is to leverage artificial intelligence, cloud computing, and data-driven insights to build scalable, innovative solutions that address real-world challenges.
                      </p>
                      <p className="font-mono text-gray-700 text-base md:text-lg">
                        With a background in full-stack development, AI applications, and software engineering, <span className="font-bold italic text-indigo-900">I aim to bridge the gap between cutting-edge technology and practical implementation in industries such as:</span>
                      </p>
                    </div>
                  </div>

                  {/* Key Focus Areas */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <h2 className="font-mono font-bold text-lg text-indigo-900 col-span-full mb-2">Key Focus Areas:</h2>
                    
                    {/* Healthcare Card */}
                    <div className="group [perspective:1000px] h-32">
                      <div className="relative transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] h-full">
                        {/* Front */}
                        <div className="p-4 flex items-center justify-center bg-orange-100 border-2 border-black rounded-lg absolute backface-hidden w-full h-full">
                          <h3 className="items-center text-center font-mono font-bold italic text-indigo-900">Healthcare Technology Innovation</h3>
                        </div>
                        {/* Back */}
                        <div className="p-4 flex items-center justify-center bg-indigo-100 border-2 border-black rounded-lg absolute backface-hidden w-full h-full [transform:rotateY(180deg)]">
                          <p className="text-center items-center font-mono text-gray-700">Developing AI-driven solutions for medical applications</p>
                        </div>
                      </div>
                    </div>

                    {/* Intelligent Systems Card */}
                    <div className="group [perspective:1000px] h-32">
                      <div className="relative transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] h-full">
                      <div className="p-4 flex items-center justify-center bg-orange-100 border-2 border-black rounded-lg absolute backface-hidden w-full h-full">
                      <h3 className="text-center items-center justify-center font-mono font-bold italic text-indigo-900">Intelligent Systems & Automation</h3>
                        </div>
                        <div className="p-4 flex items-center justify-center bg-indigo-100 border-2 border-black rounded-lg absolute backface-hidden w-full h-full [transform:rotateY(180deg)]">
                          <p className="text-center items-center font-mono text-gray-700">Building smart systems that adapt and learn</p>
                        </div>
                      </div>
                    </div>

                    {/* Product Design Card */}
                    <div className="group [perspective:1000px] h-32">
                      <div className="relative transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] h-full">
                        <div className="p-4 flex items-center justify-center bg-orange-100 border-2 border-black rounded-lg absolute backface-hidden w-full h-full">
                          <h3 className="text-center items-center justify-center font-mono font-bold italic text-indigo-900">Product Design & Development</h3>
                        </div>
                        <div className="p-4 flex items-center justify-center bg-indigo-100 border-2 border-black rounded-lg absolute backface-hidden w-full h-full [transform:rotateY(180deg)]">
                          <p className="text-center items-center font-mono text-gray-700">Creating intuitive and impactful user experiences</p>
                        </div>
                      </div>
                    </div>

                    {/* Cloud Solutions Card */}
                    <div className="group [perspective:1000px] h-32">
                      <div className="relative transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] h-full">
                      <div className="p-4 flex items-center justify-center bg-orange-100 border-2 border-black rounded-lg absolute backface-hidden w-full h-full">
                      <h3 className="text-center items-center justify-center font-mono font-bold italic text-indigo-900">Scalable Cloud Solutions</h3>
                        </div>
                        <div className="p-4 flex items-center justify-center bg-indigo-100 border-2 border-black rounded-lg absolute backface-hidden w-full h-full [transform:rotateY(180deg)]">
                          <p className="text-center items-center font-mono text-gray-700">Architecting robust distributed systems</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Final paragraph */}
                  <p className="font-mono text-gray-700 text-base md:text-lg">
                    Since my days in High School, I have always been passionate about communities and solving large scale problems that affect the lives of many, resulting in me co-founding <span className="font-bold italic text-indigo-900">Iccheghuri</span>, a non-profit organization in Bangladesh.
                  </p>
                </div>

                
              </div>
            )}

              {activeSection === "experiences" && (
                <div className="p-8" style={{
                  backgroundImage: 'url(../../public/Experience.jpeg)', 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center', 
                  backgroundRepeat: 'no-repeat'
                }}>
                  <div className="bg-black border-2 border-purple-400 p-2 max-w-2xl w-full mx-2 rounded-sm shadow-[0_0_30px_rgba(255,0,255,0.3)] mb-10">
                    <div className="flex justify-center items-center">
                      <h2 className="text-2xl font-mono font-bold text-center text-purple-400 animate-pulse">PERSONAL DATABASE OF EXPERIENCES</h2>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* University ID Card */}
                    <div className="border-2 border-pink-400 bg-black/80 p-4 rounded-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img src="../../public/jcwen.jpeg" alt="Joe C. Wen School" className="w-12 h-12 mr-3" />
                          <div className="text-left">
                            <h2 className="text-xl font-mono font-bold text-pink-400">JOE C. WEN SCHOOL OF POPULATION AND PUBLIC HEALTH</h2>
                            <p className="font-mono text-sm text-pink-200">DATA SCIENCE RESEARCH ASSISTANT</p>
                          </div>
                        </div>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowUniversityModal(true);
                          }}
                          className="text-pink-400 text-2xl hover:text-pink-300 hover:shadow-[0_0_15px_rgba(255,0,255,0.5)] transition-all duration-300 cursor-pointer border-2 border-pink-400 px-3 py-1 rounded-sm hover:bg-pink-400/10"
                        >
                          →
                        </button>
                      </div>
                    </div>

                    {/* SOAR ID Card */}
                    <div
                      onClick={() => setShowSOARModal(true)} 
                      className="border-2 border-pink-400 bg-black/80 p-4 rounded-sm hover:border-pink-300 hover:shadow-[0_0_15px_rgba(255,0,255,0.5)] transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img src="../../public/soar.jpeg" alt="SOAR" className="w-12 h-12 mr-3" />
                          <div className="text-left">
                            <h2 className="text-xl font-mono font-bold text-pink-400">STUDENT OUTREACH AND RETENTION CENTER</h2>
                            <p className="font-mono text-sm text-pink-200">WEBSITE AND COMMUNICATIONS COORDINATOR</p>
                          </div>
                        </div>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowSOARModal(true);
                          }}
                          className="text-pink-400 text-2xl hover:text-pink-300 hover:shadow-[0_0_15px_rgba(255,0,255,0.5)] transition-all duration-300 cursor-pointer border-2 border-pink-400 px-3 py-1 rounded-sm hover:bg-pink-400/10"
                        >
                          →
                        </button>
                      </div>
                    </div>

                    {/* SOLO ID Card */}
                    <div
                      onClick={() => setShowSOLOModal(true)} 
                      className="border-2 border-pink-400 bg-black/80 p-4 rounded-sm hover:border-pink-300 hover:shadow-[0_0_15px_rgba(255,0,255,0.5)] transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img src="../../public/SOLOLogo.png" alt="SOLO" className="w-12 h-12 mr-3" />
                          <div className="text-left">
                            <h2 className="text-xl font-mono font-bold text-pink-400">SOLO</h2>
                            <p className="font-mono text-sm text-pink-200">LEAD SOFTWARE ENGINEER INTERN</p>
                          </div>
                        </div>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowSOLOModal(true);
                          }}
                          className="text-pink-400 text-2xl hover:text-pink-300 hover:shadow-[0_0_15px_rgba(255,0,255,0.5)] transition-all duration-300 cursor-pointer border-2 border-pink-400 px-3 py-1 rounded-sm hover:bg-pink-400/10 ml-10"
                        >
                          →
                        </button>
                      </div>
                    </div>

                    {/* Commit the Change ID Card */}
                    <div
                      onClick={() => setShowCommitChangeModal(true)} 
                      className="border-2 border-pink-400 bg-black/80 p-4 rounded-sm hover:border-pink-300 hover:shadow-[0_0_15px_rgba(255,0,255,0.5)] transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img src="../../public/standup.avif" alt="Stand Up to Trash" className="w-12 h-12 mr-3" />
                          <div className="text-left">
                            <h2 className="text-xl font-mono font-bold text-pink-400">STAND UP TO TRASH</h2>
                            <p className="font-mono text-sm text-pink-200">FULL STACK DEVELOPER</p>
                          </div>
                        </div>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowCommitChangeModal(true);
                          }}
                          className="text-pink-400 text-2xl hover:text-pink-300 hover:shadow-[0_0_15px_rgba(255,0,255,0.5)] transition-all duration-300 cursor-pointer border-2 border-pink-400 px-3 py-1 rounded-sm hover:bg-pink-400/10 ml-10"
                        >
                          →
                        </button>
                      </div>
                    </div>

                    {/* Program ID Card */}
                    <div
                      onClick={() => setShowProgramModal(true)} 
                      className="border-2 border-pink-400 bg-black/80 p-4 rounded-sm hover:border-pink-300 hover:shadow-[0_0_15px_rgba(255,0,255,0.5)] transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img src="../../public/soar.jpeg" alt="SOAR" className="w-12 h-12 mr-3" />
                          <div className="text-left">
                            <h2 className="text-xl font-mono font-bold text-pink-400">STUDENT OUTREACH AND RETENTION CENTER</h2>
                            <p className="font-mono text-sm text-pink-200">PROGRAM CO-DIRECTOR</p>
                          </div>
                        </div>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowProgramModal(true);
                          }}
                          className="text-pink-400 text-2xl hover:text-pink-300 hover:shadow-[0_0_15px_rgba(255,0,255,0.5)] transition-all duration-300 cursor-pointer border-2 border-pink-400 px-3 py-1 rounded-sm hover:bg-pink-400/10"
                        >
                          →
                        </button>
                      </div>
                    </div>

                    {/* ML ID Card */}
                    <div
                      onClick={() => setShowMLModal(true)} 
                      className="border-2 border-pink-400 bg-black/80 p-4 rounded-sm hover:border-pink-300 hover:shadow-[0_0_15px_rgba(255,0,255,0.5)] transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img src="../../public/soar.jpeg" alt="SOAR" className="w-12 h-12 mr-3" />
                          <div className="text-left">
                            <h2 className="text-xl font-mono font-bold text-pink-400">DONALD BREN SCHOOL OF INFORMATION AND COMPUTER SCIENCES</h2>
                            <p className="font-mono text-sm text-pink-200">MACHINE LEARNING RESEARCH ASSISTANT</p>
                          </div>
                        </div>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowMLModal(true);
                          }}
                          className="text-pink-400 text-2xl hover:text-pink-300 hover:shadow-[0_0_15px_rgba(255,0,255,0.5)] transition-all duration-300 cursor-pointer border-2 border-pink-400 px-3 py-1 rounded-sm hover:bg-pink-400/10"
                        >
                          →
                        </button>
                      </div>
                    </div>

                    {/* LA ID Card */}
                    <div
                      onClick={() => setShowLAModal(true)} 
                      className="border-2 border-pink-400 bg-black/80 p-4 rounded-sm hover:border-pink-300 hover:shadow-[0_0_15px_rgba(255,0,255,0.5)] transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img src="../../public/soar.jpeg" alt="SOAR" className="w-12 h-12 mr-3" />
                          <div className="text-left">
                            <h2 className="text-xl font-mono font-bold text-pink-400">DONALD BREN SCHOOL OF INFORMATION AND COMPUTER SCIENCES</h2>
                            <p className="font-mono text-sm text-pink-200">DISCRETE MATHEMATICS LEARNING ASSISTANT</p>
                          </div>
                        </div>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowLAModal(true);
                          }}
                          className="text-pink-400 text-2xl hover:text-pink-300 hover:shadow-[0_0_15px_rgba(255,0,255,0.5)] transition-all duration-300 cursor-pointer border-2 border-pink-400 px-3 py-1 rounded-sm hover:bg-pink-400/10"
                        >
                          →
                        </button>
                      </div>
                    </div>

                    
                  </div>

                  {/* University Modal */}
                  {showUniversityModal && (
                    <Modal onClose={() => setShowUniversityModal(false)} useFixed={true}>
                      <div className="flex justify-between items-center mb-4">
                        <a 
                          href="https://drwulab.net/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-2xl font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          PERSONNEL FILE: JOE C. WEN SCHOOL OF POPULATION AND PUBLIC HEALTHS
                        </a>
                        <button onClick={() => setShowUniversityModal(false)} className="text-cyan-400 hover:text-cyan-300">
                          ✕
                        </button>
                      </div>
                      <div className="font-mono text-cyan-200 space-y-4">
                        <p>ROLE: Data Science Research Assistant</p>
                        <p>DIVISION: HIGHER EDUCATION</p>
                        <p>WORK: Website Crawling, Data Collection, Data Analysis & Visualization</p>
                        <p>PERIOD: JANUARY 2025 - PRESENT</p>
                        <div className="border-t border-cyan-400/30 pt-4">
                          <h3 className="text-cyan-400 mb-2">CLEARANCE BADGES:</h3>
                          <div className="flex gap-2">
                            <span className="bg-cyan-400/20 border border-cyan-400 px-3 py-1">CLOUD COMPUTING</span>
                            <span className="bg-cyan-400/20 border border-cyan-400 px-3 py-1">AI SYSTEMS</span>
                          </div>
                        </div>
                      </div>
                    </Modal>
                  )}

                  {/* SOAR Modal */}
                  {showSOARModal && (
                    <Modal onClose={() => setShowSOARModal(false)} useFixed={true}>
                      <div className="flex justify-between items-center mb-4">
                        <a 
                          href="https://www.soar.uci.edu/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-2xl font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          PERSONNEL FILE: STUDENT OUTREACH AND RETENTION CENTER
                        </a>
                        <button onClick={() => setShowSOARModal(false)} className="text-cyan-400 hover:text-cyan-300">
                          ✕
                        </button>
                      </div>
                      <div className="font-mono text-cyan-200 space-y-4">
                        <p>ROLE: Data Science Research Assistant</p>
                        <p>DIVISION: UNIVERSITY ORGANIZATION</p>
                        <p>WORK: Website Design, Website Development, Accessible Interface, Newsletter Design, Newsletter Writing, Engagement Campaigns</p>
                        <p>PERIOD: AUGUST 2024 - PRESENT</p>
                        <div className="border-t border-cyan-400/30 pt-4">
                          <h3 className="text-cyan-400 mb-2">CLEARANCE BADGES:</h3>
                          <div className="flex gap-2">
                            <span className="bg-cyan-400/20 border border-cyan-400 px-3 py-1">WEB DEVELOPMENT</span>
                            <span className="bg-cyan-400/20 border border-cyan-400 px-3 py-1">WEB DESIGN</span>
                            <span className="bg-cyan-400/20 border border-cyan-400 px-3 py-1">ACCESSIBILITY</span>
                          </div>
                        </div>
                      </div>
                    </Modal>
                  )}

                  {/* SOLO Modal */}
                  {showSOLOModal && (
                    <Modal onClose={() => setShowSOLOModal(false)} useFixed={true}>
                      <div className="flex justify-between items-center mb-4">
                        <a 
                          href="https://www.standuptotrash.com/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-2xl font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          PERSONNEL FILE: SOLO
                        </a>
                        <button onClick={() => setShowSOLOModal(false)} className="text-cyan-400 hover:text-cyan-300">
                          ✕
                        </button>
                      </div>
                      <div className="font-mono text-cyan-200 space-y-4">
                        <p>ROLE: LEAD SOFTWARE ENGINEER INTERN</p>
                        <p>DIVISION: TECH STARTUP</p>
                        <p>WORK: App Development, App Design, App Testing, App Deployment, App Maintenance, App Documentation, App Analytics</p>
                        <p>PERIOD: MARCH 2024 - SEPTEMBER 2024</p>
                        <div className="border-t border-cyan-400/30 pt-4">
                          <h3 className="text-cyan-400 mb-2">CLEARANCE BADGES:</h3>
                          <div className="flex gap-2">
                            <span className="bg-cyan-400/20 border border-cyan-400 px-3 py-1">MYSQL</span>
                            <span className="bg-cyan-400/20 border border-cyan-400 px-3 py-1">NODEJS</span>
                            <span className="bg-cyan-400/20 border border-cyan-400 px-3 py-1">AWS S3</span>
                            <span className="bg-cyan-400/20 border border-cyan-400 px-3 py-1">AWS EC2</span>
                          </div>
                        </div>
                      </div>
                    </Modal>
                  )}

                  {/* COMMIT CHANGE Modal */}
                  {showCommitChangeModal && (
                    <Modal onClose={() => setShowCommitChangeModal(false)} useFixed={true}>
                      <div className="flex justify-between items-center mb-4">
                        <a 
                          href="https://www.standuptotrash.com/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-2xl font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          PERSONNEL FILE: STAND UP TO TRASH
                        </a>
                        <button onClick={() => setShowCommitChangeModal(false)} className="text-cyan-400 hover:text-cyan-300">
                          ✕
                        </button>
                      </div>
                      <div className="font-mono text-cyan-200 space-y-4">
                        <p>ROLE: FULL STACK DEVELOPER</p>
                        <p>DIVISION: NON-PROFIT ORGANIZATION</p>
                        <p>WORK: Volunteer Management System, Volunteer Portal, Volunteer Dashboard, Volunteer Reporting, Volunteer Analytics</p>
                        <p>PERIOD: MARCH 2024 - SEPTEMBER 2024</p>
                        <div className="border-t border-cyan-400/30 pt-4">
                          <h3 className="text-cyan-400 mb-2">CLEARANCE BADGES:</h3>
                          <div className="flex gap-2">
                            <span className="bg-cyan-400/20 border border-cyan-400 px-3 py-1">AWS S3</span>
                            <span className="bg-cyan-400/20 border border-cyan-400 px-3 py-1">POSTGRESQL</span>
                            <span className="bg-cyan-400/20 border border-cyan-400 px-3 py-1">REACT</span>
                            <span className="bg-cyan-400/20 border border-cyan-400 px-3 py-1">CHAKRA UI</span>
                            <span className="bg-cyan-400/20 border border-cyan-400 px-3 py-1">EXPRESS</span>
                          </div>
                        </div>
                      </div>
                    </Modal>
                  )}

                  {/* PROGRAM Modal */}
                  {showProgramModal && (
                    <Modal onClose={() => setShowProgramModal(false)} useFixed={true}>
                      <div className="flex justify-between items-center mb-4">
                        <a 
                          href="https://www.soar.uci.edu/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-2xl font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          PERSONNEL FILE: STUDENT OUTREACH AND RETENTION CENTER
                        </a>
                        <button onClick={() => setShowProgramModal(false)} className="text-cyan-400 hover:text-cyan-300">
                          ✕
                        </button>
                      </div>
                      <div className="font-mono text-cyan-200 space-y-4">
                        <p>ROLE: Program Co-Director</p>
                        <p>DIVISION: UNIVERSITY ORGANIZATION</p>
                        <p>WORK: Event Planning, Volunteer Management, Community Engagement, Outreach Campaigns, Event Management, Volunteer Training, Retention Programs</p>
                        <p>PERIOD: AUGUST 2022 - JUNE 2024</p>
                        <div className="border-t border-cyan-400/30 pt-4">
                          <h3 className="text-cyan-400 mb-2">CLEARANCE BADGES:</h3>
                          <div className="flex gap-2">
                            <span className="bg-cyan-400/20 border border-cyan-400 px-3 py-1">BUDGETING</span>
                            <span className="bg-cyan-400/20 border border-cyan-400 px-3 py-1">LEADERSHIP</span>
                            <span className="bg-cyan-400/20 border border-cyan-400 px-3 py-1">ADVOCACY</span>
                            <span className="bg-cyan-400/20 border border-cyan-400 px-3 py-1">LARGE SCALE EVENT PLANNING</span>
                          </div>
                        </div>
                      </div>
                    </Modal>
                  )}

                  {/* ML Modal */}
                  {showMLModal && (
                    <Modal onClose={() => setShowMLModal(false)} useFixed={true}>
                      <div className="flex justify-between items-center mb-4">
                        <a 
                          href="https://www.ics.uci.edu/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-2xl font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          PERSONNEL FILE: DONALD BREN SCHOOL OF INFORMATION AND COMPUTER SCIENCES
                        </a>
                        <button onClick={() => setShowMLModal(false)} className="text-cyan-400 hover:text-cyan-300">
                          ✕
                        </button>
                      </div>
                      <div className="font-mono text-cyan-200 space-y-4">
                        <p>ROLE: Machine Learning Research Assistant</p>
                        <p>DIVISION: HIGH EDUCATION</p>
                        <p>WORK: Machine Learning, Data Analysis, Data Processing, Data Visualization, Internet of Things, Rover Development, Deep Learning, Natural Language Processing, Robotics</p>
                        <p>PERIOD: JANUARY 2023 - MARCH 2024</p>
                        <div className="border-t border-cyan-400/30 pt-4">
                          <h3 className="text-cyan-400 mb-2">CLEARANCE BADGES:</h3>
                          <div className="flex gap-2">
                            <span className="bg-cyan-400/20 border border-cyan-400 px-3 py-1">PYTORCH</span>
                            <span className="bg-cyan-400/20 border border-cyan-400 px-3 py-1">MATLAB</span>
                            <span className="bg-cyan-400/20 border border-cyan-400 px-3 py-1">PYTHON</span>
                            <span className="bg-cyan-400/20 border border-cyan-400 px-3 py-1">TENSORFLOW</span>
                            <span className="bg-cyan-400/20 border border-cyan-400 px-3 py-1">ROS2</span>
                          </div>
                        </div>
                      </div>
                    </Modal>
                  )}

                  {/* LA Modal */}
                  {showLAModal && (
                    <Modal onClose={() => setShowLAModal(false)} useFixed={true}>
                      <div className="flex justify-between items-center mb-4">
                        <a 
                          href="https://www.ics.uci.edu/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-2xl font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          PERSONNEL FILE: DONALD BREN SCHOOL OF INFORMATION AND COMPUTER SCIENCES
                        </a>
                        <button onClick={() => setShowLAModal(false)} className="text-cyan-400 hover:text-cyan-300">
                          ✕
                        </button>
                      </div>
                      <div className="font-mono text-cyan-200 space-y-4">
                        <p>ROLE: Discrete Mathematics Learning Assistant</p>
                        <p>DIVISION: HIGH EDUCATION</p>
                        <p>WORK: Discrete Mathematics, Graph Theory, Set Theory, Logic, Proofs, Mathematical Induction, Combinatorics, Probability, Teaching, Tutoring, Office Hours, Grading, Student Support</p>
                        <p>PERIOD: SEPTEMBER 2022 - DECEMBER 2022</p>
                        <div className="border-t border-cyan-400/30 pt-4">
                          <h3 className="text-cyan-400 mb-2">CLEARANCE BADGES:</h3>
                          <div className="flex gap-2">
                            <span className="bg-cyan-400/20 border border-cyan-400 px-3 py-1">TEACHING</span>
                            <span className="bg-cyan-400/20 border border-cyan-400 px-3 py-1">STUDENT SUPPORT</span>
                            <span className="bg-cyan-400/20 border border-cyan-400 px-3 py-1">LARGE SCALE CLASSROOM MANAGEMENT</span>
                            <span className="bg-cyan-400/20 border border-cyan-400 px-3 py-1">COURSE PLANNING</span>
                          </div>
                        </div>
                      </div>
                    </Modal>
                  )}


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
