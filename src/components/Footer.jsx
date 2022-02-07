import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return(
        <footer className="border-top footer text-muted">
        <div className="container d-flex justify-content-center">
            &copy; 2021 - AgenciaViagemUp - <Link to="/politica-de-privacidade" >Politica de Privacidade</Link>
        </div>
    </footer>
    )
}