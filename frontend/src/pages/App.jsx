import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Layout from './Layout';
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}
