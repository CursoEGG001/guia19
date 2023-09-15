/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

export const API_POKEMON = {

URL: "http://pokeapi.co/api/v2",
    CHARACTERS: function () {
        return `${this.URL}/pokemon?limit=5000&offset=0`;
    },

    CHARACTERS_BY_ID: function (id) {
        return `${this.URL}/pokemon/${id}`;
    },
    
    CHARACTERS_BY_NAME: function (name) {
        return `${this.URL}/pokemon/${name}`;
    }

};