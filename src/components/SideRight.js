import React from "react";
import Card from "./Card";

export const SideRight = () => {

    const notices1 = [
        {
            id: 0,
            text: 'Noticia uno'
        },
        {
            id: 2,
            text: 'Noticia dos'
        }
    ];

    const notices2 = [
        {
            id: 4,
            text: 'Persona uno'
        },
        {
            id: 6,
            text: 'Persona dos'
        }
    ];
    return(
        <div className="sr-content">
            <div className="child-content">
                <div className="scroller">
                    <Card content={notices1} title={'¿Qé esta pasando?'}/>
                    <Card content={notices2} title={'A quien seguir'}/>
                </div>
            </div>
        </div>
    )
}
export default SideRight;
