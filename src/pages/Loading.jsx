import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

export default function Loading({ setHomeLoaded }) {
  const [text, setText] = useState('');
  const [redirect, setRedirect] = useState(false);

  const loadingText = [
    'Initializing system...',
    'Checking memory...',
    'Loading kernel...',
    'System check complete...',
    'Rebooting...',
    'Starting computer...'
  ];

  useEffect(() => {
    let currentIndex = 0;
    let currentChar = 0;
    let mounted = true;
    let newText = ''; // Store text separately to avoid `undefined`

    const typeText = () => {
      if (!mounted) return;

      if (currentIndex < loadingText.length) {
        if (currentChar < loadingText[currentIndex].length) {
          newText += loadingText[currentIndex][currentChar];
          setText(newText);
          currentChar++;
          setTimeout(typeText, 50); // Type each character
        } else {
          newText += '\n'; // Add a newline properly
          setText(newText);
          currentChar = 0;
          currentIndex++;
          setTimeout(typeText, 700); // Delay before next line
        }
      } else {
        setTimeout(() => {
          if (mounted) {
            setRedirect(true);
          }
        }, 1000); // Redirect after animation completes
      }
    };

    // Start typing animation
    setTimeout(typeText, 100);

    // Load home page in background
    setTimeout(() => {
      if (mounted) {
        setHomeLoaded(true);
      }
    }, 5000);

    return () => {
      mounted = false;
    };
  }, [setHomeLoaded]);

  if (redirect) {
    return <Navigate to="/home" replace />;
  }

  return (
    <div className="h-screen w-screen bg-blue-900 flex justify-start p-8">
      <div className="w-96 bg-transparent">
        <pre className="font-mono text-pink-400 whitespace-pre-line text-left">
          {text}
          <span className="animate-pulse">_</span>
        </pre>
      </div>
    </div>
  );
}
