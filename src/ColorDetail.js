import React from "react";

const ColorDetail = ({color}) => {

    return (
        <h1 style={{color: color.color}}>{color.name} is the best color!</h1>
    )

}

export default ColorDetail;