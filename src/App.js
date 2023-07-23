import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SavedLinks from './components/SavedLinks';
import Noticia from './components/Noticia';

function App() {
  const [savedLinks, setSavedLinks] = useState([]);

  // Obtener el valor del tema oscuro del localStorage o usar false como valor predeterminado
  const isDarkModeStored = JSON.parse(localStorage.getItem('isDarkMode'));
  const [isDarkMode, setIsDarkMode] = useState(isDarkModeStored || false);

  useEffect(() => {
    const storedLinks = JSON.parse(localStorage.getItem('savedLinks')) || [];
    setSavedLinks(storedLinks);
  }, []);

  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));

    const rootBody = document.getElementById('root-body');
    rootBody.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  const MAX_LINKS = 10; // Define el límite máximo de enlaces

  const saveLink = () => {
    if (noticia.url && noticia.title) {
      if (savedLinks.length >= MAX_LINKS) {
        alert('Error: Se ha alcanzado el límite máximo de links disponibles');
        return;
      }

      const updatedLinks = [...savedLinks, { url: noticia.url, title: noticia.title }];
      setSavedLinks(updatedLinks);
      localStorage.setItem('savedLinks', JSON.stringify(updatedLinks));
    }
  };

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const [noticia, editarNoticia] = useState({});
  const [buttonClicked, setButtonClicked] = useState(false);

  const consultarAPINews = async () => {
    try {
      const api = await fetch(
        'https://newsapi.org/v2/everything?q=bbc-news&sortBy=popularity&apiKey=cefcff4e2b974927bee7ce102aa0c527'
      );
      const resultado = await api.json();
      if (resultado.articles && resultado.articles.length > 0) {
        const randomIndex = getRandomInt(resultado.articles.length);
        const randomNoticia = resultado.articles[randomIndex];
        editarNoticia(randomNoticia);
        setButtonClicked(true);
      }
      console.log(resultado);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div id='functionals'>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div className="noticia text-center">
        <button className='btn-success' onClick={consultarAPINews}>
          Nueva noticia
        </button>
        <Noticia
          noticia={noticia}
          buttonClicked={buttonClicked}
          saveLink={saveLink}
        />
      </div>
      <SavedLinks savedLinks={savedLinks} setSavedLinks={setSavedLinks} />
      <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </div>
  );
}

export default App;
