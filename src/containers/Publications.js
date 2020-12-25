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
        publicationMedia: 'https://firebasestorage.googleapis.com/v0/b/ng-store-2b2df.appspot.com/o/twitterLayoutIMGS%2FEp88B1jXEAMap6v.jpg?alt=media&token=24a6360d-9f87-4d26-a26a-bc89cf4f1b6b'
    },
    {
        userImage: img1,
        publicationMedia: 'https://firebasestorage.googleapis.com/v0/b/ng-store-2b2df.appspot.com/o/twitterLayoutIMGS%2FEp_O1BaXMAE4N4g.jpg?alt=media&token=d7f488da-4b8e-4b2f-9ea1-bb3ec09ba7ba',
        id: 1
    },
    {
        userImage: img1,
        publicationMedia: 'https://firebasestorage.googleapis.com/v0/b/ng-store-2b2df.appspot.com/o/twitterLayoutIMGS%2FEp_Q86wW4AAadPP.png?alt=media&token=136c8378-b8d2-4341-9383-9abc55a61694',
        id: 2
    },
    {
        userImage: img1,
        publicationMedia: 'https://firebasestorage.googleapis.com/v0/b/ng-store-2b2df.appspot.com/o/twitterLayoutIMGS%2FEp88B1jXEAMap6v.jpg?alt=media&token=24a6360d-9f87-4d26-a26a-bc89cf4f1b6b',
        id: 3
    },
    {
        userImage: img1,
        publicationMedia: 'https://firebasestorage.googleapis.com/v0/b/ng-store-2b2df.appspot.com/o/twitterLayoutIMGS%2FEp_Q86wW4AAadPP.png?alt=media&token=136c8378-b8d2-4341-9383-9abc55a61694',
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
