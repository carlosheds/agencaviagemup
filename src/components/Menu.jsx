import { Link } from 'react-router-dom';
import React from 'react';
import './menu.css';

export default function Menu(){
    return(
        <>
        <header>
            <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
            <div className="container">
                <Link to="/" className="navbar-brand"><img src="./assets/img/logo-agenciaup.png" className="img-fluid" width="200" alt="Agencia de Viagens Up" /></Link>
                <button className="menu-toggle navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse d-lg-inline-flex justify-content-between">
                    <ul className="navbar-nav flex-grow-1 justify-content-end">
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/clientes">Clientes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/destinos">Destinos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/passagens">Passagens</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/promocoes">Promoções</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/contato">Contato</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </header>
        </>
    )
}