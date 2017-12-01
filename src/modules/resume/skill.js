import React from 'react'
import PropTypes from 'prop-types'
import { addIndex, map } from 'ramda'

import { color } from '../../theme'

const presentKeyword = props => (str, idx) => (
  <li
    className={props.itemClass}
    key={idx}
    style={{
      backgroundColor: props.tileBackgroundColor,
      border: `solid 1px ${props.tileForegroundColor}`,
      color: props.tileForegroundColor,
    }}
  >
    {str}
  </li>
)

const Skill = props => {
  const {
    baseFontSize,
    collectionClass,
    headerClass,
    keywords,
    name,
  } = props

  const rootStyle = baseFontSize ? { fontSize: baseFontSize } : {}
  return (
    <article style={rootStyle}>
      <h3 className={headerClass}>{name}</h3>
      <ul className={collectionClass} style={{ fontSize: '0.66em' }}>
        {addIndex(map)(presentKeyword(props), keywords)}
      </ul>
    </article>
  )
}

Skill.propTypes = {
  baseFontSize: PropTypes.string,
  collectionClass: PropTypes.string,
  headerClass: PropTypes.string,
  itemClass: PropTypes.string,
  keywords: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,
  name: PropTypes.string.isRequired,
  tileBackgroundColor: PropTypes.string,
  tileForegroundColor: PropTypes.string,
}

Skill.defaultProps = {
  collectionClass: 'ph0 mt0',
  headerClass: 'mv1 fw2',
  itemClass: 'dib br2 pa1 ma1',
  tileBackgroundColor: color.accent,
  tileForegroundColor: color.white,
}

export default Skill
