import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { memo } from 'react';

const Layout = memo(function Layout() {
  return (
    <div 
      className="bg-[#c0c0c0] min-h-screen" 
      style={{
        backgroundImage: `url('../../public/BackgroundGif.gif')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    >
      <div className="w-full sticky top-100 flex justify-end z-50">
        <Navbar />
      </div>
      <main>
        <Outlet /> {/* This will render the respective page content */}
      </main>
    </div>
  );
});

export default Layout;
