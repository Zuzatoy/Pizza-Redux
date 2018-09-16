import React from 'react'

import Onion from '../components/Onion'
import Bacon from '../components/Bacon'
import Mushroom from '../components/Mushroom'
import Cheese from '../components/Cheese'
import { Tomato } from '../components/Tomato'

const NUMBER_OF_INGREDIENTS = 5;

const ingredients = {
    tomato: Tomato,
}

const renderIngridient = (name, number = NUMBER_OF_INGREDIENTS) => {
    let components = [];
    for (let i = 0; i < number; i++) {
        components.push(ingredients[name]);
    }

    return (
        components.map((Component, i) => {
            const className = `${name}-${i + 1}`;

            return (
                <Component
                    key={className}
                    className={className}
                />
            )
        })
    )
}

const Pizza = () => {
    const tomatoes = renderIngridient('tomato')

    return (
        <div className="pizza">
            <div className="crust" />
            {tomatoes}
            <Bacon />
            <Cheese />
            <Mushroom />
            <Onion />
        </div>
    )
}

export default Pizza
