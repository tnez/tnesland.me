import React from 'react'
import Link from 'gatsby-link'
import FaBook from 'react-icons/lib/fa/book'
import FaGithubAlt from 'react-icons/lib/fa/github-alt'
import FaLinkedinSqure from 'react-icons/lib/fa/linkedin-square'

import { color } from '../theme'

const style = {
  root: { backgroundColor: color.white },
  link: {
    color: color.lightgrey,
    textDecoration: 'none',
    textTransform: 'lowercase',
  },
}

const Navbar = props => {

  return (
    <div
      className="fixed top-0 w-100 flex justify-between pa3 mb3 o-90"
      style={style.root}
    >
      <div className="flex">
        <Link
          className="dim ph2 fw7"
          style={{ ...style.link, color: color.primary }}
          to="/"
        >
          tnesland.me
        </Link>
        <Link
          className="dim ph2"
          style={style.link}
          target="_blank"
          to="/resume"
        >
          Resume
        </Link>
      </div>
      <div style={style.socialLinks}>
        <a
          className="dim ph2"
          href="https://github.com/tnez"
          style={style.link}
          target="_blank"
        >
          <FaGithubAlt />
        </a>
        <a
          className="dim ph2"
          href="https://www.linkedin.com/in/tnesland"
          style={style.link}
          target="_blank"
        >
          <FaLinkedinSqure />
        </a>
        <a
          className="dim ph2"
          href="https://scholar.google.com/citations?user=R2m4jbUAAAAJ"
          style={style.link}
          target="_blank"
        >
          <FaBook />
        </a>
      </div>
    </div>
  )
}

export default Navbar
