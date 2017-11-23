import React from 'react'
import PropTypes from 'prop-types'
import { addIndex, map } from 'ramda'

import { color } from '../../theme'

const presentKeyword = (str, idx) => (
  <li
    className="dib white br-2 pa1 br2 mh1 measure"
    key={idx}
    style={{
      border: `solid 1px ${color.accent}`,
      color: color.accent,
    }}
  >
    {str}
  </li>
)

const Skill = props => {
  const { keywords, name } = props

  return (
    <article>
      <h4 className="ma0">{name}</h4>
      <ul className="f7">
        {addIndex(map)(presentKeyword, keywords)}
      </ul>
    </article>
  )
}

Skill.propTypes = {
  keywords: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,
  name: PropTypes.string.isRequired,
}

export default Skill
