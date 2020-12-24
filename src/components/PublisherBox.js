import React from 'react'
import profilePhoto from '../assets/147140.png'

const PublisherBox = () => {
    return (
        <div className="publisher">
            <div className="image">
                <img src={profilePhoto} alt=""/>
            </div>
            <div className="think">
                <p>¿Que estas pensando?</p>
            </div>
            <div className="actions">
                <i className="fas fa-photo-video"></i>
                <i className="fas fa-audio-description"></i>
                <i className="fas fa-chart-line"></i>
                <i className="far fa-grin-beam"></i>
                <i className="fas fa-calendar-plus"></i>
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
