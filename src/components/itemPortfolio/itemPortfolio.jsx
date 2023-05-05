import React from "react";

import './itemPortfolio.css';

function ItemPortfolio(props) {
    return (
        <div className="item-Portfolio">
            <a href={props.link} target="_blank">
                <img src={props.image} />
                <p>{props.title}</p>
            </a>
        </div>
        
    )
}

export default ItemPortfolio;