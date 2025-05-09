import { useState, useRef, useEffect } from 'react';
import { Menu } from '@headlessui/react';
import click from '../audio/click.mp3';


function Footer() {
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [showSpotify, setShowSpotify] = useState(false);
  const [showPaint, setShowPaint] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentColor, setCurrentColor] = useState('#000000');
  const [currentTool, setCurrentTool] = useState('pencil');
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [showShutdownWarning, setShowShutdownWarning] = useState(false);
  
  useEffect(() => {
    if (showPaint) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      context.lineCap = 'round';
      context.strokeStyle = currentColor;
      context.lineWidth = currentTool === 'eraser' ? 20 : 2;
      contextRef.current = context;
    }
  }, [showPaint, currentColor, currentTool]);

  const startDrawing = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (currentTool === 'eraser') {
      contextRef.current.globalCompositeOperation = 'destination-out';
    } else {
      contextRef.current.globalCompositeOperation = 'source-over';
      contextRef.current.strokeStyle = currentColor;
    }

    contextRef.current.beginPath();
    contextRef.current.moveTo(x, y);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
    if (currentTool === 'eraser') {
      contextRef.current.globalCompositeOperation = 'source-over';
    }
  };

  const draw = (event) => {
    if (!isDrawing) return;
    
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    contextRef.current.lineTo(x, y);
    contextRef.current.stroke();
  };

  return (
    <footer className="bg-blue-950 border-t-2 border-white">
      <div className="w-full h-12 flex items-center px-2">
        <Menu as="div" className="relative">
          <Menu.Button
            className={`
              flex items-center
              px-4 py-1
              font-kodchasan-regular text-sm
              border-2 border-t-white border-l-white border-r-black border-b-black
              bg-blue-200 hover:bg-blue-300
            `}
            onClick={() => setIsStartMenuOpen(!isStartMenuOpen)}
            onMouseDown={() => {
              const audio = new Audio(click);
              audio.play();
            }}
          >
            <span className="mr-1 font-PerfectDOSVGA437"><img src={import.meta.env.BASE_URL + 'StartIcon.png'} alt="Start" className="w-6 h-6" /></span>
            Start
          </Menu.Button>

          <Menu.Items className="absolute bottom-full left-0 mb-1 w-64 bg-[#c0c0c0] border-2 border-white">
            <div className="p-2 space-y-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => setShowPaint(true)}
                    className={`w-full text-left px-4 py-2 font-PerfectDOSVGA437 ${active ? 'bg-[#000080] text-white' : ''}`}
                    onMouseDown={() => {
                      const audio = new Audio(click);
                      audio.play();
                    }}
                  >
                    <span className="mr-2">🎨</span>Paint
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => setShowSpotify(true)}
                    className={`w-full text-left px-4 py-2 font-PerfectDOSVGA437 ${active ? 'bg-[#000080] text-white' : ''}`}
                    onMouseDown={() => {
                      const audio = new Audio(click);
                      audio.play();
                    }}
                  >
                    <span className="mr-2">🎵</span>Music Player
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a href="https://pin.it/427HWOdjJ" onMouseDown={() => {
                    const audio = new Audio(click);
                    audio.play();
                  }} className={`block px-4 py-2 font-PerfectDOSVGA437 ${active ? 'bg-[#000080] text-white' : ''}`}>
                    <span className="mr-2">📌</span>Pinterest
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a href="#" onMouseDown={() => {
                    const audio = new Audio(click);
                    audio.play();
                  }} className={`block px-4 py-2 font-PerfectDOSVGA437 ${active ? 'bg-[#000080] text-white' : ''}`}>
                    <span className="mr-2">⚙️</span>Settings
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a href="#" onMouseDown={() => {
                    const audio = new Audio(click);
                    audio.play();
                  }} className={`block px-4 py-2 font-PerfectDOSVGA437 ${active ? 'bg-[#000080] text-white' : ''}`}>
                    <span className="mr-2">❓</span>Help
                  </a>
                )}
              </Menu.Item>
              <div className="border-t border-gray-400 my-2"></div>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => setShowShutdownWarning(true)} 
                    onMouseDown={() => {
                      const audio = new Audio(click);
                      audio.play();
                    }}
                    className={`block w-full text-left px-4 py-2 font-PerfectDOSVGA437 ${active ? "bg-[#000080] text-white" : ""}`}
                  >
                    <span className="mr-2">🚪</span>Shut Down...
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>

        {showPaint && (
          <div className="fixed bottom-16 left-0 p-4 bg-[#c0c0c0] border-2 border-white rounded-lg shadow-xl w-[90%] md:w-auto h-[70vh] md:h-auto overflow-y-auto">
            <div className="flex justify-between items-center mb-2 bg-gradient-to-r from-[#000080] to-[#4169E1] p-2 sticky top-0 z-10">
              <h3 className="font-PerfectDOSVGA437 font-bold text-white">Paint</h3>
              <button 
                onClick={() => setShowPaint(false)}
                onMouseDown={() => {
                  const audio = new Audio(click);
                  audio.play();
                }}
                className="px-2 py-1 bg-[#c0c0c0] text-black hover:bg-red-600 hover:text-white rounded"
              >
                ✖
              </button>
            </div>
            <div className="flex flex-col md:flex-row bg-white border-2 border-gray-600 h-[calc(90vh-4rem)] md:h-auto">
              <div className="flex flex-row md:flex-col gap-2 p-2 bg-[#c0c0c0] border-b-2 md:border-b-0 md:border-r-2 border-gray-600 overflow-x-auto md:overflow-x-visible">
                <button 
                  onClick={() => setCurrentTool('pencil')}
                  onMouseDown={() => {
                    const audio = new Audio(click);
                    audio.play();
                  }}
                  className={`min-w-[2.5rem] px-2 py-1 bg-[#c0c0c0] border-2 border-gray-500 hover:bg-[#b1b1b1] ${currentTool === 'pencil' ? 'bg-gray-400' : 'bg-[#b1b1b1]'}`}
                >✏️</button>
                <button 
                  onClick={() => setCurrentTool('brush')}
                  onMouseDown={() => {
                    const audio = new Audio(click);
                    audio.play();
                  }}
                  className={`min-w-[2.5rem] px-2 py-1 bg-[#c0c0c0] border-2 border-gray-500 hover:bg-[#b1b1b1] ${currentTool === 'brush' ? 'bg-gray-400' : 'bg-[#b1b1b1]'}`}
                >🖌️</button>
                <button 
                  onClick={() => setCurrentTool('eraser')}
                  onMouseDown={() => {
                    const audio = new Audio(click);
                    audio.play();
                  }}
                  className={`min-w-[2.5rem] px-2 py-1 bg-[#c0c0c0] border-2 border-gray-500 hover:bg-[#b1b1b1] ${currentTool === 'eraser' ? 'bg-gray-400' : 'bg-[#b1b1b1]'}`}
                >🧹</button>
                <div className="grid grid-cols-2 gap-1 min-w-fit">
                  <button
                    className="w-6 h-6 border-3 border-gray-600"
                    style={{backgroundColor: '#000000'}}
                    onClick={() => setCurrentColor('#000000')}
                    onMouseDown={() => {
                      const audio = new Audio(click);
                      audio.play();
                    }}
                  />
                  <button 
                    className="w-6 h-6 border-3 border-gray-500"
                    style={{backgroundColor: '#ff0000'}}
                    onClick={() => setCurrentColor('#ff0000')}
                    onMouseDown={() => {
                      const audio = new Audio(click);
                      audio.play();
                    }}
                  />
                  <button
                    className="w-6 h-6 border-3 border-gray-500" 
                    style={{backgroundColor: '#00ff00'}}
                    onClick={() => setCurrentColor('#00ff00')}
                    onMouseDown={() => {
                      const audio = new Audio(click);
                      audio.play();
                    }}
                  />
                  <button
                    className="w-6 h-6 border-3 border-gray-500"
                    style={{backgroundColor: '#0000ff'}}
                    onClick={() => setCurrentColor('#0000ff')}
                    onMouseDown={() => {
                      const audio = new Audio(click);
                      audio.play();
                    }}
                  />
                  <input 
                    type="color" 
                    className="w-12 h-12 col-span-2 border-3 border-gray-500"
                    value={currentColor}
                    onChange={(e) => setCurrentColor(e.target.value)}
                    onMouseDown={() => {
                      const audio = new Audio(click);
                      audio.play();
                    }}
                  />
                </div>
              </div>
              <canvas 
                ref={canvasRef}
                width="500"
                height="400"
                onMouseDown={startDrawing}
                onMouseUp={finishDrawing}
                onMouseMove={draw}
                onMouseLeave={finishDrawing}
                onTouchStart={(e) => {
                  e.preventDefault();
                  const touch = e.touches[0];
                  const rect = e.target.getBoundingClientRect();
                  const x = touch.clientX - rect.left;
                  const y = touch.clientY - rect.top;
                  startDrawing({clientX: x + rect.left, clientY: y + rect.top});
                }}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  finishDrawing();
                }}
                onTouchMove={(e) => {
                  e.preventDefault();
                  const touch = e.touches[0];
                  const rect = e.target.getBoundingClientRect();
                  const x = touch.clientX - rect.left;
                  const y = touch.clientY - rect.top;
                  draw({clientX: x + rect.left, clientY: y + rect.top});
                }}
                className="border border-gray-400 bg-white cursor-crosshair w-full h-full touch-none"
              ></canvas>
            </div>
          </div>
        )}

        {showSpotify && (
          <div className="fixed bottom-16 left-0 p-4 bg-[#c0c0c0] border-2 border-white rounded-sm shadow-xl w-full md:w-auto">
            <div className="flex justify-between items-center mb-2 bg-gradient-to-r from-[#000080] to-[#4169E1] p-2 sticky top-0 z-10">
              <h3 className="font-PerfectDOSVGA437 font-bold text-white">Music Player</h3>
              <button 
                onClick={() => setShowSpotify(false)}
                onMouseDown={() => {
                  const audio = new Audio(click);
                  audio.play();
                }}
                className="px-2 py-1 bg-red-300 text-white hover:bg-red-400 border-2 border-r-white border-b-white border-l-gray-500 border-t-gray-500"
              >
                ✖
              </button>
            </div>
            <iframe
              src="https://open.spotify.com/embed/playlist/23PuoC9Hcj0oA8ZplGJOJ0?si=0200b97c7cd24269"
              width="100%"
              height="380"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-sm"
              style={{ cursor: 'none', pointerEvents: 'auto' }}
            ></iframe>
          </div>
        )}
        {showShutdownWarning && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-96 border border-gray-900 bg-gray-200 shadow-md">
              <div className="bg-[#000080] text-white px-2 py-1 flex justify-between items-center font-PerfectDOSVGA437 text-sm">
                <span>You made an oopsie!</span>
                <button onClick={() => setShowShutdownWarning(false)} onMouseDown={() => {
                  const audio = new Audio(click);
                  audio.play();
                }} className="text-white hover:bg-gray-500 px-1">
                  ✕
                </button>
              </div>
              <div className="p-4 text-black font-kodchasan-regular text-sm">
                <div className="flex items-start">
                  <span className="text-xl mr-3">⚠️</span>
                  <p>Your browser prevents this page from closing automatically. Please close it manually.</p>
                </div>
                <div className="mt-4 flex justify-center">
                  <button
                    onClick={() => setShowShutdownWarning(false)}
                    className="border border-black px-4 py-1 bg-gray-300 hover:bg-gray-400 active:bg-gray-500 shadow-md"
                    onMouseDown={() => {
                      const audio = new Audio(click);
                      audio.play();
                    }}
                  >
                    OK!
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      
        <div className="flex-1"></div>
        <div className="hidden md:block bg-blue-100 px-4 py-1 border-2 border-t-gray-600 border-l-gray-600 border-r-white border-b-white font-PerfectDOSVGA437 text-sm">
          © All rights reserved Farahnaz Hoque 2025
        </div>
      </div>
    </footer>
  );
}

export default Footer;