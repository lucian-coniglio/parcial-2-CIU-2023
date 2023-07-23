import React from 'react';

const Footer = ({ isDarkMode }) => {
    const footerColorClass = isDarkMode ? 'bg-danger' : 'bg-warning';

    return(
        
        <div id="footer" className={footerColorClass}><br/>
            <div  className="container text-center">
                <div className="row">
                    <div className="col-md-4">
                        <a href='#inicio'><button className='btn btn-secondary'>Ir a Inicio</button></a>
                    </div>
                    <div className="col-md-4">
                        <p>Lucián Coniglio</p>
                        <a href="mailto:lucian.coniglio@estudiantes.unahur.edu.ar">lucian.coniglio@estudiantes.unahur.edu.ar</a>
                        <p>Universidad Nacional de Hurlingham</p>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <button className='btn-primary'><a href="https://www.facebook.com" className='text-white'>Facebook</a></button>
                            <button className='btn-info'><a href="https://www.twitter.com" className='text-black'>Twitter</a></button>
                            <button className='btn-danger'><a href="https://www.instagram.com" className='text-white'>Instagram</a></button>
                        </div>
                    </div>
                </div>
                    
            </div>
        </div>
    );
}

export default Footer;