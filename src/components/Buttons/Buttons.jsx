import React from 'react'
import { connect } from 'react-redux';

import { addIngredient, removeIngredient } from '../../actions/ingredients';

import './styles.css';

const Buttons = ({ ingredients, toggleIngredient }) => (
    <div className="buttonGroup">
        <button
            className="button button1"
            onClick={() => toggleIngredient(ingredients.bacon, 'bacon')}
        >
            {ingredients.bacon ? 'Remove' : 'Add'} bacon
        </button>
        <button className="button button3">Remove bacon</button>
        <button className="button button1">Add cheese</button>
        <button className="button button3">Remove cheese</button>
        <button className="button button1">Add onion</button>
        <button className="button button3">Remove onion</button>
        <button className="button button1">Add mushroom</button>
        <button className="button button3">Remove mushroom</button>
        <button className="button button1">Add tomato</button>
        <button className="button button3">Remove tomato</button>
    </div>
)

const mapStateToProps = (state) => ({
    ingredients: state.ingredients
}) 

const mapDispatchToProps = (dispatch) => ({
    toggleIngredient: (isTurnedOn, name) => dispatch(isTurnedOn ? removeIngredient(name) : addIngredient(name)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Buttons)
