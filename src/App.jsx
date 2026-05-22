import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import JoinModal from './components/JoinModal';

// Pages
import Accueil from './pages/Accueil';
import Histoire from './pages/Histoire';
import Activites from './pages/Activites';
import Programme from './pages/Programme';
import Don from './pages/Don';

export default function App() {
  const [currentPage, setCurrentPage] = useState('accueil');
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  // Sync state with URL hash on mount and when hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '');
      const validPages = ['accueil', 'histoire', 'activites', 'programme', 'don'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('accueil');
      }
      window.scrollTo(0, 0);
    };

    // Run on initial load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Initialize IntersectionObserver for Scroll Reveal animations
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            // Keep observing if they want repeat animations, or unobserve for single transition.
            // Let's unobserve to make it clean and performant:
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null, // viewport
        threshold: 0.15, // 15% visible
        rootMargin: '0px 0px -50px 0px' // Offset bottom slightly for better UX
      }
    );

    revealElements.forEach((el) => {
      // Clear visible class to re-trigger on navigation
      el.classList.remove('reveal-visible');
      observer.observe(el);
    });

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, [currentPage]); // Re-run observer when page changes

  const navigateTo = (pageId) => {
    window.location.hash = `#/${pageId}`;
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'accueil':
        return <Accueil onNavigate={navigateTo} onOpenJoinModal={() => setIsJoinModalOpen(true)} />;
      case 'histoire':
        return <Histoire />;
      case 'activites':
        return <Activites />;
      case 'programme':
        return <Programme />;
      case 'don':
        return <Don />;
      default:
        return <Accueil onNavigate={navigateTo} onOpenJoinModal={() => setIsJoinModalOpen(true)} />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--color-bg-dark)' }}>
      <Navbar 
        currentPage={currentPage} 
        onNavigate={navigateTo} 
        onOpenJoinModal={() => setIsJoinModalOpen(true)} 
      />

      <main style={{ flexGrow: 1 }}>
        {renderPage()}
      </main>

      <Footer onNavigate={navigateTo} />

      <JoinModal 
        isOpen={isJoinModalOpen} 
        onClose={() => setIsJoinModalOpen(false)} 
      />
    </div>
  );
}
