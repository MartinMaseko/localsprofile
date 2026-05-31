import { useEffect, useRef, useState } from 'react';
import Menu from './components/menu/menu.tsx';
import Overlay from './components/menu/overlay.tsx';
import MobileContent from './components/menu/mobileContent.tsx';
import { menuContent } from './components/menu/menuContent.ts';
import Navbar from './components/navbar/navbar.tsx';
import './App.css';

function App() {
  const [rotation, setRotation] = useState(0);
  const [lift, setLift] = useState(0);
  const [scale, setScale] = useState(1);
  const [activeSection, setActiveSection] = useState('what-we-do');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [isLoading, setIsLoading] = useState(true);
  const lastX = useRef(null);
  const lastY = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Loading effect
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 4500); // Show loading for 4.5 seconds

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (lastX.current !== null) {
        const deltaX = e.clientX - lastX.current;
        const deltaY = e.clientY - lastY.current;

        setRotation((prev) => {
          const target = Math.max(-60, Math.min(60, deltaX * 2));
          return prev + (target - prev) * 0.3;
        });

        // Mouse down → lift up & scale up; Mouse up → drop down & scale down
        setLift((prev) => {
          const target = Math.max(-10, Math.min(20, -deltaY * 0.5));
          return prev + (target - prev) * 0.3;
        });

        setScale((prev) => {
          const target = 1 + Math.max(-0.08, Math.min(0.08, deltaY * 0.005));
          return prev + (target - prev) * 0.3;
        });
      }
      lastX.current = e.clientX;
      lastY.current = e.clientY;
    };

    const interval = setInterval(() => {
      setRotation((prev) => (Math.abs(prev) < 0.5 ? 0 : prev * 0.92));
      setLift((prev) => (Math.abs(prev) < 0.3 ? 0 : prev * 0.92));
      setScale((prev) => (Math.abs(prev - 1) < 0.005 ? 1 : 1 + (prev - 1) * 0.92));
    }, 16);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loading-screen">
          <div className="loading-content">
            <h2 className="loading-text">Welcome to <span className="highlight">Locals ZA</span></h2>
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/localsite-1f8f6.firebasestorage.app/o/LocalsHandgif.gif?alt=media&token=2d49781e-eea5-4b38-a897-1f2a65b52138" 
              alt="Loading..." 
              className="loading-gif"
            />
          </div>
        </div>
      ) : (
        <>
          <Navbar 
            activeSection={activeSection}
            onSectionSelect={setActiveSection}
          />
          <div className='main'>
            {isMobile ? (
              // Mobile view: Show content directly
              <MobileContent section={menuContent[activeSection]} />
            ) : (
              // Desktop view: Show menu with overlay
              <>
                <Menu
                  activeId={activeSection}
                  onSelect={(id) => setActiveSection(activeSection === id ? null : id)}
                />
                {activeSection && menuContent[activeSection] && (
                  <Overlay
                    section={menuContent[activeSection]}
                    onClose={() => setActiveSection(null)}
                  />
                )}
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/localsite-1f8f6.firebasestorage.app/o/LocalsHandpng.png?alt=media&token=fc37cb73-445b-46d6-8dc3-f65e55fc0b34"
                  alt="Locals Hand"
                  className='desktop-hand-image'
                  style={{
                    transform: `translateY(${lift}px) rotate(${rotation}deg) scale(${scale})`,
                  }}
                />
              </>
            )}
          </div>
        </>
      )}
    </>
  )
}

export default App
