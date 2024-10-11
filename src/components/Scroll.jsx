import React, { useState, useEffect } from 'react';

const Scroll = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Function to handle the scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show the button when scrolled down 200px from the top
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 200) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 200) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  return (
    <div
      className={`fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center bg-teal-600 text-white cursor-pointer shadow-xl transition-opacity duration-300 ${showScroll ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={scrollToTop}
    >
      {/* Up arrow icon */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
      </svg>
    </div>
  );
};

export default Scroll;
