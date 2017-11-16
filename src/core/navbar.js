import React from 'react'
import Link from 'gatsby-link'
import { color, spacing } from '../theme'

const style = {
  main: {
    backgroundColor: color.white,
    borderBottom: `0.1em solid ${color.primary}`,
    fontSize: '1.33em',
    padding: spacing.half,
    textAlign: 'center',
  },
  link: {
    color: color.primary,
    marginRight: spacing.half,
  }
}

export default () => (
  <div style={style.main}>
    <Link to="/" style={style.link}>about</Link>
    <Link to="/" style={style.link}>projects</Link>
    <Link to="/" style={style.link}>resume</Link>
  </div>
)
