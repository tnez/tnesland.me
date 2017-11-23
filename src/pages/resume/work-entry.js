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
  <li className="lh-copy measure" key={idx}>
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

  return (
    <article>
      <h4 className="lh-title mb0">{position}, {companyLink(company, website)}</h4>
      <span className="f6 fw2">
        {presentDate(startDate)} - {presentDate(endDate)}
      </span>
      <p className="lh-copy measure-wide">{summary}</p>
      <ul>
        {addIndex(map)(presentHighlight, highlights)}
      </ul>
    </article>
  )
}

WorkEntry.propTypes = {
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
