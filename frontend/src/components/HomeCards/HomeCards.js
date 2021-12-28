import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeCards(props) {
    const {homeCard} = props;
    return (
        <div className="homeCard" key={homeCard._id}>
            <img src={homeCard.image} alt={`homeCard_${homeCard.id}`} />
            <div className="content">
                <div className="svg"><i class="fas fa-user"></i></div>
                <div className="text">{homeCard.name}<br/>{homeCard.subName}</div>
            </div>
            <div className="content2">
                <div className="header">{homeCard.name}<br/>{homeCard.subName}</div>
                <div className="paragraph">{homeCard.text}</div>
                <div className="link"><Link to={homeCard.link}>Daha Fazla</Link></div>
            </div>
        </div>
    )
}