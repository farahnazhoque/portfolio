import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const navigation = [
  { name: 'Home', to: '/home', current: false },
  { name: 'Experiences', to: '/experiences', current: false },
  { name: 'Projects', to: '/projects', current: false }, 
  { name: 'About', to: '/about', current: false },
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
            className="flex flex-col items-end"
          >
            <img 
              src={import.meta.env.BASE_URL + 'NavFolder.png'}
              alt="Menu folder"
              className="w-12 h-12 hover:brightness-110"
            />
            <span className="font-PerfectDOSVGA437 text-white">Menu</span>
          </button>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center" style={{ backgroundImage : import.meta.env.BASE_URL + 'ModalBack.gif', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
              <div className="bg-[#c0c0c0] p-6 rounded-lg border-2 border-white w-80">
                <div className="flex justify-between items-center mb-4">.
                  <h2 className="font-PerfectDOSVGA437 text-lg">Menu</h2>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="text-black hover:text-gray-700"
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
                      className="flex items-center gap-3 font-PerfectDOSVGA437 text-black hover:text-[#fbcfe8]"
                    >
                      <img 
                        src={import.meta.env.BASE_URL + 'NavFolder.png'}
                        alt={`${item.name} folder`}
                        className={`w-10 h-10 ${item.current ? 'brightness-110' : 'hover:brightness-110'}`}
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
              className="flex flex-col items-end text-right justify-end font-PerfectDOSVGA437 text-white hover:text-[#fbcfe8] text-lg"
            >
              <img 
                src={import.meta.env.BASE_URL + 'NavFolder.png'}
                alt={`${item.name} folder`}
                className={`w-16 h-16 ${item.current ? 'brightness-110' : 'hover:brightness-110'}`}
              />
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
