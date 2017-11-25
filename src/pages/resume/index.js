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

const Resume = props => (
  <div className="flex">
    <div
      className="flex-stretch white bg-blue"
      style={{ backgroundColor: color.primary }}
    >
      <article className="tc br2 pa4 lh-copy">
        <Avatar size={4} />
        <h2 className="ma1">{resumeData.basics.name}</h2>
        <h3 className="fw3 mt1">{resumeData.basics.label}</h3>
        <hr className="mv3 b--white-20"/>
        <div className="mv3">
          <a className="f4 mh3 white-60" href={`tel:${resumeData.basics.phone}`}>
            <FaPhone />
          </a>
          <a className="f4 mh3 white-60" href="mailto:tnesland@gmail.com">
            <FaEnvelope />
          </a>
          <a className="f4 mh3 white-60" href="https://github.com/tnez" target="_blank">
            <FaGithubAlt />
          </a>
          <a className="f4 mh3 white-60" href="https://www.linkedin.com/in/tnesland" target="_blank">
            <FaLinkedinSqure />
          </a>
          <a
            className="f4 mh3 white-60"
            href="https://scholar.google.com/citations?user=R2m4jbUAAAAJ"
            target="_blank"
          >
            <FaBook />
          </a>
        </div>
        <hr className="mv3 b--white-20"/>
        <p className="fw2 measure-narrow lh-copy pa2">
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
