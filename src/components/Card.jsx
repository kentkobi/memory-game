import React from "react";
import PropTypes from 'prop-types'
import './Card.css';

const Card = ({id, type, isFlipped, onClick}) => {
    return (
        <div id={id} className={"memory-card " + (isFlipped ? "flip" : " ") } onClick={onClick}>
            <img className="front-face" src={`/img/${type}.jpg`} alt="" />
            <img className="back-face" src="img/card-back.jpg" alt="" />
        </div>
    )
}

Card.propTypes = {
    type: PropTypes.string.isRequired,
    isFlipped: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Card;