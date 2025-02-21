import { Menu } from '@headlessui/react'
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Home', to: '/home', current: false },
  { name: 'Podcast', to: '/podcast', current: false },
  { name: 'Newsletter', to: '/newsletter', current: false }, 
  { name: 'Forum', to: '/forum', current: false },
  { name: 'About', to: '/about', current: false },
];

export default function Navbar() {
  const location = useLocation();

  const updatedNavigation = navigation.map(item => ({
    ...item,
    current: location.pathname === item.to
  }));

  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-end gap-2">
          {updatedNavigation.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="flex flex-col items-end text-right font-mono text-white hover:text-[#fbcfe8]"
            >
              <img 
                src="../../public/NavFolder.png"
                alt={`${item.name} folder`}
                className={`w-12 h-12 ${item.current ? 'brightness-110' : 'hover:brightness-110'}`}
              />
              {item.name}
            </Link>
          ))}

          {/* Settings Folder */}
          <Menu as="div" className="relative">
            <Menu.Button 
              className={`
                flex items-center
                px-4 py-1
                font-mono text-sm
                border-2 border-t-white border-l-white border-r-black border-b-black
                bg-[#c0c0c0] hover:bg-[#d3d3d3]
              `}
            >
              <span className="mr-2">📁</span>
              Settings
            </Menu.Button>
            <Menu.Items className="absolute right-0 z-10 mt-1 w-48 bg-black border border-[#00ff00]">
              <Menu.Item>
                {({ active }) => (
                  <a href="#" className={`block px-4 py-2 text-[#00ff00] font-mono ${active ? 'bg-[#003300]' : ''}`}>
                    &gt; Profile
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a href="#" className={`block px-4 py-2 text-[#00ff00] font-mono ${active ? 'bg-[#003300]' : ''}`}>
                    &gt; Settings
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a href="#" className={`block px-4 py-2 text-[#00ff00] font-mono ${active ? 'bg-[#003300]' : ''}`}>
                    &gt; Sign out
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </div>
    </div>
  );
}
