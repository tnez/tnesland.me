import React from 'react'
import Link from 'gatsby-link'
import FaBook from 'react-icons/lib/fa/book'
import FaEnvelope from 'react-icons/lib/fa/envelope'
import FaGlobe from 'react-icons/lib/fa/globe'
import FaGithubAlt from 'react-icons/lib/fa/github-alt'
import FaHome from 'react-icons/lib/fa/home'
import FaLinkedinSqure from 'react-icons/lib/fa/linkedin-square'
import FaPhone from 'react-icons/lib/fa/phone'
import FaPrint from 'react-icons/lib/fa/print'
import { map } from 'ramda'

import { Avatar } from '../core'
import { color } from '../theme'

import Publication from '../modules/resume/publication'
import Skill from '../modules/resume/skill'
import WorkEntry from '../modules/resume/work-entry'
import resumeData from '../modules/resume/data'

const presentHrefAsLabel = href => href.replace(/https?:\/\/(www\.)?/, '')
const presentLocation = location => `${location.city}, ${location.region_abbrv}`

const Resume = props => (
  <div className="flex flex-wrap">
    <div className="w-100 w-third-l bg-primary white">
      <article className="br2 pa4 lh-copy">
        <Avatar size={4} />
        <div className="mv2 lh">
          <h2 className="mv0">{resumeData.basics.name}</h2>
          <h4 className="mv0 fw4">{resumeData.basics.label}</h4>
        </div>
        <ul className="list mv3 ph0 tl lh-copy">
          <li className="white-60">
            <FaHome className="mr2" />
            {presentLocation(resumeData.basics.location)}
          </li>
          <li>
            <a
              className="link white-60"
              href={`tel:${resumeData.basics.phone}`}
              target="_blank"
            >
              <FaPhone className="mr2" />
              {resumeData.basics.phone}
            </a>
          </li>
          <li>
            <a
              className="link white-60"
              href={`mailto:${resumeData.basics.email}`}
              target="_blank"
            >
              <FaEnvelope className="mr2" />
              {resumeData.basics.email}
            </a>
          </li>
          <li>
            <a
              className="link white-60"
              href={resumeData.basics.profiles.github.url}
              target="_blank"
            >
              <FaGithubAlt className="mr2" />
              {presentHrefAsLabel(resumeData.basics.profiles.github.url)}
            </a>
          </li>
          <li>
            <a
              className="link white-60"
              href={resumeData.basics.profiles.linkedin.url}
              target="_blank"
            >
              <FaLinkedinSqure className="mr2" />
              {presentHrefAsLabel(resumeData.basics.profiles.linkedin.url)}
            </a>
          </li>
          <li>
            <a
              className="link white-60"
              href={resumeData.basics.profiles.scholar.url}
              target="_blank"
            >
              <FaBook className="mr2" />
              scholar.google.com
            </a>
          </li>
        </ul>
        <p className="measure-narrow lh-copy mv3">
          {resumeData.basics.summary}
        </p>
      </article>
    </div>
    <div className="w-100 w-two-thirds-l ph4 ph5-l primary">
      <article className="mt4">
        <h3 className="bb b--black-10">Skills</h3>
        {map(
          props => (
            <Skill
              key={props.name}
              {...props}
              tileBackgroundColor={color.white}
              tileForegroundColor={color.accent}
            />
          ),
          resumeData.skills
        )}
      </article>
      <article className="mt4">
        <h3 className="bb b--black-10">Work Experience</h3>
        {map(
          props => <WorkEntry key={props.company} {...props} />,
          resumeData.work
        )}
      </article>
      <article className="mv4">
        <h3 className="bb b--black-10">Publications</h3>
        {map(
          props => <Publication key={props.name} {...props} />,
          resumeData.publications
        )}
      </article>
    </div>
    <Link
      className="fixed bottom-1 right-1 bg-red white br-100 shadow-2"
      style={{ fontSize: '2em' }}
      to="/printable-resume"
    >
      <FaPrint className="pa2" />
    </Link>
  </div>
)

export default Resume
