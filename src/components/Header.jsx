import React, { Fragment } from 'react';

const Header = ({titulo}) => {
    return(
        <Fragment>
            <nav class="navbar navbar-expand-sm fixed-top navbar-expand-lg navbar-light bg-warning">
                <div class="navbar-nav">
                    <a class="nav-item nav-link" href="#objetivo">Objetivo de la página</a>
                    <a class="nav-item nav-link" href="#ocasion">Ocasión especial</a>
                    <a class="nav-item nav-link" href="#generador">Ir al generador de noticias</a>
                </div>
            </nav>
        </Fragment>
    );
}

export default Header;