import React from "react";
import { useParams } from "react-router";
import ColorDetail from "./ColorDetail";

const ColorFilter = ({colors}) =>{

    const params = useParams();
    let color = colors.find(color => color.url === params.color)
    return <ColorDetail color={color} />

}

export default ColorFilter;