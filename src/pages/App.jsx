import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Home from './Home';
import Layout from './Layout';
import Loading from './Loading';
import Experiences from './Experiences';
import Projects from './Projects';
import About from './About';
export default function App() {
  const [homeLoaded, setHomeLoaded] = useState(false);

  return (
    <Routes>
      {/* Show Loading first, allowing Home to load in the background */}
      <Route path="/loading" element={<Loading setHomeLoaded={setHomeLoaded} />} />

      {/* Layout wraps all main pages */}
      <Route element={<Layout />}>
        {/* Only show Home when loaded, otherwise redirect to loading */}
        <Route 
          path="/home" 
          element={homeLoaded ? <Home /> : <Navigate to="/loading" replace />} 
        />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/where" element={<div>This page is located at frontend/src/pages/App.jsx</div>} />
        <Route path="/layout" element={<Layout />} />
      </Route>

      {/* Default redirect to loading screen if not loaded, otherwise go to home */}
      <Route 
        path="*" 
        element={<Navigate to={homeLoaded ? "/home" : "/loading"} replace />} 
      />
    </Routes>
  );
}