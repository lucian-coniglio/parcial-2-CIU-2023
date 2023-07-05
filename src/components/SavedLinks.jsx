import React from 'react';

const SavedLinks = ({ savedLinks, setSavedLinks }) => {
  const removeLink = (index) => {
    const updatedLinks = [...savedLinks];
    updatedLinks.splice(index, 1);
    setSavedLinks(updatedLinks);
    localStorage.setItem('savedLinks', JSON.stringify(updatedLinks));
  };

  return (
    <div className="saved-links">
      <p>Si algún artículo es de tu interés, te causó gracia, asombro o preocupación, 
        puedes guardarlo en la siguiente lista.
      </p>
      <ul className='list-group-flush'>
        {savedLinks.map((link, index) => (
          <li className='list-group-item list-group-item-primary text-center' key={index}>
            <a className='list-group-item list-group-item-action list-group-item-info' href={link.url}>{link.title} </a>
            <button className='btn-danger align-center' onClick={() => removeLink(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedLinks