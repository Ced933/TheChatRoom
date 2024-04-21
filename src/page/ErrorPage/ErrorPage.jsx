import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.scss';

export default function ErrorPage() {
  return (
    <div className='container-error-page'>
        <div className='box-error-page'>
            <img src="./outline-lettering-error-404-with-warning-sign-and-wrench-text.png" alt="" />
            <h3>Désolé cette page n'existe pas</h3>
            <Link to='/'>Retourner à l'accueil</Link>
        </div>
    </div>
  )
}
