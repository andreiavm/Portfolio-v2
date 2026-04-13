import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HelloSection from './components/hello/Hello';
import AboutSection from './components/about/About';
import WorkSection from './components/work/Work';
import ContactSection from './components/contact/Contact';
import Footer from './components/footer/Footer';
import TorusCanvas from './components/hello/ThreeCanvas';

const THEME_STORAGE_KEY = 'portfolio-theme';

const getSystemTheme = () => (
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
);

function HomePage({ theme, onToggleTheme }) {
  return (
    <>
      <HelloSection theme={theme} onToggleTheme={onToggleTheme} />
      <WorkSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}

function App() {
  const [themeOverride, setThemeOverride] = useState(() => {
    if (typeof window === 'undefined') {
      return null;
    }

    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme;
    }

    return null;
  });
  const [systemTheme, setSystemTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'light';
    }

    return getSystemTheme();
  });

  const theme = themeOverride ?? systemTheme;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleThemeChange = (event) => {
      setSystemTheme(event.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleThemeChange);
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;

    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      themeColorMeta.setAttribute(
        'content',
        theme === 'dark' ? '#11161d' : '#f3efe4'
      );
    }
  }, [theme]);

  useEffect(() => {
    if (themeOverride) {
      window.localStorage.setItem(THEME_STORAGE_KEY, themeOverride);
      return;
    }

    window.localStorage.removeItem(THEME_STORAGE_KEY);
  }, [themeOverride]);

  const handleToggleTheme = () => {
    setThemeOverride((currentThemeOverride) => {
      const currentTheme = currentThemeOverride ?? systemTheme;
      return currentTheme === 'light' ? 'dark' : 'light';
    });
  };

  return (
    <Router>
      <div className="app-shell">
        <div className="app-background" aria-hidden="true">
          <TorusCanvas theme={theme} />
        </div>
        <div className="app-content">
          <Routes>
            <Route
              path="/"
              element={<HomePage theme={theme} onToggleTheme={handleToggleTheme} />}
            />
            {/* <Route path="/project/:projectId" element={<ProjectDetailPage />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
