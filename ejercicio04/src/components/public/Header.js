/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
import { Link } from 'react-router-dom'

export const Header = ({ title }) => {
    return (
            <header className="App-header display-1">
                <h1>{title}</h1>
                <Link to="/About">
                Sobre esto
                </Link>
                <br/>
                <Link to="/Home">
                Home
                </Link>
            </header>
            );
};
