import React, { PropTypes } from 'react'

const Summary = React.createClass({
    displayName: "Summary",
    propTypes: {
        ingredients: PropTypes.number.isRequired,
        steps: PropTypes.number.isRequired,
        title: PropTypes.string
    },
    getDefaultProps() {
        return {
            ingredients: 0,
            steps: 0,
            title: "[recipe]"
        }
    },
    render() {
        const {ingredients, steps, title} = this.props
        return (
            <div className="summary">
                <h1>{title}</h1>
                <p>
                    <span>{ingredients} Ingredients</span> |
                    <span> {steps} Steps</span>
                </p>
            </div>
        )
    }
})


export default Summary
