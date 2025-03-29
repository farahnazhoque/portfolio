import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import '../style/App.css';
import loading from '../audio/loading.mp3'; 

export default function Loading({ setHomeLoaded }) {
  const [text, setText] = useState('');
  const [redirect, setRedirect] = useState(false);

  const loadingText = [
    'Initializing system...',
    'System check complete...',
    'Rebooting...',
    'Starting computer...'
  ];

  // Typing animation effect
  useEffect(() => {
    let currentIndex = 0;
    let currentChar = 0;
    let mounted = true;
    let newText = '';

    const typeText = () => {
      if (!mounted) return;

      if (currentIndex < loadingText.length) {
        if (currentChar < loadingText[currentIndex].length) {
          newText += loadingText[currentIndex][currentChar];
          setText(newText);
          currentChar++;
          setTimeout(typeText, 50);
        } else {
          newText += '\n';
          setText(newText);
          currentChar = 0;
          currentIndex++;
          setTimeout(typeText, 700);
        }
      } else {
        setTimeout(() => {
          if (mounted) {
            setRedirect(true);
          }
        }, 1000);
      }
    };

    // Start the typing animation
    setTimeout(typeText, 100);

    // Preload the home page in background
    setTimeout(() => {
      if (mounted) {
        setHomeLoaded(true);
      }
    }, 5000);

    return () => {
      mounted = false;
    };
  }, [setHomeLoaded]);

  // Audio playback effect
  useEffect(() => {
    const audioObj = new Audio(loading);
    audioObj.play().catch((error) => {
      console.error('Error playing audio:', error);
    });

    // Optionally pause the audio if the component unmounts
    return () => {
      audioObj.pause();
    };
  }, []);

  if (redirect) {
    return <Navigate to="/home" replace />;
  }

  return (
    <div className="h-screen w-screen bg-blue-900 flex justify-start p-8">
      <div className="w-96 bg-transparent">
        <pre className="font-mono text-pink-200 whitespace-pre-line font-PerfectDOSVGA437 text-left">
          {text}
          <span className="animate-pulse">_</span>
        </pre>
      </div>
    </div>
  );
}