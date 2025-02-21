import { useState } from 'react';
import { Menu } from '@headlessui/react';

function Footer() {
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

  return (
    <footer className="bg-blue-950 border-t-2 border-white">
      <div className="w-full h-12 flex items-center px-2">
        <Menu as="div" className="relative">
          <Menu.Button
            className={`
              flex items-center
              px-4 py-1
              font-mono text-sm
              border-2 border-t-white border-l-white border-r-black border-b-black
              bg-blue-200 hover:bg-blue-300
            `}
            onClick={() => setIsStartMenuOpen(!isStartMenuOpen)}
          >
            <span className="mr-1"><img src="../../public/StartIcon.png" alt="Start" className="w-6 h-6" /></span>
            Start
          </Menu.Button>

          <Menu.Items className="absolute bottom-full left-0 mb-1 w-64 bg-[#c0c0c0] border-2 border-white">
            <div className="p-2 space-y-1">
              <Menu.Item>
                {({ active }) => (
                  <a href="#" className={`block px-4 py-2 font-mono ${active ? 'bg-[#000080] text-white' : ''}`}>
                    <span className="mr-2">📄</span>Programs
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a href="#" className={`block px-4 py-2 font-mono ${active ? 'bg-[#000080] text-white' : ''}`}>
                    <span className="mr-2">⚙️</span>Settings
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a href="#" className={`block px-4 py-2 font-mono ${active ? 'bg-[#000080] text-white' : ''}`}>
                    <span className="mr-2">❓</span>Help
                  </a>
                )}
              </Menu.Item>
              <div className="border-t border-gray-400 my-2"></div>
              <Menu.Item>
                {({ active }) => (
                  <a href="#" className={`block px-4 py-2 font-mono ${active ? 'bg-[#000080] text-white' : ''}`}>
                    <span className="mr-2">🚪</span>Shut Down...
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>

        <div className="flex-1"></div>
        <div className="bg-blue-100 px-4 py-1 border-2 border-t-gray-600 border-l-gray-600 border-r-white border-b-white font-mono text-sm">
          © All rights reserved Farahnaz Hoque 2025
        </div>
      </div>
    </footer>
  );
}

export default Footer;