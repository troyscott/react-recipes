import React, { PropTypes } from 'react'

// Stateless Functional Component
// Similar to the es6 classes

const Summary = ({ ingredients, steps, title}) => {
    return <div className="summary">
            <h1>{title}</h1>
            <p>{ingredients} Ingredients|{steps} Steps</p>
    </div>
}

Summary.propTypes = {
    ingredients: PropTypes.number.isRequired,
    steps: PropTypes.number.isRequired
}

Summary.defaultProps = {
    ingredients: 1,
    steps: 1,
    title: '[recipes]'

}


export default Summary



/*

// React.createClass approach

const Summary = React.createClass({
    displayName: "Summary",
    propTypes: {
        ingredients: PropTypes.number.isRequired,
        steps: PropTypes.number.isRequired,
        title: (props, propName) =>
            (typeof props[propName] !== 'string') ?
                new Error("A title must be a string") :
                (props[propName].length > 20) ?
                new Error('title is over 20 characters'):
                null
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

*/
