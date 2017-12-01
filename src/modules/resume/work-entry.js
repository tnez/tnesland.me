import React from 'react'
import PropTypes from 'prop-types'
import { addIndex, map } from 'ramda'
import { DateTime as dt } from 'luxon'

import { color } from '../../theme'

const companyLink = (company, website) => (
  <a
    className="fw3"
    href={website}
    style={{ color: color.accent }}
    target="_blank"
  >
    {company}
  </a>
)

const presentDate = isoString => {
  if (isoString) {
    return dt.fromISO(isoString).toFormat('LLL yyyy')
  }

  return 'Present'
}

const presentHighlight = (str, idx) => (
  <li className="lh-title measure" key={idx}>
    {str}
  </li>
)

const WorkEntry = props => {
  const {
    company,
    endDate,
    highlights,
    position,
    startDate,
    summary,
    website,
  } = props

  const rootStyle = props.baseFontSize ? { fontSize: props.baseFontSize } : {}

  return (
    <article style={rootStyle}>
      <h4 className="mb1">{position}, {companyLink(company, website)}</h4>
      <h7 className="fw2">
        {presentDate(startDate)} - {presentDate(endDate)}
      </h7>
      <p className="mt1 lh-title measure-wide">{summary}</p>
      <ul>
        {addIndex(map)(presentHighlight, highlights)}
      </ul>
    </article>
  )
}

WorkEntry.propTypes = {
  baseFontSize: PropTypes.string,
  company: PropTypes.string.isRequired,
  endDate: PropTypes.string,
  highlights: PropTypes.arrayOf(
    PropTypes.string).isRequired,
  position: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
}

export default WorkEntry
