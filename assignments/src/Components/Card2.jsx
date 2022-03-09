import React from "react";

export const Card2 = ({item,i}) => {
    return (
        <>
            <div>
            <img src={item.img} alt="logo"/>
            <p>{item.title}</p>
            </div>
            </>
    )
}