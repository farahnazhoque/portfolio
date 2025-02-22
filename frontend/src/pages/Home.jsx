import { useState } from 'react';
import '../style/App.css';

function Home() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [activeSection, setActiveSection] = useState('space-landing');
  const [flickerKey, setFlickerKey] = useState(0);
  const [currentUrl, setCurrentUrl] = useState(`www.farahnazhoqe.tech/home/${activeSection}`);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const handleSectionClick = (newSection) => {
    setActiveSection(newSection);
    setFlickerKey((prev) => prev + 1);
    setCurrentUrl(`www.farahnazhoqe.tech/home/${newSection}`);
  };
  

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
            <span className="text-white font-mono text-lg">
              Welcome - Home
            </span>
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
            <button className="px-3 py-1 bg-[#c0c0c0] rounded-md border-2 border-t-white border-l-white border-r-black border-b-black hover:bg-gray-300 transition-colors duration-200">
              ✖
            </button>
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
            {isSidebarExpanded ? '⭐ Hide Sections' : '⭐ Show Sections'}
          </button>
        </div>

        {/* URL Bar */}
        <div className="bg-[#c0c0c0] border-b-2 border-gray-400 px-4 py-2 flex items-center">
          <span className="font-mono text-sm mr-2">Address:</span>
          <div className="flex-1 bg-white border-2 border-gray-600 px-2 py-1">
            <input 
              type="text" 
              value={currentUrl}
              onChange={(e) => {
                setCurrentUrl(e.target.value);
                if (e.key === 'Enter') {
                  window.open(`https://www.google.com/search?q=${encodeURIComponent(e.target.value)}`, '_blank');
                }
              }}
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
          <div className={`transition-all duration-300 ${
            isSidebarExpanded ? 'w-64' : 'w-12'
          } lg:w-64 bg-gradient-to-b from-[#c0c0c0] to-[#d3d3d3] border-r-2 border-gray-400 relative`}>
            
            {/* Toggle button for mobile/tablet */}
            

            {/* Sidebar content */}
            <div className={`${isSidebarExpanded ? 'opacity-100' : 'opacity-0 lg:opacity-100'} transition-opacity duration-300`}>
              <div className="p-4">
                <div className="font-mono text-sm mb-4 font-bold rounded-lg text-[#000080]">✨ Sections ✨</div>
                <div className="space-y-2">
                  <div 
                    className={`flex items-center hover:bg-[#4169E1] hover:text-white cursor-pointer p-2 rounded-md transition-all duration-200 ${activeSection === 'mission' ? 'bg-[#4169E1] text-white' : ''}`}
                    onClick={() => handleSectionClick('mission')}
                  >
                    <img
                      src="../../public/FolderIcon.png"
                      alt="Folder"
                      className="w-5 h-5 mr-3"
                    />
                    <span className="font-mono text-sm">🎯 Mission</span>
                  </div>
                  <div 
                    className={`flex items-center hover:bg-[#4169E1] hover:text-white cursor-pointer p-2 rounded-md transition-all duration-200 ${activeSection === 'experiences' ? 'bg-[#4169E1] text-white' : ''}`}
                    onClick={() => handleSectionClick('experiences')}
                  >
                    <img
                      src="../../public/FolderIcon.png"
                      alt="Folder"
                      className="w-5 h-5 mr-3"
                    />
                    <span className="font-mono text-sm">💼 Experiences</span>
                  </div>
                  <div className="flex items-center hover:bg-[#4169E1] hover:text-white cursor-pointer p-2 rounded-md transition-all duration-200">
                    <img
                      src="../../public/FolderIcon.png"
                      alt="Folder"
                      className="w-5 h-5 mr-3"
                    />
                    <span className="font-mono text-sm">🛠️ Tech Stacks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white flex-1 ie-load overflow-y-auto custom-scrollbar" style={{
            scrollbarWidth: 'auto',
            scrollbarColor: '#c0c0c0 #f0f0f0',
            height: '100%'
          }}>
            {activeSection === 'space-landing' && (
              <div className="p-8 w-[734px] h-[499px]" style={{backgroundImage: 'url(../../public/LoadingHome.gif)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                    <h1 key={flickerKey} className="text-3xl"></h1>
              </div>
            )}
            <div className="p-8">
              {activeSection === 'mission' && (
                <>
                  <h1 key={flickerKey} className="text-3xl text-indigo-900 font-bold font-mono mb-6 flicker">✨ My Mission ✨</h1>
                  <div className="mb-8">
                    <img 
                      src="../../public/Farahnaz.webp" 
                      alt="Farahnaz Hoque"
                      className="w-66 h-78 rounded-2xl shadow-2xl float-left mr-8 border-4 border-[#c0c0c0] hover:scale-105 transition-transform duration-200"
                    />
                    <div>
                      <p className="font-mono text-gray-700 text-lg mb-1">
                      I am a <span className="font-bold italic text-indigo-900">Computer Science</span> major specializing in <span className="font-bold italic text-indigo-900">Intelligent Systems</span> with a minor in <span className="font-bold italic text-indigo-900">Health Informatics</span>. I have a deep interest in <span className="font-bold italic text-indigo-900">AI-driven solutions for healthcare, safety, and community impact.</span> My mission is to leverage artificial intelligence, cloud computing, and data-driven insights to build scalable, innovative solutions that address real-world challenges.</p>
                        <br></br>
                        <p className="font-mono text-gray-700 text-lg mb-6">
                      With a background in full-stack development, AI applications, and software engineering, <span className="font-bold italic text-indigo-900">I aim to bridge the gap between cutting-edge technology and practical implementation in industries such as:</span>
                      </p>
                    </div>
                  </div>
                  
                    
                  <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-xl border-2 border-gray-400 mb-6 shadow-lg">
                        <h2 className="font-mono font-bold mb-3">✨ Key Focus Areas:</h2>
                        <ul className="list-disc list-inside font-mono text-gray-700 space-y-1">
                          <ul>🏥 Healthcare Technology Innovation</ul>
                          <ul>🤖 Intelligent Systems & Automation</ul>
                          <ul>💡 Product Design & Development</ul>
                          <ul>☁️ Scalable Cloud Solutions</ul>
                        </ul>
                      </div>
                  <div>
                    <p className="font-mono text-gray-700 text-lg">
                    Since my days in High School, I have always been passionate about communities and solving large scale problems that affect the lives of many, resulting in me co-founding <span className="font-bold italic text-indigo-900">Iccheghuri</span>, a non-profit organization in Bangladesh.
                    </p>
                  </div>
                </>
              )}
              {activeSection === "experiences" && (
                <>
                  <h1 key={flickerKey} className="text-3xl font-mono mb-6 flicker text-center">
                    <img src="../../public/new.gif" alt="New!" className="inline w-8 h-8 mr-2" />
                    My Experiences
                    <img src="../../public/new.gif" alt="New!" className="inline w-8 h-8 ml-2" />
                  </h1>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Microsoft Role Widget */}
                    <div className="border-4 border-double border-[#000080] p-4 bg-[#ffffcc] rounded shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-center mb-3">
                        <img src="../../public/microsoft.gif" alt="Microsoft" className="w-12 h-12 mr-3" />
                        <h2 className="text-xl font-mono font-bold text-[#000080]">Microsoft</h2>
                      </div>
                      <p className="font-mono text-sm">
                        Software Engineering Intern<br/>
                        Summer 2023<br/>
                        Azure Cloud & AI Division
                      </p>
                      <div className="mt-2 text-xs">
                        <span className="bg-[#000080] text-white px-2 py-1 rounded mr-1">Cloud Computing</span>
                        <span className="bg-[#000080] text-white px-2 py-1 rounded mr-1">AI</span>
                      </div>
                    </div>

                    {/* Meta Role Widget */}
                    <div className="border-4 border-double border-[#4a154b] p-4 bg-[#ffffcc] rounded shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-center mb-3">
                        <img src="../../public/meta.gif" alt="Meta" className="w-12 h-12 mr-3" />
                        <h2 className="text-xl font-mono font-bold text-[#4a154b]">Meta</h2>
                      </div>
                      <p className="font-mono text-sm">
                        Software Engineering Intern<br/>
                        Summer 2022<br/>
                        Reality Labs
                      </p>
                      <div className="mt-2 text-xs">
                        <span className="bg-[#4a154b] text-white px-2 py-1 rounded mr-1">AR/VR</span>
                        <span className="bg-[#4a154b] text-white px-2 py-1 rounded mr-1">React</span>
                      </div>
                    </div>

                    <div className="text-center col-span-1 md:col-span-2 mt-4">
                      <img src="../../public/construction.gif" alt="Under Construction" className="inline h-8" />
                      <p className="font-mono text-sm text-gray-600 mt-2">More experiences coming soon!</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
