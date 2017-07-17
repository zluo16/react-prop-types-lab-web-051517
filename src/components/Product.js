import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Product extends Component {
  render() {
    return (
      <div>
        <p><strong>Name: </strong>{this.props.name}</p>
        <p><strong>Producer: </strong>{this.props.producer}</p>
        <p><strong>Watermark?: </strong>{this.props.hasWatermark ? "Yes" : "No"}</p>
        <p><strong>Color: </strong>{this.props.color}</p>
        <p><strong>Weight: </strong>{this.props.weight}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  producer: '--',
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf([
    'white',
    'eggshell-white',
    'salmon'
  ]).isRequired,
  weight: (props, propName) => {
    var weight = props[propName]
    if (weight === undefined) {
      return new Error("The 'weight' prop is required")
    } if (isNaN(weight)) {
      return new Error("The 'weight' prop must be a number")
    } if (!(weight > 80 && weight < 300)) {
      return new Error('The `weight` prop should range between 80 and 300.')
    }
  }
}

export default Product
