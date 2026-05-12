import React, { createElement, useState } from "react";
 
const headersTable = ["header1", "header2", "header3"]
const paragraph = ["1", "2", "3"]
 
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