import React, { PropTypes } from 'react'

const Summary = React.createClass({
    displayName: "Summary",
    propTypes: {
        ingredients: PropTypes.number.isRequired,
        steps: PropTypes.number.isRequired,
        title: PropTypes.string
    },
    render() {
        const {ingredients, steps, title} = this.props
        return (
            <div className="summary">
                <h1>{title}</h1>
                <p>
                    <span>{ingredients.length} Ingredients</span> |
                    <span> {steps.length} Steps</span>
                </p>
            </div>
        )
    }
})


export default Summary
