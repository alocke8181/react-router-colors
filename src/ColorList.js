import React from "react";
import { Link } from "react-router-dom";

const ColorList = ({colors}) =>{
    return (
        <>
            <ul>
                {colors.map((color) =>{return(
                    <li key={color.color}>
                        <Link to={`/colors/${color.url}`}>{color.name}</Link>
                    </li>
                )})}
            </ul>
            <Link to={'/colors/new'} >Create New Color</Link>
        </>
    )
}

export default ColorList;