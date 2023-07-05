import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const [noticia, editarNoticia] = useState({});
  const [buttonClicked, setButtonClicked] = useState(false);

  const consultarAPINews = async () => {
    try {
      const api = await fetch('https://newsapi.org/v2/everything?q=bbc-news&sortBy=popularity&apiKey=cefcff4e2b974927bee7ce102aa0c527');
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
      <Header />
      <div className="noticia text-center">
        <button className='btn-success' onClick={consultarAPINews}>Nueva noticia</button>
        <div className={`container news-container ${buttonClicked ? 'bordered' : ''}`}>
          {noticia.source && (
            <div className='topleft'>{noticia.source.name}</div>
          )}
          {noticia.urlToImage && (
            <img className='img-fluid' src={noticia.urlToImage} alt='News' />
          )}
          <div className='bottomleft'>
            <h3 className="bottomlefttitle">{noticia.title}</h3>
            <p className="bottomlefttext">{noticia.author}</p>
            {buttonClicked && (
              <a href={noticia.url}>Ir al artículo</a>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;