import React from 'react';

export default function ListUsersV2(props){
    const {listUsers}=props;
    return(
        <div>
            <h2>Lista de usuarios V2</h2>
            <ul>
                {listUsers.map((user, index) =>(
                <li key={index}>{user.nombre} - {user.year}</li>
                ))
                }
            </ul>
        </div>
    );
}