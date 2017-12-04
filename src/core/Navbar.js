import React from 'react'
import Link from 'gatsby-link'
import FaBook from 'react-icons/lib/fa/book'
import FaGithubAlt from 'react-icons/lib/fa/github-alt'
import FaLinkedinSqure from 'react-icons/lib/fa/linkedin-square'

const style = {
  link: {
    textTransform: 'lowercase',
  },
}

const Navbar = props => {
  return (
    <div
      className="fixed top-0 w-100 flex justify-between pa3 mb3 bg-white o-90"
    >
      <div className="flex">
        <Link
          className="primary link dim ph2 fw7 ttl"
          to="/"
        >
          tnesland.me
        </Link>
        <Link
          className="link lightgrey dim ph2 ttl"
          target="_blank"
          to="/resume"
        >
          Resume
        </Link>
      </div>
      <div>
        <a
          className="lightgrey dim ph2"
          href="https://github.com/tnez"
          target="_blank"
        >
          <FaGithubAlt />
        </a>
        <a
          className="lightgrey dim ph2"
          href="https://www.linkedin.com/in/tnesland"
          target="_blank"
        >
          <FaLinkedinSqure />
        </a>
        <a
          className="lightgrey dim ph2"
          href="https://scholar.google.com/citations?user=R2m4jbUAAAAJ"
          target="_blank"
        >
          <FaBook />
        </a>
      </div>
    </div>
  )
}

export default Navbar
