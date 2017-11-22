import React from 'react'
import PropTypes from 'prop-types'

import face from './face.jpg'

const Avatar = props => (
  <img
    alt="face"
    className={`br-100 h${props.size} w${props.size}`}
    src={face}
  />
)

Avatar.propTypes = {
  size: PropTypes.number.isRequired,
}

export default Avatar
