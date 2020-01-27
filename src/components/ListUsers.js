import React from 'react';

export default function (props){
    const {listUsers} =props;
    return(
        <div>
        <div>Lista de usuarios</div>
        <ul>
            {listUsers.map((name, index)=>(
                <li key={index}>{name}</li>
            ))}
        </ul>
        </div>
    );
}