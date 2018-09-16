import React from 'react'

import { Onion } from '../Onion'
import { Bacon } from '../Bacon'
import { Mushroom } from '../Mushroom'
import { Cheese }  from '../Cheese'
import { Tomato } from '../Tomato'
import './styles.css'

const NUMBER_OF_INGREDIENTS = 5;

const ingredients = {
    tomato: Tomato,
    onion: Onion,
    mushroom: Mushroom,
    bacon: Bacon
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
    const bacon = renderIngridient('bacon')
    const mushrooms = renderIngridient('mushroom')
    const onions = renderIngridient('onion')

    return (
        <div className="pizza">
            <div className="crust" />
            <Cheese />
            {tomatoes}
            {bacon}
            {mushrooms}
            {onions}
        </div>
    )
}

export default Pizza
