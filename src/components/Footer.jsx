import React from 'react';

const Footer = () => {
    const storedLinks = JSON.parse(localStorage.getItem('savedLinks')) || [];

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return(
        
        <div id="footer"><br/>
            <div  className="container text-center">
                <div className="row">
                    <div className="col">
                        <a href='#inicio'><button className='btn btn-secondary'>Ir a Inicio</button></a>
                    </div>
                    <div className="col">
                        <p>Lucián Coniglio</p>
                        <a href="mailto:lucian.coniglio@estudiantes.unahur.edu.ar">lucian.coniglio@estudiantes.unahur.edu.ar</a>
                        <p>Universidad Nacional de Hurlingham</p>
                    </div>
                    <div className="col">
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