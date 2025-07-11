import { useState } from 'react';
import '../style/App.css';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import click from '../audio/click.mp3';
function Experiences() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFont, setSelectedFont] = useState('Arial'); // Add state for selected font

  const experiences = [
    {
      title: "CONIC.doc",
      role: "CONTRACT SOFTWARE ENGINEER",
      icon: import.meta.env.BASE_URL + 'wordDoc.png',
      link: "https://conicgroup.com/",
      period: "JUNE 2025 - PRESENT",
      content: {
        image: import.meta.env.BASE_URL + 'conic.jpeg',

        summary: {
          team: [
            "1 Chief Executive Officer",
            "1 Executive Manager", 
            "2 Developers"
          ],
          myRole: "Contract Software Engineer",
          timeline: "June 2025 - Present",
          projectPhases: [
            "Software Development (June 2025 - Present)"
          ]
        },
        responsibilities: [
          "Architecting and implementing a multi-source AI suggestion engine using the Zerowidth Workbench, orchestrating queries across a vector database, a curated knowledge base, and external APIs to guide users in creating data-driven logic models.",
          "Developing a complete data ingestion pipeline for user-uploaded documents (PDFs, DOCs), which automates the parsing, chunking, and creation of vector embeddings to enable Retrieval-Augmented Generation (RAG) for contextual AI analysis.",
          "Engineering the full backend system for the application, including designing the database schemas for user projects and knowledge bases, and building the API endpoints to support the core UI and a real-time progress tracking dashboard.",
          "Designing scalable database schemas for storing complex user-generated logic models and the curated knowledge base powering the AI.",
          "Building RESTful API endpoints to support the core application UI, enabling real-time creation and manipulation of visual logic models.",
          "Collaborating within a cross-functional team (design, front-end) and with the Zerowidth lead developer to engineer dedicated data endpoints, powering a real-time dashboard for visualizing user impact.",
        ],
        purpose: [
          "The mission of Conic truly spoke to my philanthropic heart as they are trying to solve a significant gap within the civic sector, especially when it comes to Urban Planning and Development.",
          "I am a strong believer in the power of technology to solve real-world problems, and I am excited to be a part of a team that is using technology to make a difference in the world."
        ],
        technologies: [
          "Zerowidth Workbench",
          "Python",
          "FastAPI",
          "PostgreSQL",
          "LangChain",
          "AWS",
          "AWS S3",
          "TypeScript",
          "React",
          "Tailwind CSS",
          "Shadcn UI",
          "Vercel",
          "Docker",
          "Git",
          "GitHub"
        ]
      }
    },
    {
      title: "JOE C. WEN SCHOOL OF POPULATION AND PUBLIC HEALTH.doc",
      role: "DATA SCIENCE RESEARCH ASSISTANT INTERN",
      icon: import.meta.env.BASE_URL + 'wordDoc.png',
      link: "https://drwulab.net/",
      period: "JANUARY 2025 - JUNE 2025",
      content: {
        image: import.meta.env.BASE_URL + 'drWu.png',

        summary: {
          team: [
            "1 Professor (Research Supervisor)",
            "1 Research Lead", 
            "3 Data Science Research Assistants (including myself)"
          ],
          myRole: "Data Science Research Assistant",
          timeline: "January 2025 - June 2025",
          projectPhases: [
            "Data Collection (Jan 2025)",
            "Data Processing & Analysis (Jan-Feb 2025)",
            "Dashboard Development (Feb-Mar 2025)"
          ]
        },
        responsibilities: [
          "This research focused on developing a comprehensive and efficient web crawling system to collect data from multiple years (2011–2024) of fire incidents that took place all over California, especially all the evacuation order and warning zones. The data was collected from the California Department of Forestry and Fire Protection (CAL FIRE) website.",
          "Our team, consisting of one lead and three interns (Hannah Huynh, Farahnaz Hoque, and Eric Li) collaborated to develop a web crawler capable of extracting zones from a website in a structured format. Given the complexity of the data, where hundreds of fires had multiple updates and zones were listed in an unstructured manner, our primary focus was to ensure accurate and efficient crawling.",
          "To achieve this, we designed a web crawler that leverages multi-threading, batch configuration, and advanced regex techniques. This allowed us to extract zones even when no consistent patterns were followed. Once the data was collected, we cleaned and processed it for further analysis, ensuring its accuracy and usability.",
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
    {
        title: "STUDENT OUTREACH AND RETENTION CENTER.doc",
        role: "WEBSITE DEVELOPER, DESIGNER AND COMMUNICATIONS COORDINATOR",
        icon: import.meta.env.BASE_URL + 'wordDoc.png',
        link: "https://soar.uci.edu",
        period: "AUGUST 2024 - JUNE 2025",
        content: {
          image: import.meta.env.BASE_URL + 'soar.png',
  
          summary: {
            team: [
              "1 Supervisor",
              "1 Website Developer and Designer (just me)"
            ],
            myRole: "Website Developer and Designer",
            timeline: "August 2024 - June 2025",
            projectPhases: [
              "Website Design (Aug 2024 - October 2024)",
              "Website Development (October 2024 - Present)",
              "Designing Newsletter Interface (Aug 2024 - September 2024)",
              "Writing Newsletter Articles (September 2024 - Present)"
            ]
          },
          responsibilities: [
            "Design:",
            "My designing process often begins looking at the brand colors, and observing closely the palettes and fonts used by the marketing team. I also sat with my supervisor on various sessions to showcase some of the inspiration I have gathered before starting the official design process.",
            "Once the initial research was complete, I created various mockups and prototypes to visualize the different pages of the website. Afterwards, I sat with the other team members and worked with them closely to refine the design, and not just the student staff, but also some of our regular students.",
            "Developement:",
            "I was responsible for developing the website from scratch, and with my proficiency in HTML, CSS, and JavaScript, I was able to create a website that is both functional and according to the needs of the student`.",
            "Most of the transitioning of the site links was completed by the Office of Information and Technology here at UCI, and I was able to work with them to ensure that the website is fully functional and that the links are working properly.",
            "Communication:",
            "I also had to design the newsletter interface in the same manner, and ususally maintain it with interfaces that change quarterly, alongside the content."
            
          ],
          purpose: [
            "My purpose for joining SOAR was to give back to the community that has given me so much, and to be able to help the students here at UCI to be able to get the most out of their time here.",
            "As SOAR is a student organization serving primarily underserved students, I wanted to ensure the way they interact with our organization online is as seamless as possible, and that they are able to get the information they need in a way that is easy to understand and navigate.",
            "I also wanted to ensure that the website is a reflection of the organization's values and mission, and that it is a tool that can be used by the organization to achieve their goals."
          ],
          technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Figma",
            "Adobe Photoshop",
            "Adobe Illustrator",
            "Adobe InDesign",
            "Adobe XD",
            "Adobe Premiere Pro",
            "Adobe After Effects",
            "Canva"
          ]
        }
      },
      {
        title: "SOLO: A TRAINING APPLICATION FOR RUNNERS.doc",
        role: "LEAD SOFTWARE ENGINEER INTERN",
        icon: import.meta.env.BASE_URL + 'wordDoc.png',
        link: "https://github.com/farahnazhoque/SOLOFinal",
        period: "MARCH 2024 - JUNE 2024",
        content: {
          image: import.meta.env.BASE_URL + 'solo.png',
  
          summary: {
            team: [
              "2 Founders",
              "2 Frontend Developers (including myself)",
              "3 Backend Developers (including myself)",
              "3 Designers"
            ],
            myRole: "Lead Software Engineer Intern",
            timeline: "March 2024 - June 2024",
            projectPhases: [
              "UI/UX Design (January 2024 - March 2024)",
              "Frontend Development (March 2024 - September 2024)",
              "Backend Development (June 2024 - September 2024)"
            ]
          },
          responsibilities: [
            "With the initial design done by the interns before us, we had to make ensure that the founders were still on board with the previous designs, and that the design adhered to the user needs and preferences.",
            "As a full stack developer, I was responsible for developing the frontend and backend of the application, and I also had to ensure that the application was responsive and that it adhered to the design.",
            "We had to also perform research on the best practices for uploading and displaying the videos, using Amazon S3 and AWS Rekognition, and we had to ensure that the application was secure and that the data was stored properly.",
            "To properly store all the data, we created an Amazon RDS instance and connected it to the MySQL Workbench, with proper user authentication and authorization.",
            "We also had to ensure that the application was responsive and that it adhered to the design, and that the application was secure and that the data was stored properly."            
          ],
          purpose: [
            "My initial reason for joining this project was to be able to work on a real-world problem and to work with a team of people to learn more about the latest technologies in the field of software engineering.",
            "It was also a great opportunity to work with the founders of the projects, interact with stakeholders, and network with other professionals in the field."
          ],
          technologies: [
            "HTML",
            "CSS",
            "TypeScript",
            "Node.js",
            "Express",
            "MySQL",
            "MySQL Workbench",
            "React",
            "Figma",
            "Ionic",
            "Capacitor",
            "Angular",
            "Git",
            "GitHub",
            "Docker",
            "AWS",
            "AWS RDS",
            "AWS S3",
            "AWS EC2"
          ]
          
        }
      },
      {
        title: "Stand Up to Trash.doc",
        role: "FULL STACK DEVELOPER",
        icon: import.meta.env.BASE_URL + 'wordDoc.png',
        link: "https://www.standuptotrash.com/",
        period: "OCTOBER 2023 - JUNE 2024",
        content: {
          image: import.meta.env.BASE_URL + 's2t.png',
  
          summary: {
            team: [
              "3 Founders",
              "2 Tech Leads",
              "10 Full Stack Developers (including myself)",
              "3 Designers"
            ],
            myRole: "Full Stack Developer",
            timeline: "October 2023 - June 2024",
            projectPhases: [
              "UI/UX Design (October 2023 - January 2024)",
              "Frontend Development (October 2023 - June 2024)",
              "Backend Development (October 2023 - June 2024)"
            ]
          },
          responsibilities: [
            "Initially, I was tasked with following the design guidelines and creating the frontend of the website.",
            "Using the Sandwich Model and Agile Methodology, I worked with the other developers to incrementally build the backend of the website, while the designers were working on other parts of the website.",
            "We had weekly meetings with Tech Leads to discuss the progress, brainstorm implementation ideas, task distribution, and any other issues that needed to be addressed.",
            "I personally worked more on the creation of the PostgreSQL database, and the backend API endpoints.",
            "In the frontend, I worked mainly with the dashboard, login, signup and volunteer management pages."
            
          ],
          purpose: [
            "As someone who is passionate about any form of community service, I was drawn to Stand Up to Trash because of the mission of the organization to clean up the community and make it a better place for everyone.",
            "Through this project, I was able to learn more about what it is to work with clients first hand, interviewing them to understand their needs and preferences, and also socialize with the community and company to branch out my network.",
            "However, mostly it was for creating a platform that is easy to use for the amazing volunteers and staff of Stand Up to Trash, and to make their lives much easier while performing such an incredible task."
          ],
          technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Figma",
            "Amazon S3",
            "AWS Rekognition",
            "PostgreSQL",
            "Node.js",
            "Express",
            "React Router",
            "React Hook Form",
            "Canva",
            "Agile Methodology",
            "Sandwich Model",
            "Scrum",
            "Jira",
            "Notion",
            "Slack",
            "PgAdmin",
            "Postman",
            "AWS CLI",
            "AWS SDK",
            "AWS CLI",
            "AWS SDK",
            "AWS CLI",
          ]
        }
      },
      {
        title: "Donald Bren School of Information and Computer Sciences.doc",
        role: "MACHINE LEARNING RESEARCH ASSISTANT",
        icon: import.meta.env.BASE_URL + 'wordDoc.png',
        link: "https://ics.uci.edu/~levorato/index.html",
        period: "JANUARY 2022 - JUNE 2024",
        content: {
          image: import.meta.env.BASE_URL + 'mlresearch.png',
  
          summary: {
            team: [
              "1 Professor (Research Supervisor)",
              "1 Research Lead",
              "3 Machine Learning Research Assistants (including myself)"
            ],
            myRole: "Machine Learning Research Assistant",
            timeline: "January 2022 - June 2024",
            projectPhases: [
              "Data Collection and Researching (January 2022 - June 2022)",
              "Data Processing & Analysis (June 2022 - December 2022)",
              "Model Development (December 2022 - June 2024)"
            ]
          },
          responsibilities: [
            "As one of three undergraduate research assistants, I collected internet data and researched advancements in machine learning.",
            "I collaborated with my assigned research lead, reviewing relevant papers to support their development of an AR/VR application for assisting elderly individuals with daily tasks in household settings.",
            "I also worked with the hardware team, contributing to the engineering of a data-collecting rover deployed in various locations, including Aldrich Park, the Anteater Recreation Center, and ICS buildings.",
            "I further supported the other two research assistants with their research and data collection, meeting with each individually once or twice weekly.",
            "Finally, I participated in weekly meetings with the professor to discuss project progress and address challenges faced by all teams."
            
          ],
          purpose: [
            "My purpose for joining research mainly was a form of exploration and learning, especially how computer science and machine learning looked like in a research setting.",
            "It was gratifying to have the priviledge and opportunity to work with such forward-thinkers, and also to learn how papers were written for such technical topics, and how abstractions are conceptualized and implemented.",
            "I also got to learn more about the importance of teamwork and collaboration, and how to effectively communicate with others to achieve a common goal through the process of working across different teams when it came to collaborating on a paper."
          ],
          technologies: [
            "Python",
            "Pandas",
            "Numpy",
            "Matplotlib",
            "Seaborn",
            "Scikit-learn",
            "TensorFlow",
            "ROS 1",
            "ROS 2",
            "ROS 2 Navigation",
            "ROS 2 Mapping",
            "ROS 2 SLAM",
            "ROS 2 Gazebo",
            "ROS 2 Rviz"
          ]
        }
      },
  ];

  return (
    <div className="h-screen p-4 relative">
      {/* Main Window */}
      <div className="absolute lg:top-10 mt-20 left-1/2 -translate-x-1/2 
        w-full sm:max-w-[500px] md:max-w-[80vw] lg:max-w-[1000px]
        bg-[#c0c0c0] shadow-xl
        overflow-hidden 
        min-h-[450px] md:min-h-[600px] lg:min-h-[650px] border-2 border-black">
        
        <div className="w-full h-[650px] md:w-[80vw] md:h-[600px] lg:w-[1000px] lg:h-[650px] bg-[#c0c0c0] border-2 border-white rounded-lg shadow-xl relative">
        {/* Window Title Bar */}
        <div className="bg-[#dcdcdc] px-3 py-1 flex items-center justify-between border-b border-[#a0a0a0]">
        <div className="flex items-center">
            
        <span className="text-black font-PerfectDOSVGA437 text-base tracking-tight">Experiences Document</span>
        </div>
          <div className="flex gap-2">
            <button
              className="w-6 h-6 bg-[#c0c0c0] border border-black shadow-[inset_1px_1px_0px_white] hover:bg-[#b0b0b0] transition-colors duration-200"
              onClick={() => {
                const audio = new Audio(click);
                audio.play();
              }}
              onMouseDown={() => {
                const audio = new Audio(click);
                audio.play();
              }}
            >
              _
            </button>
            <button className="w-6 h-6 bg-[#c0c0c0] border border-black shadow-[inset_1px_1px_0px_white] hover:bg-[#b0b0b0] transition-colors duration-200">
            □
            </button>
            <Link
              to="/layout"
              onMouseDown={() => {
                const audio = new Audio(click);
                audio.play();
              }}
              className="w-6 h-6 bg-[#c0c0c0] border border-black shadow-[inset_1px_1px_0px_white] hover:bg-[#b0b0b0] transition-colors duration-200"
            >
              ✖
            </Link>
          </div>
        </div>
        <div
          className="w-full h-[10px] border-t border-[#999] bg-[repeating-linear-gradient(to-bottom,#b0b0b0_0px,#b0b0b0_1px,#d0d0d0_1px,#d0d0d0_2px)]"
        ></div>

          {/* Window Content */}
          <div className="flex h-[calc(100%-3rem)]">
            {/* Left Sidebar */}
            <div className="hidden md:block w-48 bg-[#c0c0c0] border-r-2 border-gray-400">
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
                    onMouseDown={() => {
                      const audio = new Audio(click);
                      audio.play();
                    }}
                  >
                    <img src={exp.icon} alt="Word doc" className="w-12 h-12 mb-2" />
                    <span className="font-PerfectDOSVGA437 text-xs text-center text-[#0000ff]">{exp.title}</span>
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
          <div className="z-150 fixed inset-0 bg-[#c0c0c0] flex items-center justify-center p-4">
            <div className="w-[1200px] border-2 border-black bg-white text-black overflow-y-auto max-h-[100vh]">
              <div className="fixed top-0 left-0 right-0 z-50 bg-[#0000ff] text-white p-2 flex justify-between items-center border-b-2 border-black">
                <div className="flex items-center gap-2 overflow-hidden">
                  <img
                    src={import.meta.env.BASE_URL + 'wordDoc.png'}
                    alt="Word"
                    className="w-6 h-6 flex-shrink-0"
                  />
                  <span className="font-apple-garamond-bold text-xl truncate">{selectedFile.title}</span>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <button onMouseDown={() => {
                    const audio = new Audio(click);
                    audio.play();
                  }} className="px-1 py-0.5 hover:bg-[#1f4d86]">_</button>
                  <button onMouseDown={() => {
                    const audio = new Audio(click);
                    audio.play();
                  }} className="px-2 py-1 hover:bg-[#1f4d86]">□</button>
                  <button
                    onClick={() => setSelectedFile(null)}
                    onMouseDown={() => {
                      const audio = new Audio(click);
                      audio.play();
                    }}
                    className="px-2 py-1 hover:bg-[#1f4d86]"
                  >
                    ✕
                  </button>
                </div>
              </div>
              
              <div className="bg-white border-b-4 border-black fixed top-[40px] left-0 right-0 z-50">
                <div className="relative">
                  {/* Desktop view */}
                  <div className="hidden md:flex gap-4 p-2">
                    {selectedFile.link && (
                      <a href={selectedFile.link} className="text-lg font-PerfectDOSVGA437 hover:bg-gray-100 px-2 py-1 cursor-pointer">Link to Organization</a>
                    )}
                    <span onMouseDown={() => {
                      const audio = new Audio(click);
                      audio.play();
                    }} onClick={() => document.getElementById('summary').scrollIntoView({ behavior: 'smooth', block: 'end' })} className="text-lg font-PerfectDOSVGA437 hover:bg-gray-100 px-2 py-1 cursor-pointer">Summary</span>
                    <span onMouseDown={() => {
                      const audio = new Audio(click);
                      audio.play();
                    }} onClick={() => document.getElementById('responsibilities').scrollIntoView({ behavior: 'smooth', block: 'end' })} className="text-lg font-PerfectDOSVGA437 hover:bg-gray-100 px-2 py-1 cursor-pointer">Responsibilities</span>
                    <span onMouseDown={() => {
                      const audio = new Audio(click);
                      audio.play();
                    }} onClick={() => document.getElementById('purpose').scrollIntoView({ behavior: 'smooth', block: 'end' })} className="text-lg font-PerfectDOSVGA437 hover:bg-gray-100 px-2 py-1 cursor-pointer">Purpose</span>
                    <span onMouseDown={() => {
                      const audio = new Audio(click);
                      audio.play();
                    }} onClick={() => document.getElementById('technologies').scrollIntoView({ behavior: 'smooth', block: 'end' })} className="text-lg font-PerfectDOSVGA437 hover:bg-gray-100 px-2 py-1 cursor-pointer">Technologies</span>
                  </div>

                  {/* Mobile dropdown */}
                  <select className="md:hidden w-full p-2 text-lg font-PerfectDOSVGA437 border rounded" onChange={(e) => {
                    const element = document.getElementById(e.target.value);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'end' });
                    } else if (e.target.value === 'link' && selectedFile.link) {
                      window.location.href = selectedFile.link;
                    }
                  }}>
                    <option value="">Navigate to...</option>
                    {selectedFile.link && <option onMouseDown={() => {
                      const audio = new Audio(click);
                      audio.play();
                    }} value="link">Link to Organization</option>}
                    <option onMouseDown={() => {
                      const audio = new Audio(click);
                      audio.play();
                    }} value="summary">Summary</option>
                    <option onMouseDown={() => {
                      const audio = new Audio(click);
                      audio.play();
                    }} value="responsibilities">Responsibilities</option>
                    <option onMouseDown={() => {
                      const audio = new Audio(click);
                      audio.play();
                    }} value="purpose">Purpose</option>
                    <option onMouseDown={() => {
                      const audio = new Audio(click);
                      audio.play();
                    }} value="technologies">Technologies</option>
                  </select>
                </div>
                
                <div className="flex items-center gap-4 px-4 py-2 border-t border-gray-200">
                  <select 
                    onMouseDown={() => {
                      const audio = new Audio(click);
                      audio.play();
                    }}
                    className="px-2 py-1 border rounded hover:bg-gray-50"
                    value={selectedFont}
                    onChange={(e) => {
                      setSelectedFont(e.target.value);
                      const content = document.querySelector('.p-8.bg-white');
                      if (content) {
                        // Apply font to all text elements
                        const textElements = content.querySelectorAll('h1, h2, h3, p, span, li');
                        textElements.forEach(el => {
                          el.style.fontFamily = e.target.value;
                        });
                      }
                    }}
                  >
                    <option>Apple Garamond</option>
                    <option>Arial</option>
                    <option>Times New Roman</option>
                    <option>Calibri</option>
                    <option>Verdana</option>
                    <option>Georgia</option>
                  </select>

                  <select 
                    className="px-2 py-1 border rounded hover:bg-gray-50 font-PerfectDOSVGA437 text-lg"
                    onMouseDown={() => {
                      const audio = new Audio(click);
                      audio.play();
                    }}
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
                      onMouseDown={() => {
                        const audio = new Audio(click);
                        audio.play();
                      }}
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
                      onMouseDown={() => {
                        const audio = new Audio(click);
                        audio.play();
                      }}
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
                      onMouseDown={() => {
                        const audio = new Audio(click);
                        audio.play();
                      }}
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
                    onMouseDown={() => {
                      const audio = new Audio(click);
                      audio.play();
                    }}
                    onClick={() => {
                      const content = document.querySelector('.p-8.bg-white');
                      if (content) {
                        content.style.color = 'black';
                      }
                    }}
                  ></div>
                  
                </div>
              </div>
              
              <div className="p-8 bg-white mt-40 overflow-y-auto h-[calc(100%-100px)] custom-scrollbar animate-fadeIn" style={{fontFamily: selectedFont}}>
                <div className="border-b-4 border-blue-200 pb-6 mb-8">
                  <h1 className="text-4xl font-bold text-blue-900 font-times mb-3">{selectedFile.role}</h1>
                  <p className="text-gray-600 italic font-arial">{selectedFile.period}</p>
                </div>

                <div className="flex">
                  {/* Sidebar with clickable headings */}
                  <div className="hidden md:block w-48 border-r border-gray-200 pr-4 sticky top-0">
                    <div
                        onClick={() => document.getElementById('summary').scrollIntoView({ behavior: 'smooth', block: 'end' })}
                      className="flex items-center p-2 cursor-pointer hover:bg-gray-100 rounded"
                    >
                      <img src={import.meta.env.BASE_URL + 'summary.png'} alt="" className="w-6 h-6 mr-2"/>
                      <span className="text-sm font-PerfectDOSVGA437">Summary</span>
                    </div>
                    <div
                      onClick={() => document.getElementById('responsibilities').scrollIntoView({ behavior: 'smooth', block: 'end' })}
                      className="flex items-center p-2 cursor-pointer hover:bg-gray-100 rounded"
                    >
                      <img src={import.meta.env.BASE_URL + 'respon.png'} alt="" className="w-6 h-6 mr-2"/>
                      <span className="text-sm font-PerfectDOSVGA437">Responsibilities</span>
                    </div>
                    <div
                      onClick={() => document.getElementById('purpose').scrollIntoView({ behavior: 'smooth', block: 'end' })}
                      className="flex items-center p-2 cursor-pointer hover:bg-gray-100 rounded"
                    >
                      <img src={import.meta.env.BASE_URL + 'purpose.png'} alt="" className="w-6 h-6 mr-2"/>
                      <span className="text-sm font-PerfectDOSVGA437">Purpose</span>
                    </div>
                    <div
                      onClick={() => document.getElementById('technologies').scrollIntoView({ behavior: 'smooth', block: 'end' })}
                      className="flex items-center p-2 cursor-pointer hover:bg-gray-100 rounded"
                    >
                      <img src={import.meta.env.BASE_URL + 'tech.png'} alt="" className="w-6 h-6 mr-2"/>
                      <span className="text-sm font-PerfectDOSVGA437">Technologies</span>
                    </div>
                  </div>


                  {/* Main content */}
                  <div className="flex-1 pl-8 sticky top-0">
                    <div id="summary" className="mb-8">
                      <div className="bg-gray-50 p-6 rounded-lg border border-black">
                        <h2 className="text-2xl font-apple-garamond-bold text-blue-800 mb-4 flex items-center">
                          <img src={import.meta.env.BASE_URL + 'summary.png'} alt="" className="w-8 h-8 mr-2"/>
                          Project Summary
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h3 className="font-apple-garamond-bold text-gray-700 mb-2">Team Composition</h3>
                            <ul className="list-disc font-apple-garamond list-inside space-y-1 text-gray-600">
                              {selectedFile.content.summary.team.map((member, index) => (
                                <li key={index}>{member}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h3 className="font-apple-garamond-bold text-gray-700 mb-2">My Role</h3>
                            <p className="text-gray-600 font-apple-garamond">{selectedFile.content.summary.myRole}</p>
                            <h3 className="font-apple-garamond-bold text-gray-700 mt-4 mb-2">Timeline</h3>
                            <p className="text-gray-600 font-apple-garamond">{selectedFile.content.summary.timeline}</p>
                          </div>
                          <div className="col-span-2">
                            <h3 className="font-apple-garamond-bold text-gray-700 mb-2">Project Phases</h3>
                            <ul className="list-disc font-apple-garamond list-inside space-y-1 text-gray-600">
                              {selectedFile.content.summary.projectPhases.map((phase, index) => (
                                <li key={index}>{phase}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div id="image" className="mb-8">
                        <img 
                            src={selectedFile.content.image} 
                            onClick={() => window.open(selectedFile.link, '_blank')}
                            alt="" 
                            className="w-full h-120 object-cover rounded-lg shadow-lg border-2 border-black cursor-pointer hover:scale-105 transition-all duration-300"
                        />
                    </div>
                    <div id="responsibilities" className="mb-8">
                      <div className="bg-gray-50 p-6 rounded-lg border border-black">
                        <h2 className="text-2xl font-apple-garamond-bold text-blue-800 mb-4 flex items-center">
                          <img src={import.meta.env.BASE_URL + 'respon.png'} alt="" className="w-8 h-8 mr-2"/>
                          Responsibilities
                        </h2>
                        <ul className="space-y-3">
                          {selectedFile.content.responsibilities.map((resp, index) => (
                            <li key={index} className="flex items-center">
                              <span className="font-apple-garamond text-gray-700">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div id="purpose" className="mb-8">
                      <div className="bg-gray-50 p-6 rounded-lg border border-black">
                        <h2 className="text-2xl font-apple-garamond-bold text-blue-800 mb-4 flex items-center">
                          <img src={import.meta.env.BASE_URL + 'purpose.png'} alt="" className="w-8 h-8 mr-2"/>
                          Purpose
                        </h2>
                        <ul className="space-y-3">
                          {selectedFile.content.purpose.map((pur, index) => (
                            <li key={index} className="flex items-center">
                              <span className="font-apple-garamond text-gray-700">{pur}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div id="technologies">
                      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                        <h2 className="text-2xl font-PerfectDOSVGA437 text-blue-800 mb-4 flex items-center">
                          <img src={import.meta.env.BASE_URL + 'tech.png'} alt="" className="w-8 h-8 mr-2"/>
                          Technologies
                        </h2>
                        <div className="flex flex-wrap gap-3">
                          {selectedFile.content.technologies.map((technology, index) => (
                            <span
                              key={index}
                              className="px-4 py-2 bg-white text-blue-700 rounded-full border-2 border-blue-200 font-PerfectDOSVGA437 shadow-sm"
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
    </div>
  );
}

export default Experiences;