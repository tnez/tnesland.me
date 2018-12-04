import React from 'react'
import PropTypes from 'prop-types'
import { DateTime as dt } from 'luxon'

const presentDate = isoString => dt.fromISO(isoString).toFormat('LLL yyyy')

const Publication = props => {
  const { baseFontSize, name, publisher, releaseDate, website } = props

  const rootStyle = baseFontSize ? { fontSize: baseFontSize } : {}

  return (
    <article style={rootStyle}>
      <h4 className="fw4 mb1 measure-wide">
        <a className="link accent" href={website} target="_blank">
          {name}
        </a>
        , {publisher}
      </h4>
      <h7 className="fw2">Published: {presentDate(releaseDate)}</h7>
    </article>
  )
}

Publication.propTypes = {
  baseFontSize: PropTypes.string,
  name: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
}

export default Publication
