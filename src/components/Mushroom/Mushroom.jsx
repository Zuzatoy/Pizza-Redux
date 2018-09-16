import React from 'react'

import './styles.css';

const Mushroom = ({ className = '' }) => (
    <div className={`mushroom ${className}`} />
)

export default Mushroom;