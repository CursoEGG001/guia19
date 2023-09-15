/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

import React, {useState, useEffect} from 'react';

function CardBody(props) {
    const [laInfo, setLaInfo] = useState([])
    const carga = props.info
    useEffect(() => {
        setLaInfo(props.info)

    }, [carga]);

    return (
            <div className='card-text bg-info-subtle'> 
                <ul className='list-group'>
                    <li className='list-group-item'>{laInfo[0]}</li>
                    <li className='list-group-item'>{laInfo[1]}</li>
                    <li className='list-group-item'>{laInfo[2]}</li>
                    <li className='list-group-item'>{laInfo[3]}</li>
                    <li className='list-group-item'>{laInfo[4]}</li>
                    <li className='list-group-item'>{laInfo[5]}</li>
                </ul>
            </div>

            );
}
;

export default CardBody;
