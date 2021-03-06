import React from 'react'
import FaBook from 'react-icons/lib/fa/book'
import FaEnvelope from 'react-icons/lib/fa/envelope'
import FaGlobe from 'react-icons/lib/fa/globe'
import FaGithubAlt from 'react-icons/lib/fa/github-alt'
import FaHome from 'react-icons/lib/fa/home'
import FaLinkedinSqure from 'react-icons/lib/fa/linkedin-square'
import FaPhone from 'react-icons/lib/fa/phone'
import { map } from 'ramda'

import { Avatar } from '../core'

import Publication from '../modules/resume/publication'
import Skill from '../modules/resume/skill'
import WorkEntry from '../modules/resume/work-entry'
import resumeData from '../modules/resume/data'

const presentHrefAsLabel = href => href.replace(/https?:\/\/(www\.)?/, '')
const presentLocation = location => `${location.city}, ${location.region_abbrv}`

const styles = {
  root: {
    height: '11in',
    margin: '0 auto',
    width: '8.5in',
  },
}

const PrintableResume = props => (
  <div className="flex primary" style={styles.root}>
    <div className="h-100 w-30 pa4 pt2 fl bg-primary white">
      <div className="mv2">
        <h2 className="mv0">{resumeData.basics.name}</h2>
        <h4 className="mv1 fw4">{resumeData.basics.label}</h4>
      </div>
      <ul className="list mv3 ph0 lh-copy" style={{ fontSize: '12px' }}>
        <li className="white-60">
          <FaHome className="mr2" />
          {presentLocation(resumeData.basics.location)}
        </li>
        <li>
          <a
            className="white-60"
            href={`tel:${resumeData.basics.phone}`}
            style={{ textDecoration: 'none' }}
            target="_blank"
          >
            <FaPhone className="mr2" />
            {resumeData.basics.phone}
          </a>
        </li>
        <li>
          <a
            className="white-60"
            href={`mailto:${resumeData.basics.email}`}
            style={{ textDecoration: 'none' }}
            target="_blank"
          >
            <FaEnvelope className="mr2" />
            {resumeData.basics.email}
          </a>
        </li>
        <li>
          <a
            className="white-60"
            href={resumeData.basics.profiles.github.url}
            style={{ textDecoration: 'none' }}
            target="_blank"
          >
            <FaGithubAlt className="mr2" />
            {presentHrefAsLabel(resumeData.basics.profiles.github.url)}
          </a>
        </li>
        <li>
          <a
            className="white-60"
            href={resumeData.basics.profiles.linkedin.url}
            style={{ textDecoration: 'none' }}
            target="_blank"
          >
            <FaLinkedinSqure className="mr2" />
            {presentHrefAsLabel(resumeData.basics.profiles.linkedin.url)}
          </a>
        </li>
        <li>
          <a
            className="white-60"
            href={resumeData.basics.profiles.scholar.url}
            style={{ textDecoration: 'none' }}
            target="_blank"
          >
            <FaBook className="mr2" />
            scholar.google.com
          </a>
        </li>
      </ul>
      <p className="lh-copy tl mv3" style={{ fontSize: '12px' }}>
        {resumeData.basics.summary}
      </p>
      <div>
        <h3 className="mb2">Skills</h3>
        {map(
          props => <Skill baseFontSize="12px" key={props.name} {...props} />,
          resumeData.skills
        )}
      </div>
    </div>
    <div className="ph4">
      <article>
        <h3 className="mb0 bb b--black-10">Work Experience</h3>
        {map(
          props => (
            <WorkEntry baseFontSize="12px" key={props.company} {...props} />
          ),
          resumeData.work
        )}
        <span className="i fw2" style={{ fontSize: '12px' }}>
          additional work history available upon request
        </span>
      </article>
      <article>
        <h3 className="mb0 bb b--black-10">
          Publications (as contributing author)
        </h3>
        {map(
          props => (
            <Publication baseFontSize="12px" key={props.name} {...props} />
          ),
          resumeData.publications
        )}
      </article>
    </div>
  </div>
)

export default PrintableResume
