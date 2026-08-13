import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import SendAParcel from './pages/SendAParcel';
import Wholesalers from './pages/Wholesalers';
import Brands from './pages/Brands';
import Drivers from './pages/Drivers';
import PlatformApi from './pages/PlatformApi';
import About from './pages/About';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 4500); // Show loading for 4.5 seconds

    return () => clearTimeout(loadingTimer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <h2 className="loading-text">Welcome to <span className="highlight">Locals ZA</span></h2>
          <div className="loading-bar"><span /></div>
        </div>
      </div>
    );
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="send-a-parcel" element={<SendAParcel />} />
        <Route path="wholesalers" element={<Wholesalers />} />
        <Route path="brands" element={<Brands />} />
        <Route path="drivers" element={<Drivers />} />
        <Route path="platform-api" element={<PlatformApi />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App
