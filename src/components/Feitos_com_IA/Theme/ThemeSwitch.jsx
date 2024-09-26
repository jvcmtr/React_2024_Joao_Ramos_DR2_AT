import React, { useState, useEffect } from 'react';
import IconButton from '../../Buttons/IconButton';


// COMPONENTE FEITO POR IA
// Minhas alterações foram: 
//        incluir o meu componente de IconButton em vez do <button> padrão
const ThemeToggle = () => {
    const [theme, setTheme] = useState(() => {
        // Check local storage for saved theme or use the default
        return localStorage.getItem('theme') || 
               (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    });

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme); // Save to local storage
    };

    useEffect(() => {
        document.body.className = theme; // Apply the theme class to the body

        // Update the theme when the system preference changes
        const handleChange = (e) => {
            setTheme(e.matches ? 'dark' : 'light');
        };
        
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', handleChange);
        
        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, [theme]);

    return (
        <IconButton 
            icon={  theme === 'light' ? "bi bi-moon" : "bi bi-brightness-high"}
            onClick={toggleTheme}/>
    );
};

export default ThemeToggle;
