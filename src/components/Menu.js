import React from 'react';


const Menu = () => {
    return (
        <div className="menu">
            <div className="logo">
                <img src="https://firebasestorage.googleapis.com/v0/b/ng-store-2b2df.appspot.com/o/twitterLayoutIMGS%2Fimage.png?alt=media&token=1133a79c-e106-4564-8341-ca123d383866" alt=""/>
            </div>
            <div className="menu-item">
                <span>
                    <i className="fas fa-home"/> <span>Inicio</span>
                </span>
            </div>
            <div className="menu-item">
                <span>
                    <i className="fas fa-hashtag"/> <span>Explorar</span>
                </span>
            </div>
            <div className="menu-item">
                <span>
                    <i className="far fa-bell"/><span>Notificaciones</span>
                </span>
            </div>
            <div className="menu-item">
                <span>
                    <i className="fas fa-envelope"/><span>Mensajes</span>
                </span>
            </div>

            <div className="menu-item">
                <span>
                    <i className="fas fa-bookmark"/><span>Guardados</span>
                </span>
            </div>

            <div className="menu-item">
                <span>
                    <i className="fas fa-list-alt"/><span>Listas</span>
                </span>
            </div>

            <div className="menu-item">
                <span>
                    <i className="fas fa-user"/><span>Perfil</span>
                </span>
            </div>


        </div>
    )
}

export default Menu
