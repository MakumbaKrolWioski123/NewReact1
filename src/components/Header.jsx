import React, { createElement, useState } from "react";
 
const headersTable = ["Naglowek1", "Naglowek2", "Naglowek3"]
const paragraph = ["Paragraf1", "Paragraf2", "Paragraf3"]
 
const Zadanie3 = () => {
    const cards = headersTable.map((className, index) => {
        return React.createElement(
            'div',
            {className: 'card', key: index},
            React.createElement(
                'h2',{className: className},
                `To jest nagłówek ${className}`
            ),
            React.createElement(
                'p',
                {className : 'paragraph-div'},
                `${paragraph[index]}`
            ),
            React.createElement(
                'a',
                {className : 'div-a', href: '#', target: '_blank', rel: 'noopener noreferrer'},
                'Elo elo'
            )
        )
    })
    return React.createElement(React.Fragment, null, cards);
};

export default Zadanie3;