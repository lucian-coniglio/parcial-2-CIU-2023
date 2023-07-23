import React, { useState, useEffect } from 'react';

const Header = ({ isDarkMode, setIsDarkMode }) => {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    // Función que controla la visibilidad del navbar
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowNavbar(scrollTop === 0);
    };

    // Event listener para el evento de desplazamiento (scroll)
    window.addEventListener('scroll', handleScroll);

    // Eliminar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarAnimationClass = showNavbar ? 'navbar-show' : 'navbar-hide';
  const navbarColorClass = isDarkMode ? 'navbar-dark bg-danger' : 'navbar-light bg-warning';

  return (
    <nav className={`navbar navbar-expand-sm ${navbarColorClass} fixed-top ${navbarAnimationClass} navbar-transition `}>
      <div className="navbar-nav d-flex justify-content-between w-100">
        <div className="d-flex">
          <a className="nav-item nav-link" href="#objetivo">
            Objetivo de la página
          </a>
          <a className="nav-item nav-link" href="#ocasion">
            Ocasión especial
          </a>
          <a className="nav-item nav-link" href="#generador">
            Ir al generador de noticias
          </a>
        </div>
        <div className="custom-control custom-switch" style={{ marginRight: '0.75rem' , marginTop: '0.4rem'}}>
          <button onClick={() => setIsDarkMode(!isDarkMode)} className={`btn-${isDarkMode ? 'warning' : 'danger'} mr-3`}>
            {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
