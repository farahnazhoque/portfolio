// Layout.jsx
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { memo } from 'react';
import Footer from './Footer';

const Layout = memo(function Layout() {
  return (
    <div 
      className="relative w-screen h-screen overflow-hidden"
      style={{
        backgroundImage: `url('../../public/BackgroundGif.gif')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        // Keeps the background from moving while scrolling the content
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Sticky/Fixed Navbar at top (optional) */}
      <div className="w-full sticky top-100 flex justify-end z-50">
        <Navbar />
      </div>

      {/* Main content has bottom padding to avoid overlap with fixed footer */}
      <main className="pb-20">
        <Outlet /> {/* Renders Home or other pages */}
      </main>

      {/* Fixed Footer at the bottom */}
      <div className="w-full fixed bottom-0 left-0 right-0 z-50">
        <Footer />
      </div>
    </div>
  );
});

export default Layout;
