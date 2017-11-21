import React from 'react'
import PropTypes from 'prop-types'

import typography from '../../theme/typography'
import face from './face.jpg'

const style = {
  root: size => {
    const s = typography.rhythm(size)

    return {
      borderRadius: '50%',
      marginTop: `calc(${s} / 8)`,
      marginBottom: `calc(${s} / 4)`,
      height: s,
      width: s,
    }
  },
}

const Avatar = props => (
  <img
    alt="face"
    src={face}
    style={style.root(props.size)}
  />
)

Avatar.propTypes = {
  size: PropTypes.number.required,
}

export default Avatar
