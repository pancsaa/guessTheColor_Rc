import React from 'react'
import "./Square.css"

interface SquareProps {
    id: string;
    bgColor: string;
    isClicked: boolean,
    isFound: boolean,
    clickFn:(id:string)=>void
}

const Square: React.FC<SquareProps> = ({ id, bgColor, isClicked, isFound, clickFn }) => {
    return (
        <article id={id}  style={{background:bgColor}} onClick={()=>{clickFn(id)}}>
            {Number(id.slice(1)) + 1}
        </article>
    )
}

export default Square
