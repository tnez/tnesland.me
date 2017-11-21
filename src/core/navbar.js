import React from 'react'
import Link from 'gatsby-link'
import FaBook from 'react-icons/lib/fa/book'
import FaGithubAlt from 'react-icons/lib/fa/github-alt'
import FaLinkedinSqure from 'react-icons/lib/fa/linkedin-square'

import { color, typography } from '../theme'

const style = {
  icon: {
    //
  },
  link: {
    color: color.primary,
    marginRight: typography.rhythm(1),
    textDecoration: 'none',
    textTransform: 'lowercase',
  },
  logo: {
    color: color.primary,
    fontSize: '2em',
  },
  main: {
    alignItems: 'center',
    display: 'flex',
    marginBottom: typography.rhythm(1),
    padding: typography.rhythm(1 / 2),
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
  },
  socialLinks: {
    marginLeft: 'auto',
  },
}

export default () => (
  <div style={style.main}>
    <div style={style.navLinks}>
      <Link to="/" style={{ ...style.link, color: color.accent }}>
        tnesland.me
      </Link>
      <Link to="/" style={style.link}>
        Blog
      </Link>
      <Link to="/" style={style.link}>
        Resume
      </Link>
    </div>
    <div style={style.socialLinks}>
      <a href="https://github.com/tnez" style={style.link} target="_blank">
        <FaGithubAlt style={style.icon} />
      </a>
      <a
        href="https://www.linkedin.com/in/tnesland"
        style={style.link}
        target="_blank"
      >
        <FaLinkedinSqure style={style.icon} />
      </a>
      <a
        href="https://scholar.google.com/citations?user=R2m4jbUAAAAJ"
        style={style.link}
        target="_blank"
      >
        <FaBook style={style.icon} />
      </a>
    </div>
  </div>
)
