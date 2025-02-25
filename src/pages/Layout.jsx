// Layout.jsx
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { memo, useState, useEffect } from 'react';
import Footer from './Footer';

const Layout = memo(function Layout() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);
    return () => window.removeEventListener('mousemove', updateCursorPosition);
  }, []);

  useEffect(() => {
    const handleHoverState = () => {
      const hoveredElement = document.elementFromPoint(cursorPosition.x, cursorPosition.y);
      const isClickable = hoveredElement?.matches('a, button, [role="button"], input, select, textarea') ||
                         hoveredElement?.closest('a, button, [role="button"], input, select, textarea');
      setIsHovering(!!isClickable);
    };

    handleHoverState();
  }, [cursorPosition]);

  return (
    <div 
      className="relative w-screen h-screen overflow-hidden"
      style={{
        backgroundImage: `url('../../public/BackgroundGif.gif')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        cursor: 'none' // Hide the default cursor
      }}
    >
      <div
        className="fixed w-10 h-10 pointer-events-none z-[100]"
        style={{
          left: cursorPosition.x - 16,
          top: cursorPosition.y - 16,
          backgroundImage: `url('${isHovering ? '../../public/SelectCursor.png' : '../../public/RegularCursor.png'}')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          transform: 'translate(0, 0)',
          transition: 'background-image 0.1s ease-in-out',
          cursor: 'none'
        }}
      />

      {/* Main content has bottom padding to avoid overlap with fixed footer */}
      <main className="pb-20">
        <Outlet /> {/* Renders Home or other pages */}
      </main>

      {/* Fixed Navbar at bottom right */}
      <div className="fixed bottom-20 right-0 z-50">
        <Navbar />
      </div>

      {/* Fixed Footer at the bottom */}
      <div className="w-full fixed bottom-0 left-0 right-0 z-50">
        <Footer />
      </div>
    </div>
  );
});

export default Layout;
