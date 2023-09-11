/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

import React from 'react';

export const CardBody = (props) => {
    return (

                <div className='card-text bg-info-subtle'> 
                    <ul className='list-group'>
                        <li className='list-group-item'>{props.info[0]}</li>
                        <li className='list-group-item'>{props.info[1]}</li>
                        <li className='list-group-item'>{props.info[2]}</li>
                        <li className='list-group-item'>{props.info[3]}</li>
                        <li className='list-group-item'>{props.info[4]}</li>
                        <li className='list-group-item'>{props.info[5]}</li>
                    </ul>
                </div>

            );
};

export default CardBody;
