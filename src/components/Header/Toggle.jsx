import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from "react-icons/fa";
export function Toggle() {
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
        <div className="md:flex md:items-center md:justify-end md:h-16 
        sm:h-12 sm:flex sm:justify-center sm:items-start">
            <label className="relative inline justify-center items-center cursor-pointer">
                <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={isDarkMode}
                    onChange={handleToggle}
                />
                <div
                    className="
                    sm:w-14 sm:h-7 md:w-24 md:h-12 rounded-full 
                    dark:bg-white bg-secondaryDark 
                    transition-colors duration-300 ease-in-out
                    shadow-custom drop-shadow-sm
                    peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primaryLight dark:peer-focus:ring-primary
                    ">
                    <div className={`
                    absolute top-1 left-1 sm:-left-0.5 sm:ml-1 sm:p-0.5 sm:w-5 sm:h-5 md:w-10 md:h-10 rounded-full 
                    bg-secondaryLight dark:bg-secondaryDark 
                    md:ml-1.5 border-2
                    border-primaryLight dark:border-primaryDark
                    flex items-center justify-center
                    text-secondaryDark dark:text-white
                    transition-all duration-300 ease-in-out
                    
                    ${isDarkMode ? 'sm:translate-x-8 md:translate-x-12' : ''}
                    `}>
                    
                    {isDarkMode ? <FaMoon size={16} /> : <FaSun size={18} />}
                    </div>
                </div>
            </label>
        </div>
    );
}