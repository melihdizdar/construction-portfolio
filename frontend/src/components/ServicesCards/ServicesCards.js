import React from 'react'
import { Link } from 'react-router-dom'

export default function ServicesCard(props) {
    const {servicesCard} = props;
    return (
        <div className="servicesCard" key={servicesCard._id}>
            <img src={servicesCard.image} alt={`ServicesCard_${servicesCard.id}`} />
            <div className="content">
                <div className="svg"><i class={servicesCard.svg}></i></div>
                <div className="text">{servicesCard.name}<br/>{servicesCard.subName}</div>
                <div className="link"><Link to={servicesCard.link}>Daha Fazla</Link></div>
            </div>
        </div>
    )
}