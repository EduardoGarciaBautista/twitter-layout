import React from 'react'

const Publication = ({userImage, publicationMedia}) => {
    return (
        <div className="publication">
            <div className="publication__pic">
                <img src="https://firebasestorage.googleapis.com/v0/b/ng-store-2b2df.appspot.com/o/twitterLayoutIMGS%2F147140.png?alt=media&token=449de4c6-4675-4065-b8fa-6c4b9201fdc9" alt=""/>
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
