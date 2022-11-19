const React = require('react')
const Default = require('./layouts/Default')

function FourZeroFour({title}) {
    return (
        <Default title={title}>
            <div className="fourzerofour">
                <img src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1470175715831-NUJOMI6VW13ZNT1MI0VB/image-asset.jpeg?format=750w" alt="404 image of Sadness"></img>
                <h1>AWWW... Don't cry.</h1>
                <h3>It's just a 404 error!</h3>
                <h3>What you're looking for may have been misplaced in Long Term Memory</h3>
                <h3>Or someone was hungry and just ate the bread!</h3>
            </div>
        </Default>
    )
}

module.exports = FourZeroFour
