import React from "react";

export const Card = ({item}) => {
    return (
        <>
            <img src={item.img} alt="logo"/>
            <p>{item.title}</p>
            <p>{item.content}</p>
        </>
    )
}