import React from 'react'

function ButtonLink (props){
    // props é o objeto
    return(
    <a href={props.href} className={props.className}>
        {props.children}
    </a>
    );
}

export default  ButtonLink;