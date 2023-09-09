/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

import { API_POKEMON } from '../constants/api.constants';

class PokedexServicio {

    async getAllCharacters(){
        const response = await fetch(API_POKEMON.CHARACTERS()); //API_RICKMORTY.CHARACTERS() es una funcion, va con ()
        return response.json(); //si no lo convierto a json nos trae el response y puedo ver el status, body, etc
    }
    async getCharacterById(id){
        const response = await fetch(API_POKEMON.CHARACTERS_BY_ID(id)); //API_RICKMORTY.CHARACTER_BY_ID() es una funcion, va con ()
        return response.json(); 
    }
    async getCharacterByName(name){
        const response = await fetch(API_POKEMON.CHARACTERS_BY_NAME(name)); //API_RICKMORTY.CHARACTER_BY_ID() es una funcion, va con ()
        return response.json(); 
    }
}

export default new PokedexServicio() //esto nos va a permitir usarla desde donde necesitemos
