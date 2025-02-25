import { useState, useEffect } from 'react';
import '../style/App.css';
import { Link } from 'react-router-dom';
import Modal from './Modal';    

function Experiences() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isMinimized, setIsMinimized] = useState(false);

  const experiences = [
    {
      title: "JOE C. WEN SCHOOL OF POPULATION AND PUBLIC HEALTH.doc",
      role: "DATA SCIENCE RESEARCH ASSISTANT",
      icon: "../../public/word-icon.png",
      period: "JANUARY 2025 - PRESENT",
      content: {
        responsibilities: [
          "Website Crawling",
          "Data Collection", 
          "Data Analysis & Visualization"
        ],
        skills: ["CLOUD COMPUTING", "AI SYSTEMS"]
      }
    },
    {
      title: "STUDENT OUTREACH AND RETENTION CENTER.doc",
      role: "WEBSITE AND COMMUNICATIONS COORDINATOR", 
      icon: "../../public/word-icon.png",
      period: "AUGUST 2024 - PRESENT",
      content: {
        responsibilities: [
          "Website Design",
          "Newsletter Creation",
          "Engagement Campaigns"
        ],
        skills: ["WEB DEVELOPMENT", "WEB DESIGN", "ACCESSIBILITY"]
      }
    }
  ];

  return (
    <div className="h-screen p-4">
      {/* Main Window */}
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
                src="../../public/folder-icon.png" 
                alt="Folder Icon"
                className="w-5 h-5 mr-2"
              />
              <span className="text-white font-PerfectDOSVGA437 text-lg">File Explorer - Experiences</span>
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

          {/* Window Content */}
          <div className="flex h-[calc(100%-3rem)]">
            {/* Left Sidebar */}
            <div className="w-48 bg-[#c0c0c0] border-r-2 border-gray-400">
              <div className="p-2 border-b border-gray-400">
                <div className="font-PerfectDOSVGA437 text-sm">
                  📁 My Computer
                </div>
                <div className="font-PerfectDOSVGA437 text-sm pl-4">
                  💾 Local Disk (C:)
                </div>
                <div className="font-PerfectDOSVGA437 text-sm pl-8 text-[#000080]">
                  📂 Experiences
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-white p-4 overflow-y-auto">
              <div className="grid grid-cols-3 gap-4">
                {experiences.map((exp, index) => (
                  <div 
                    key={index}
                    className="flex flex-col items-center p-2 hover:bg-[#000080] hover:text-white cursor-pointer"
                    onClick={() => setSelectedFile(exp)}
                  >
                    <img src={exp.icon} alt="Word doc" className="w-12 h-12 mb-2" />
                    <span className="font-PerfectDOSVGA437 text-xs text-center">{exp.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Word Document Modal */}
      {selectedFile && (
  <Modal onClose={() => setSelectedFile(null)}>
    {/* 
      Overlay: 
      - fixed to cover the entire screen 
      - white background to mimic a sheet of paper
      - flex container to center the "Word doc"
    */}
    <div className="fixed inset-0 bg-[#c0c0c0] flex items-center justify-center p-4 z-50">
      
      {/* 
        Main "page" container: 
        - black border for the "printed" look 
        - white background
        - text in black 
      */}
      <div className="w-[800px] border-4 border-black bg-white text-black">
        
        {/* 
          Top Word Toolbar: 
          - Keep the Word blue (#2b579a) 
          - White text 
          - Black bottom border 
        */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-blue-200 text-black p-2 flex justify-between items-center border-b-4 border-black">
          <div className="flex items-center gap-2">
            <img
              src="../../public/word-icon.png"
              alt="Word"
              className="w-6 h-6"
            />
            <span className="font-PerfectDOSVGA437 text-xl">{selectedFile.title}</span>
          </div>
          <div className="flex gap-2">
            <button className="px-1 py-0.5 hover:bg-[#1f4d86]">_</button>
            <button className="px-2 py-1 hover:bg-[#1f4d86]">□</button>
            <button
              onClick={() => setSelectedFile(null)}
              className="px-2 py-1 hover:bg-[#1f4d86]"
            >
              ✕
            </button>
          </div>
        </div>
        
        {/* 
          "Ribbon": 
          - Lighter background or white 
          - Black bottom border 
          - Simple menu items 
        */}
        
        <div className="bg-white border-b-4 border-black fixed top-[40px] left-0 right-0 z-50">
          <div className="flex gap-4 p-2">
            <span className="text-lg font-PerfectDOSVGA437 hover:bg-gray-100 px-2 py-1 cursor-pointer">File</span>
            <span className="text-lg font-PerfectDOSVGA437 hover:bg-gray-100 px-2 py-1 cursor-pointer">Home</span>
            <span className="text-lg font-PerfectDOSVGA437 hover:bg-gray-100 px-2 py-1 cursor-pointer">Insert</span>
            <span className="text-lg font-PerfectDOSVGA437 hover:bg-gray-100 px-2 py-1 cursor-pointer">Layout</span>
            <span className="text-lg font-PerfectDOSVGA437  hover:bg-gray-100 px-2 py-1 cursor-pointer">References</span>
          </div>
          
          <div className="flex items-center gap-4 px-4 py-2 border-t border-gray-200">
            <select 
              className="px-2 py-1 border rounded hover:bg-gray-50"
              onChange={(e) => {
                const content = document.querySelector('.p-8.bg-white');
                if (content) {
                  content.style.fontFamily = e.target.value;
                }
              }}
            >
              <option>Arial</option>
              <option>Times New Roman</option>
              <option>Calibri</option>
              <option>Verdana</option>
              <option>Georgia</option>
            </select>

            <select 
              className="px-2 py-1 border rounded hover:bg-gray-50 font-PerfectDOSVGA437 text-lg"
              onChange={(e) => {
                const content = document.querySelector('.p-8.bg-white');
                if (content) {
                  content.style.fontSize = `${e.target.value}px`;
                }
              }}
            >
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>14</option>
              <option>16</option>
              <option>18</option>
              <option>20</option>
              <option>24</option>
              <option>28</option>
              <option>32</option>
              <option>36</option>
            </select>

            <div className="flex gap-2">
              <button 
                className="p-1 hover:bg-gray-100 border rounded"
                onClick={() => {
                  const content = document.querySelector('.p-8.bg-white');
                  if (content) {
                    content.style.fontWeight = content.style.fontWeight === 'bold' ? 'normal' : 'bold';
                  }
                }}
              >
                <span className="font-bold font-PerfectDOSVGA437 text-lg">B</span>
              </button>
              <button 
                className="p-1 hover:bg-gray-100 border rounded"
                onClick={() => {
                  const content = document.querySelector('.p-8.bg-white');
                  if (content) {
                    content.style.fontStyle = content.style.fontStyle === 'italic' ? 'normal' : 'italic';
                  }
                }}
              >
                <span className="italic font-PerfectDOSVGA437 text-lg">I</span>
              </button>
              <button 
                className="p-1 hover:bg-gray-100 border rounded"
                onClick={() => {
                  const content = document.querySelector('.p-8.bg-white');
                  if (content) {
                    content.style.textDecoration = content.style.textDecoration === 'underline' ? 'none' : 'underline';
                  }
                }}
              >
                <span className="underline font-PerfectDOSVGA437 text-lg">U</span>
              </button>
            </div>

            <div 
              className="w-6 h-6 bg-black rounded cursor-pointer hover:opacity-80" 
              title="Text Color"
              onClick={() => {
                const content = document.querySelector('.p-8.bg-white');
                if (content) {
                  content.style.color = 'black';
                }
              }}
            ></div>
            <div 
              className="w-6 h-6 bg-yellow-300 rounded cursor-pointer hover:opacity-80" 
              title="Highlight Color"
              onClick={() => {
                const content = document.querySelector('.p-8.bg-white');
                if (content) {
                  content.style.backgroundColor = '#fef08a';
                }
              }}
            ></div>
          </div>
        </div>
        
        {/* 
          Document Body: 
          - White background 
          - Normal text 
        */}
        <div className="p-8 bg-white mt-[100px] overflow-y-auto h-[calc(100%-100px)]">
          <h1 className="text-3xl font-bold mb-4">{selectedFile.role}</h1>
          <p className="text-gray-600 mb-6">{selectedFile.period}</p>

          <h2 className="text-xl font-bold mb-3">Responsibilities:</h2>
          <ul className="list-disc pl-5 mb-6">
            {selectedFile.content.responsibilities.map((resp, index) => (
              <li key={index} className="mb-2">
                {resp}
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-bold mb-3">Skills:</h2>
          <div className="flex flex-wrap gap-2">
            {selectedFile.content.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Modal>
)}

    </div>
  );
}

export default Experiences;