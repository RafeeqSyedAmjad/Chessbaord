import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Board from './components/Board';


const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Helmet>
        <title>Rafeeq's Chess Board</title>
        <meta name="description" content="A chess board built with React and Tailwind CSS." />
        <meta property="og:title" content="Chess Board" />
        <meta property="og:description" content="A chess board built with React and Tailwind CSS." />
        <meta property="og:image" content="https://example.com/image.jpg" />
        <meta property="og:url" content="https://example.com/chess-board" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div
        className={`flex flex-col items-center justify-center min-h-screen ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100'
          }`}
      >
        <h1 className="mb-4 text-2xl font-bold">Chess Board</h1>
        <Board />



        <div className="mt-4">
          <label htmlFor="darkModeToggle" className="flex items-center cursor-pointer">
            <span className="mr-2">Dark Mode</span>
            <div className="relative">
              <input
                type="checkbox"
                id="darkModeToggle"
                className="sr-only"
                checked={darkMode}
                onChange={handleDarkModeToggle}
              />


              <div
                className={`w-10 h-6 bg-gray-200 rounded-full shadow-inner ${darkMode ? 'bg-gray-600' : ''
                  }`}
              ></div>
              <div
                className={`dot absolute w-4 h-4 bg-white rounded-full shadow inset-y-0 left-1 ${darkMode ? 'transform translate-x-full' : ''
                  }`}
              ></div>
            </div>
          </label>
        </div>
      </div>
    </>


  );
};

export default App;
