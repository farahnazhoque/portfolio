import { useState, useEffect, useRef } from 'react';
import click from '../audio/click.mp3';
import { Link } from 'react-router-dom';

export default function About() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm Farahnaz.", sender: 'bot', timestamp: new Date() },
    { id: 2, text: "Welcome to my About Page! Feel free to choose any of the options below to learn more about me.", sender: 'bot', timestamp: new Date() }
  ]);

  const [selectedOption, setSelectedOption] = useState('');
  const messagesEndRef = useRef(null);

  // Map questions to predefined responses
  const responses = {
    swe: "I pursued software development mainly because since seventh grade, I have always been interested in learning the inner workings of how computers, websites, and apps work. When I heard about the opportunity to not only create applications like some of my favorite games, and websites, but also problem-solve (I was really into maths and investigative journalism), I knew it was the right choice.",
    languages: "I have worked with Python, Java, C++/C, JavaScript, TypeScript, HTML, and CSS!",
    lang: "My favorite programming language is Python because, like many others, this was the first language I learned the most in-depth. I also like it because it's a very versatile language that can be used for a wide range of applications, from web development to machine learning.",
    team: "I enjoy working in a team because I feel like the most beautiful parts of developing and creation are inspiration and guidance from others. Without the minds of others, I do not think I would have been able to create the projects thatI have today.",
    techstack: "I have worked with React, Node.js, MySQL, AWS, PostgreSQL, Google Firebase, Supabase, MongoDB, Docker and more!",
    projects: `One of my favorite projects was a personal safety app for women, built with React Native and AWS services. 
               Here is the link to the GitHub repository: <a href='https://github.com/G-Zhen/Safe-Circle' target='_blank' rel='noopener noreferrer' class="text-blue-500 underline">SafeCircle GitHub</a>`,
    goals: "My career goal is to innovate software solutions for pressing matters in the world, especially serving underserved communities. But on a personal level, I wish to grow and be a better version of myself from yesterday me.",
    hobbies: "I love reading, writing, making playlists, designing graphics, watching movies and deep diving into topics that interest me!",
    music: "Here is a collection of my favorite songs at the moment: <a href='https://open.spotify.com/playlist/23PuoC9Hcj0oA8ZplGJOJ0?si=80c7a7694e0b4031' target='_blank' rel='noopener noreferrer' style='color: blue; text-decoration: underline;'>My Favorite Songs</a>",
    movies: "La La Land, Dead Poets Society, Interstellar and Kiki's Delivery Service. Here is my Letterboxd: <a href='https://letterboxd.com/withlovefh/' target='_blank' rel='noopener noreferrer' style='color: blue; text-decoration: underline;'>Letterboxd</a>",
    books: "I can never pick a favorite book but the one that I still go back to has to be Beartown by Fredrik Backman. Here is my bookstagram: <a href='https://www.instagram.com/farahinthemaking/' target='_blank' rel='noopener noreferrer' style='color: blue; text-decoration: underline;'>Bookstagram</a>",
  };

  // Updates state when user selects an option
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // Handle send button click
  const handleSendClick = () => {
    if (!selectedOption) return; // Prevent sending if nothing is selected

    const userMessage = {
      id: messages.length + 1,
      text: document.querySelector(`option[value="${selectedOption}"]`).textContent,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: responses[selectedOption] || "That's interesting! Tell me more.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setSelectedOption(''); // Reset selection
  };

  // Auto-scroll to latest message when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex border-2 border-black flex-col min-h-[450px] max-h-[650px] w-full md:w-[600px] mx-auto p-4 bg-[#c0c0c0] rounded-lg shadow-lg lg:mt-[100px] md:mt-[100px] sm:mt-[100px] mt-[100px]">
      
      {/* Header - Chat Title */}
      <div className="bg-pink-200 border-2 border-black px-3 py-2 flex items-center justify-between rounded-lg mb-4">
        <span className="text-pink-800 font-PerfectDOSVGA437 text-lg">💬 About Me - Chat</span>
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-[#c0c0c0] rounded-md border-2 border-t-white border-l-white border-r-black border-b-black hover:bg-gray-300 transition-colors duration-200">_</button>
          <button className="px-3 py-1 bg-[#c0c0c0] rounded-md border-2 border-t-white border-l-white border-r-black border-b-black hover:bg-gray-300 transition-colors duration-200">□</button>
          <Link to="/layout" onMouseDown={() => {
            const audio = new Audio(click);
            audio.play();
          }} className="px-3 py-1 bg-[#c0c0c0] rounded-md border-2 border-t-white border-l-white border-r-black border-b-black hover:bg-gray-300 transition-colors duration-200">✖</Link>
        </div>
      </div>

      {/* Messages List - Scrollable */}
      <div 
        id="message-container" 
        className="flex-1 overflow-y-auto space-y-4 p-4 border-2 border-black bg-white rounded-lg"
      >
        {messages.map(message => (
          <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[70%] rounded-lg p-3 ${message.sender === 'user' ? 'bg-pink-200 text-black' : 'bg-blue-200 text-black'}`}>
              {message.sender === 'bot' ? (
                <p dangerouslySetInnerHTML={{ __html: message.text }} />
              ) : (
                <p>{message.text}</p>
              )}
              <p className="text-xs opacity-70 mt-1">{message.timestamp.toLocaleTimeString()}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Select Box & Send Button - Stuck at Bottom */}
      <div className="sticky bottom-0 left-0 right-0 bg-white p-4 border-t flex gap-2 justify-between">
        <select
          value={selectedOption}
          onChange={handleSelectChange}
          className="block w-full bg-white text-black p-2 rounded-lg border border-gray-400 focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select a question...</option>
          <option value="swe">Why did you pursue a career in software development?</option>
          <option value="languages">What languages have you worked with?</option>
          <option value="lang">What is your favorite programming language?</option>
          <option value="team">Why do you like working in a team?</option>
          <option value="techstack">What are some tech stacks you have worked with?</option>
          <option value="projects">Can you tell me about some of your projects?</option>
          <option value="goals">What are your career goals?</option>
          <option value="hobbies">What are some of your hobbies?</option>
          <option value="music">What is your favorite song at the moment?</option>
          <option value="movies">What are some of your favorite movies?</option>
          <option value="books">What are some of your favorite books?</option>
        </select>
        <button 
          onClick={handleSendClick} 
          onMouseDown={() => {
            const audio = new Audio(click);
            audio.play();
          }} 
          className="bg-pink-200 text-pink-800 px-4 py-2 rounded-lg hover:bg-pink-400 transition-colors duration-200"
        >
          Send
        </button>
      </div>

    </div>
  );
}
