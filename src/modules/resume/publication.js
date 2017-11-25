import React from 'react'
import PropTypes from 'prop-types'
import { DateTime as dt } from 'luxon'

import { color } from '../../theme'

const presentDate = isoString => (
  dt.fromISO(isoString).toFormat('LLL yyyy')
)

const Publication = props => {
  const {
    name,
    publisher,
    releaseDate,
    website,
  } = props

  return (
    <article>
      <h4 className="fw4 mb1 measure-wide">
        <a
          href={website}
          style={{ color: color.accent, textDecoration: 'none' }}
          target="_blank"
        >
          {name}
        </a>
        , {publisher}
      </h4>
      <span className="f6 fw2">
        Published: {presentDate(releaseDate)}
      </span>
    </article>
  )
}

Publication.propTypes = {
  name: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
}

export default Publication
