import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import { Header } from './components/public/Header'
import { Footer } from './components/public/Footer'
import { Main } from './components/public/Main'
import About from './pages/About';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';

function App() {
    {/*
      * <Routes>
            <Route path={"/Direccion1"} element={ < ComponenteA / > } />
            <Route path={"/Direccion2"} element={ < ComponenteB / > } />
            <Route path={"*"} element={ < PorDefecto / > } />
        </Routes>
      * 
      * 
         Aquí se inicia la elección de la presentación a elegir mediante  Routes  con distintos  Route  (sin la S del final)
         Usted puede cambiar las rutas por defecto a mostrar según se ingrese en barra de direcciones.
         Comentarios forzados por llaves y comentario de texto para poder remarcar el punto de elección de rutas.
         */
    }
    return (
            <BrowserRouter>
                <div className="App">
                    <Header />
                    <Routes>
                        <Route path={"/About"} element={ < About / > } />
                        <Route path={"/Home"} element={ < Home / > } />
                        <Route path={"/index.html"} element={ < Home / > } />
                        <Route path={"*"} element={ < PageNotFound / > } />
                    </Routes>
                    <Footer />
                </div>
            </BrowserRouter>
                                    );
                        }
                        export default App;