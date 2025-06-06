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
        <div className="md:absolute md:mr-0 md:top-[70%] md:right-[3%] md:mt-0
        sm:pb-2 sm:mr-6 sm:flex sm:justify-center sm:items-start sm:mt-4">
            <label className="relative inline justify-center items-center cursor-pointer">
                <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={isDarkMode}
                    onChange={handleToggle}
                />
                <div
                    className="
                    sm:w-10 sm:h-7 md:w-16 md:h-8 rounded-full 
                    dark:bg-white bg-secondaryDark 
                    transition-colors duration-300 ease-in-out
                    shadow-custom drop-shadow-sm
                    peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primaryLight dark:peer-focus:ring-primary
                    ">
                    <div className={`
                    absolute top-1 left-1 sm:-left-0.5 sm:ml-1 sm:p-0.5 sm:w-5 sm:h-5
                    md:ml-1.5 md:w-6 md:h-6 rounded-full 
                    bg-secondaryLight dark:bg-secondaryDark 
                     border-2
                    border-primaryLight dark:border-primaryDark
                    flex items-center justify-center
                    text-secondaryDark dark:text-white
                    transition-all duration-300 ease-in-out
                    
                    ${isDarkMode ? 'sm:translate-x-4 md:translate-x-8' : ''}
                    `}>
                    
                    {isDarkMode ? <FaMoon size={16} /> : <FaSun size={18} />}
                    </div>
                </div>
            </label>
        </div>
    );
}