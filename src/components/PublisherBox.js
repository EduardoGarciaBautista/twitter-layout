import React from 'react'
import profilePhoto from '../assets/147140.png'

const PublisherBox = () => {
    return (
        <div className="publisher">
            <div className="image">
                <img src="https://firebasestorage.googleapis.com/v0/b/ng-store-2b2df.appspot.com/o/twitterLayoutIMGS%2F147140.png?alt=media&token=449de4c6-4675-4065-b8fa-6c4b9201fdc9" alt=""/>
            </div>
            <div className="think">
                <p>¿Qué está pasando?</p>
            </div>
            <div className="actions">
                <i className="fas fa-photo-video"/>
                <i className="fas fa-audio-description"/>
                <i className="fas fa-chart-line"/>
                <i className="far fa-grin-beam"/>
                <i className="fas fa-calendar-plus"/>
            </div>
            <div className="tweet">
                <button>
                    Twittear
                </button>
            </div>
        </div>
    )
}

export default PublisherBox
