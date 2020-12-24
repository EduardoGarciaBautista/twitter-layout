import React from 'react';
import Tittle from "../components/Tittle";
import Menu from "../components/Menu";
import Finder from "../components/Finder";
import PublisherBox from "../components/PublisherBox";
import Publications from "../containers/Publications";
import SideRight from "../components/SideRight";

const Layout = () => {
    return (
        <>
            <div className="main">
                <div className="container">
                    <Menu/>
                    <div className="content">
                        <Tittle/>

                        <Finder/>

                        <PublisherBox/>

                        <SideRight/>

                        <Publications/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout
