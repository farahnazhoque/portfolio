import { useState } from 'react';
import '../style/App.css';
import { Link } from 'react-router-dom';
import Modal from './Modal';    
import Footer from './Footer';
function Experiences() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isMinimized, setIsMinimized] = useState(false);

  const experiences = [
    {
      title: "JOE C. WEN SCHOOL OF POPULATION AND PUBLIC HEALTH.doc",
      role: "DATA SCIENCE RESEARCH ASSISTANT",
      icon: import.meta.env.BASE_URL + 'wordDoc.png',
      period: "JANUARY 2025 - PRESENT",
      content: {
        responsibilities: [
          "The focus of this research was to develop a comprehensive and efficient web crawling system to collect data from multiple years (2011-2024) of fire incidents that took place all over California, especially all the evacuation order, warnings and zones. The data was collected from the California Department of Forestry and Fire Protection (CAL FIRE) website.",
          "Our team of one Research Lead and three Data Science Research Assistants worked together to develop a web crawler that could crawl the website and extract the data in a structured format. The data was then cleaned and prepared for analysis.",
          "Using the data, we created a dashboard that allows users to visualize the data in a user-friendly manner. The dashboard was created using Tableau and Power BI.",
          "There were weekly meetings both with the Research Lead, the Professor who oversees the research, and the other team members to discuss the progress of the project and the challenges faced."
          
        ],
        purpose: [
            "My purpose for joining this research mainly stemmed from my passion to create software and conduct research to provide solutions to real-world problems, whose lack of attention are still being endured by the society today.",
            "From my desire to problem solve came my need to solve the problem with the skills I have learned and should learn in the future.",
            "As a result, I joined this research to gain experience in the field of data science and to be able to apply my skills to a real-world problem."
        ],
        technologies: [
            "Python",
            "Selenium",
            "BeautifulSoup",
            "Pandas",
            "Tableau",
            "Power BI"
        ]
      }
    },
   
  ];

  return (
    <div className="h-screen p-4 relative">
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
                src={import.meta.env.BASE_URL + 'folder-icon.png'}  
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
          <div className="fixed inset-0 bg-[#c0c0c0] flex items-center justify-center p-4 z-50">
            <div className="w-[1200px] border-2 border-black bg-white text-black overflow-y-auto max-h-[90vh]">
              <div className="fixed top-0 left-0 right-0 z-50 bg-blue-200 text-black p-2 flex justify-between items-center border-b-4 border-black">
                <div className="flex items-center gap-2">
                  <img
                    src={import.meta.env.BASE_URL + 'word-icon.png'}
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
              
              <div className="p-8 bg-white mt-[100px] overflow-y-auto h-[calc(100%-100px)]">
                <div className="border-b-4 border-blue-200 pb-6 mb-8">
                  <h1 className="text-4xl font-bold text-blue-900 font-times mb-3">{selectedFile.role}</h1>
                  <p className="text-gray-600 italic font-arial">{selectedFile.period}</p>
                </div>

                <div className="flex">
                  {/* Sidebar with clickable headings */}
                  <div className="w-48 border-r border-gray-200 pr-4 sticky top-0">
                    <div 
                      onClick={() => document.getElementById('responsibilities').scrollIntoView({ behavior: 'smooth' })}
                      className="flex items-center p-2 mb-2 cursor-pointer hover:bg-gray-100 rounded"
                    >
                      <img src={import.meta.env.BASE_URL + 'checklist.png'} alt="" className="w-4 h-4 mr-2"/>
                      <span className="text-sm font-medium">Responsibilities</span>
                    </div>
                    <div
                      onClick={() => document.getElementById('purpose').scrollIntoView({ behavior: 'smooth' })}
                      className="flex items-center p-2 cursor-pointer hover:bg-gray-100 rounded"
                    >
                      <img src={import.meta.env.BASE_URL + 'skills.png'} alt="" className="w-4 h-4 mr-2"/>
                      <span className="text-sm font-medium">Purpose</span>
                    </div> 
                    <div
                      onClick={() => document.getElementById('technologies').scrollIntoView({ behavior: 'smooth' })}
                      className="flex items-center p-2 cursor-pointer hover:bg-gray-100 rounded"
                    >
                      <img src={import.meta.env.BASE_URL + 'skills.png'} alt="" className="w-4 h-4 mr-2"/>
                      <span className="text-sm font-medium">Technologies</span>
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="flex-1 pl-8">
                    <div id="responsibilities" className="mb-8">
                      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                        <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
                          <img src={import.meta.env.BASE_URL + 'checklist.png'} alt="" className="w-6 h-6 mr-2"/>
                          Responsibilities
                        </h2>
                        <ul className="space-y-3">
                          {selectedFile.content.responsibilities.map((resp, index) => (
                            <ul key={index} className="flex items-center">
                              <span className="font-georgia text-gray-700">{resp}</span>
                            </ul>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div id="purpose" className="mb-8">
                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                            <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
                                <img src={import.meta.env.BASE_URL + 'checklist.png'} alt="" className="w-6 h-6 mr-2"/>
                                Purpose
                            </h2>
                            <ul className="space-y-3">
                            {selectedFile.content.purpose.map((pur, index) => (
                                <ul key={index} className="flex items-center">
                                <span className="font-georgia text-gray-700">{pur}</span>
                                </ul>
                            ))}
                            </ul>
                        </div>
                    </div>
                    <div id="technologies">
                      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                        <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
                          <img src={import.meta.env.BASE_URL + 'skills.png'} alt="" className="w-6 h-6 mr-2"/>
                          Technologies
                        </h2>
                        <div className="flex flex-wrap gap-3">
                          {selectedFile.content.technologies.map((technology, index) => (
                            <span
                              key={index}
                              className="px-4 py-2 bg-white text-blue-700 rounded-full border-2 border-blue-200 font-semibold shadow-sm"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
          </div>
        </Modal>
      )}

      <Footer />
    </div>
  );
}

export default Experiences;