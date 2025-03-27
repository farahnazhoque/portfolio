import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import click from '../audio/click.mp3';
import about from '../audio/about.wav';
import experiences from '../audio/experiences.m4a';
import projects from '../audio/projects.mp3';
import explorer from '../audio/explorer.wav';
const navigation = [
  { name: 'Home', to: '/home', current: false, icon: 'missionM.png', sound: explorer },
  { name: 'Experiences', to: '/experiences', current: false, icon: 'experiencesM.png', sound: experiences },
  { name: 'Projects', to: '/projects', current: false, icon: 'projectsM.png', sound: projects }, 
  { name: 'About', to: '/about', current: false, icon: 'aboutM.png', sound: about },
];

export default function Navbar() {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const updatedNavigation = navigation.map(item => ({
    ...item,
    current: location.pathname === item.to
  }));

  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Menu */}
        <div className="lg:hidden fixed top-4 left-4">
          <button
          
            onClick={() => setIsModalOpen(true)}
            onMouseDown={() => {
              const audio = new Audio(click);
              audio.play();
            }}
            className="flex flex-col items-end hover:scale-110 transition-all duration-200"
          >
            <img 
              src={import.meta.env.BASE_URL + 'NavFolder.png'}
              alt="Menu folder"
              className="w-12 h-12 hover:brightness-110 "
            />
            <span className="font-PerfectDOSVGA437 text-white">Menu</span>
          </button>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center" style={{ backgroundImage: `url(/ModalBack.gif)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
              <div className="bg-[#c0c0c0] p-6 rounded-lg border-2 border-white w-80">
                <div className="flex justify-between items-center mb-4">.
                  <h2 className="font-PerfectDOSVGA437 text-lg">Menu</h2>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="text-black hover:text-gray-700"
                    onMouseDown={() => {
                      const audio = new Audio(click);
                      audio.play();
                    }}
                  >
                    ✖
                  </button>
                </div>
                <div className="flex flex-col gap-4">
                  {updatedNavigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      onClick={() => setIsModalOpen(false)}
                      onMouseEnter={() => {
                        const audio = new Audio(item.sound);
                        audio.play();
                      }}
                      onMouseDown={() => {
                        const audio = new Audio(click);
                        audio.play();
                      }}
                      className="flex items-center gap-3 font-PerfectDOSVGA437 text-black hover:text-[#fbcfe8] hover:scale-110 transition-all duration-200"
                    >
                      <img 
                      src={import.meta.env.BASE_URL + item.icon}
                    
                      onMouseDown={() => {
                        const audio = new Audio(click);
                        audio.play();
                      }}
                      alt={`${item.name} folder`}
                        className={`w-10 h-10 ${item.current ? 'brightness-110' : 'hover:brightness-110 hover:scale-110 transition-all duration-200'}`}
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:flex-col items-end gap-4 bg-transparent backdrop-blur-none">
          {updatedNavigation.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              onMouseEnter={() => {
                const audio = new Audio(item.sound);
                audio.play();
              }}
              onMouseDown={() => {
                const audio = new Audio(click);
                audio.play();
              }}
              className="flex flex-col items-end text-right justify-end font-PerfectDOSVGA437 text-white hover:text-[#fbcfe8] text-lg"
            >
              <img 
                src={import.meta.env.BASE_URL + item.icon}
                alt={`${item.name} folder`}
                className={`w-16 h-16 ${item.current ? 'brightness-110' : 'hover:brightness-110 hover:scale-110 transition-all duration-200'}`}
              />
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
