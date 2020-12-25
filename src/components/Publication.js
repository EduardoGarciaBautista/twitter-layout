import React from 'react'

const Publication = ({userImage, publicationMedia}) => {
    return (
        <div className="publication">
            <div className="publication__pic">
                <img src={userImage} alt=""/>
            </div>

            <div className="publication__text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s
            </div>

            <div className={`publication_photo ${publicationMedia ?'min-h-img' : ''}`}>
                <img src={publicationMedia} alt=""/>
            </div>
            <div className="publication__actions">
                <span>
                    <i className="far fa-comment"/>
                    <small>200</small>
                </span>
                <span>
                    <i className="fas fa-retweet"/>
                    <small>300</small>
                </span>
                <span>
                    <i className="fas fa-heart"/>
                    <small>20</small>
                </span>
                <span>
                    <i className="fas fa-upload"/>
                </span>
            </div>
        </div>
    )
}

export default Publication
