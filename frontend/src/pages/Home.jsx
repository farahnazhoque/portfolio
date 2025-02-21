import { useState } from 'react';
import '../style/App.css';

function Home() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [activeSection, setActiveSection] = useState('mission');
  const [flickerKey, setFlickerKey] = useState(0);

  return (
    <div className="absolute top-10 left-1/2 -translate-x-1/2">
      <div className="w-[1000px] h-[770px] bg-[#c0c0c0] border-2 border-white shadow-lg relative overflow-auto custom-scrollbar" style={{
        scrollbarWidth: 'auto',
        scrollbarColor: '#c0c0c0 #f0f0f0',
      }}>
        {/* Window Title Bar */}
        <div className="bg-[#000080] px-2 py-1 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="../../public/IEIcon.png"
              alt="IE Icon"
              className="w-4 h-4 mr-2"
            />
            <span className="text-white font-mono">
              Welcome - Home
            </span>
          </div>
          <div className="flex gap-1">
            <button
              className="px-2 bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-black border-b-black hover:bg-gray-300"
              onClick={() => setIsMinimized(true)}
            >
              _
            </button>
            <button className="px-2 bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-black border-b-black hover:bg-gray-300">
              □
            </button>
            <button className="px-2 bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-black border-b-black hover:bg-gray-300">
              X
            </button>
          </div>
        </div>

        {/* Window Menu Bar */}
        <div className="bg-[#c0c0c0] border-b border-gray-600 px-2 py-1 font-mono text-sm">
          <span className="mr-4 hover:underline cursor-pointer">File</span>
          <span className="mr-4 hover:underline cursor-pointer">Edit</span>
          <span className="mr-4 hover:underline cursor-pointer">View</span>
          <span className="mr-4 hover:underline cursor-pointer">Help</span>
          <span className="mr-4 hover:underline cursor-pointer">Favorites</span>
        </div>

        {/* Window Content */}
        <div className="flex h-[calc(100%-4rem)]">
          {/* Favorites Sidebar */}
          <div className="w-64 bg-[#c0c0c0] p-2 border-r border-gray-600">
            <div className="font-mono text-sm mb-2 font-bold">Favorites</div>
            <div className="space-y-1">
              <div 
                className={`flex items-center hover:bg-[#000080] hover:text-white cursor-pointer p-1 ${activeSection === 'mission' ? 'bg-[#000080] text-white' : ''}`}
                onClick={() => {
                  setActiveSection('mission');
                  setFlickerKey(prev => prev + 1);
                }}
              >
                <img
                  src="../../public/FolderIcon.png"
                  alt="Folder"
                  className="w-4 h-4 mr-2"
                />
                <span className="font-mono text-sm">Mission</span>
              </div>
              <div 
                className={`flex items-center hover:bg-[#000080] hover:text-white cursor-pointer p-1 ${activeSection === 'experiences' ? 'bg-[#000080] text-white' : ''}`}
                onClick={() => {
                  setActiveSection('experiences');
                  setFlickerKey(prev => prev + 1);
                }}
              >
                <img
                  src="../../public/FolderIcon.png"
                  alt="Folder"
                  className="w-4 h-4 mr-2"
                />
                <span className="font-mono text-sm">Experiences</span>
              </div>
              <div className="flex items-center hover:bg-[#000080] hover:text-white cursor-pointer p-1">
                <img
                  src="../../public/FolderIcon.png"
                  alt="Folder"
                  className="w-4 h-4 mr-2"
                />
                <span className="font-mono text-sm">Tech Stacks</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white flex-1 ie-load overflow-auto" style={{
            scrollbarWidth: 'auto',
            scrollbarColor: '#c0c0c0 #f0f0f0',
          }}>
            <div className="p-8">
              {activeSection === 'mission' && (
                <>
                  <h1 key={flickerKey} className="text-3xl text-indigo-900 font-bold font-mono mb-6 flicker">My Mission</h1>
                  <div className="mb-8">
                    <img 
                      src="../../public/Farahnaz.webp" 
                      alt="Farahnaz Hoque"
                      className="w-66 h-78 rounded-lg shadow-lg float-left mr-8 border-4 border-[#c0c0c0]"
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
                  
                    
                  <div className="bg-yellow-100 p-4 rounded-lg border-2 border-gray-600 mb-6">
                        <h2 className="font-mono font-bold mb-2">Key Focus Areas:</h2>
                        <ul className="list-disc list-inside font-mono text-gray-700">
                          <li>Healthcare Technology Innovation</li>
                          <li>Intelligent Systems & Automation</li>
                          <li>Product Design & Development</li>
                          <li>Scalable Cloud Solutions</li>
                        </ul>
                      </div>
                  <div>
                    <p className="font-mono text-gray-700 text-lg">
                    Since my days in High School, I have always been passionate about communities and solving large scale problems that affect the lives of many, resulting in me co-founding <span className="font-bold italic text-indigo-900">Iccheghuri</span>, a non-profit organization in Bangladesh.
                    </p>
                  </div>
                </>
              )}
              {activeSection === 'experiences' && (
                <>
                  <h1 key={flickerKey} className="text-3xl font-mono mb-6 flicker">My Experiences</h1>
                  <p className="font-mono text-gray-700 text-lg mb-6">
                    With several years of experience in software development, 
                    I have worked on various exciting projects and technologies.
                  </p>
                  <p className="font-mono text-gray-700 text-lg mb-6">
                    My journey includes working with modern web technologies, 
                    building scalable applications, and collaborating with diverse teams.
                  </p>
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
