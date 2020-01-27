import React from 'react';


export default function Buttons(props){

    const {fnShowName} =props;

    return(
        <div>
            <button onClick={()=>fnShowName("Agus Nava")}>Click me</button>
        </div>
    );
}