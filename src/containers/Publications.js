import React from 'react'
import Publication from "../components/Publication";
import img1 from '../assets/147140.png';
import img2 from '../assets/Ep88B1jXEAMap6v.jpg';
import img3 from '../assets/Ep_Q86wW4AAadPP.png';
import img4 from '../assets/Ep_O1BaXMAE4N4g.jpg';


const publications = [
    {
        id: 0,
        userImage: img1,
        publicationMedia: img2
    },
    {
        userImage: img1,
        publicationMedia: img3,
        id: 1
    },
    {
        userImage: img1,
        publicationMedia: img4,
        id: 2
    },
    {
        userImage: img1,
        publicationMedia: img2,
        id: 3
    },
    {
        userImage: img1,
        publicationMedia: img3,
        id: 4
    },
];
const Publications = () => {
    return (
        <div className="publications">
            {publications.map(publication => {
                return (<Publication key={publication.id} {...publication}/>);
            })
            }
        </div>
    )
}

export default Publications
