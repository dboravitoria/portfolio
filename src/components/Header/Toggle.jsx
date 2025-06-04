import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from "react-icons/fa";
export function Toggle() {
    const sun = FaSun
    const [isDarkMode, setIsDarkMode] = useState(() => {
         return document.documentElement.classList.contains('dark')
    });
    const handleToggle = () => {
        setIsDarkMode(!isDarkMode);
    };
     useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);
    return (
        <div className="flex items-center justify-end md:h-16 sm:h-10">
            <label className="relative inline justify-center items-center cursor-pointer">
                <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={isDarkMode}
                    onChange={handleToggle}
                />
                <div
                    className="
                    sm:12 sm:6 md:w-24 md:h-12 rounded-full
                    dark:bg-white bg-secondaryDark 
                    transition-colors duration-300 ease-in-out
                    shadow-custom drop-shadow-sm
                    peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primaryLight dark:peer-focus:ring-primary
                    ">
                    <div className={`
                    absolute top-1 left-1 sm:w-5 sm:h-5 md:w-10 md:h-10 rounded-full 
                    bg-secondaryLight dark:bg-secondaryDark 
                    flex items-center justify-center
                    text-secondaryDark dark:text-white
                    transition-all duration-300 ease-in-out
                    
                    ${isDarkMode ? 'translate-x-12' : ''}
                    `}>
                    
                    {isDarkMode ? <FaMoon size={16} /> : <FaSun size={16} />}
                    </div>
                </div>
            </label>
        </div>
    );
}