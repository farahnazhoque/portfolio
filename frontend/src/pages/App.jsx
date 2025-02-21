import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './Home';
import Layout from './Layout';

function IntroPage() {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    // After 3 seconds, set redirect to true
    const timer = setTimeout(() => {
      setRedirect(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (redirect) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-blue-950">
      <div className="text-white font-mono text-4xl animate-bounce">
        Welcome to My Portfolio
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<IntroPage />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}
