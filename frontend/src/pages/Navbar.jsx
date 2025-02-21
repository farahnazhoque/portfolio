import { Menu } from '@headlessui/react'
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Home', to: '/home', current: false },
  { name: 'Experiences', to: '/experiences', current: false },
  { name: 'Projects', to: '/projects', current: false }, 
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
        <div className="flex flex-col items-end gap-4">
          {updatedNavigation.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="flex flex-col items-end text-right font-mono text-white hover:text-[#fbcfe8] text-lg"
            >
              <img 
                src="../../public/NavFolder.png"
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
