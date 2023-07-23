import React from 'react';

const Noticia = ({ noticia, buttonClicked, saveLink }) => {
  return (
    <div className={`container news-container ${buttonClicked ? 'bordered' : ''}`}>
      {noticia.source && <div className='topleft'>{noticia.source.name}</div>}
      {noticia.urlToImage && (
        <img className='img-fluid' src={noticia.urlToImage} alt='News' />
      )}
      <div className='bottomleft'>
        <h3 className='bottomlefttitle'>{noticia.title}</h3>
        {noticia.author === 'https://www.facebook.com/bbcnews' ? (
          <p className='bottomlefttext'>facebook.com/bbcnews</p>
        ) : (
          <p className='bottomlefttext'>{noticia.author}</p>
        )}
        {buttonClicked && (
          <>
            <a href={noticia.url}>Ir al artículo</a>
            <br />
            <button className='btn btn-info mt-2' onClick={saveLink}>
              Guardar enlace
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Noticia;