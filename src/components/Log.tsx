import React from "react";

export default function Log ({logs}) {
    return (
        <ol className="log">
            { 
                logs.map((item : any) => {
                    return (
                        <li key={`${item.square.row}${item.square.col}`}>
                            {item.player} đánh tại {item.square.row} {item.square.col}
                        </li>
                    )
                })
            }
        </ol>
    )
}