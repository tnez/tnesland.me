import React from 'react'

import { AboutMe, Avatar } from '../core'

const style = {
  root: {
    textAlign: 'center',
  },
}

const IndexPage = () => (
  <div className="tc">
    <Avatar size={4.5} />
    <AboutMe />
  </div>
)

export default IndexPage
