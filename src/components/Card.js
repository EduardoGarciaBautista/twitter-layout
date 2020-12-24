import React from 'react'

const Card = ({title, content = []}) => {
    return (
        <div className="sr-content-card">
            <div className="sr-content-card__header">
                <p>{title}</p>
            </div>
            {content.map(content => {
                return(
                    <div key={content.id} className="sr-content-card__notice">
                        <p>{content.text}</p>
                    </div>
                )
            })

            }
        </div>
    )
}

export default Card
