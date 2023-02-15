import React from "react";
import style from "./Card.module.css"
import "./Card.css"

export default function Card({name, image, continent}) {
    return (
        <div className={`container && ${style.container} `}>
            <div className={`text && ${style.text} `}> 
                <h1 >{name}</h1>
         <hr/>
           <h3>{continent}</h3>
            </div>
          

            <div ><img className={`img && ${style.img}`} src={image} alt="imagen de pais"/></div>
            
        </div>
    );
}