import React from 'react'
import FaBook from 'react-icons/lib/fa/book'
import FaEnvelope from 'react-icons/lib/fa/envelope'
import FaGlobe from 'react-icons/lib/fa/globe'
import FaGithubAlt from 'react-icons/lib/fa/github-alt'
import FaLinkedinSqure from 'react-icons/lib/fa/linkedin-square'
import FaPhone from 'react-icons/lib/fa/phone'
import { map } from 'ramda'

import { Avatar } from '../../core'
import { color } from '../../theme'

import Publication from './publication'
import Skill from './skill'
import WorkEntry from './work-entry'
import resumeData from './resume'

const presentHrefAsLabel = href => href.replace(/https?:\/\//, '')

const Resume = props => (
  <div className="flex">
    <div
      className="flex-stretch white bg-blue"
      style={{ backgroundColor: color.primary }}
    >
      <article className="br2 pa4 lh-copy">
        <Avatar size={4} />
        <h2 className="mt1 mb0">{resumeData.basics.name}</h2>
        <h3 className="fw3 mt0 mb3">{resumeData.basics.label}</h3>
        <ul className="mv0 ph0 tl" style={{ listStyle: 'none' }}>
          <li>
            <a
              className="f6 white-60"
              href={`tel:${resumeData.basics.phone}`}
              style={{ textDecoration: 'none' }}
              target="_blank"
            >
              <FaPhone className="f5 mr2"/> {resumeData.basics.phone}
            </a>
          </li>
          <li>
            <a
              className="f6 white-60"
              href={`mailto:${resumeData.basics.email}`}
              style={{ textDecoration: 'none' }}
              target="_blank"
            >
              <FaEnvelope className="f5 mr2"/> { resumeData.basics.email }
            </a>
          </li>
          <li>
            <a
              className="f6 white-60"
              href={resumeData.basics.profiles.github.url}
              style={{ textDecoration: 'none' }}
              target="_blank"
            >
              <FaGithubAlt className="f5 mr2"/>
              {presentHrefAsLabel(resumeData.basics.profiles.github.url)}
            </a>
          </li>
          <li>
            <a
              className="f6 white-60"
              href="https://www.linkedin.com/in/tnesland"
              style={{ textDecoration: 'none' }}
              target="_blank"
            >
              <FaLinkedinSqure className="f5 mr2"/>
              {presentHrefAsLabel(resumeData.basics.profiles.linkedin.url)}
            </a>
          </li>
          <li>
            <a
              className="f6 white-60"
              href="https://scholar.google.com/citations?user=R2m4jbUAAAAJ"
              style={{ textDecoration: 'none' }}
              target="_blank"
            >
              <FaBook className="f5 mr2"/>scholar.google.com
            </a>
          </li>
        </ul>
        <p className="fw2 measure-narrow lh-copy tl">
          {resumeData.basics.summary}
        </p>
      </article>
    </div>
    <div className="ph5" style={{ color: color.primary }}>
      <article className="mt4">
        <h3 className="f3 bb b--black-10">Skills</h3>
        {map(props => <Skill {...props} />, resumeData.skills)}
      </article>
      <article className="mt4">
        <h3 className="f3 bb b--black-10">Work Experience</h3>
        {map(props => <WorkEntry {...props} />, resumeData.work)}
      </article>
      <article className="mv4">
        <h3 className="f3 bb b--black-10">Publications</h3>
        {map(props => <Publication {...props} />, resumeData.publications)}
      </article>
    </div>
  </div>
)

export default Resume
