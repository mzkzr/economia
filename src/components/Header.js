import React from 'react'
import escudo from '../assets/img/escudo-chubut.png'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Inicio } from './Inicio';
import { Autoridades } from './Autoridades';
import { MisionesFunciones } from './MisionesFunciones';
import { Contacto } from './Contacto';

export const Header = () => {
  	return (
        <div id="mainHeader">
            <Router>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img src={escudo} alt="lupulo" width="128" title="escudo-chubut"/>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">INICIO</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">INSTITUCIONAL</a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/autoridades">AUTORIDADES</a></li>
                                        <li><a className="dropdown-item" href="/misiones-funciones">MISIONES Y FUNCIONES</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">POLÍTICA Y GESTIÓN</a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Gestión Presupuestaria</a></li>
                                        <li><a className="dropdown-item" href="#">Coordinación Financiera</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contacto">CONTACTO</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route exact path='/' element={<Inicio/>}></Route>
                    <Route exact path='/autoridades' element={<Autoridades/>}></Route>
                    <Route exact path='/misiones-funciones' element={<MisionesFunciones/>}></Route>
                    <Route exact path='/contacto' element={<Contacto/>}></Route>
                </Routes>
            </Router>
        </div>	
  	)
}