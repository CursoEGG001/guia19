/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

export const API_RICKMORTY = {
    URL: "https://rickandmortyapi.com/api",
    CHARACTERS: function () {
        return `${this.URL}/character`;
    },

    CHARACTERS_BY_ID: function (id) {
        return `${this.URL}/character/${id}`;
    }

};
