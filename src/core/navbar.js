import React from 'react'
import Link from 'gatsby-link'
import FaBook from 'react-icons/lib/fa/book'
import FaGithubAlt from 'react-icons/lib/fa/github-alt'
import FaLinkedinSqure from 'react-icons/lib/fa/linkedin-square'

import { color } from '../theme'

const style = {
  link: {
    color: color.primary,
    textDecoration: 'none',
    textTransform: 'lowercase',
  },
  socialLinks: {
    marginLeft: 'auto',
  },
}

export default () => (
  <div className="flex items-center pa2 f4">
    <div className="flex items-center">
      <Link
        className="ph2"
        style={{ ...style.link, color: color.accent }}
        to="/"
      >
        tnesland.me
      </Link>
      <Link
        className="ph2"
        style={style.link}
        to="/resume"
      >
        Resume
      </Link>
    </div>
    <div style={style.socialLinks}>
      <a
        className="ph2"
        href="https://github.com/tnez"
        style={style.link}
        target="_blank"
      >
        <FaGithubAlt />
      </a>
      <a
        className="ph2"
        href="https://www.linkedin.com/in/tnesland"
        style={style.link}
        target="_blank"
      >
        <FaLinkedinSqure />
      </a>
      <a
        className="ph2"
        href="https://scholar.google.com/citations?user=R2m4jbUAAAAJ"
        style={style.link}
        target="_blank"
      >
        <FaBook />
      </a>
    </div>
  </div>
)
