import React from 'react'

import { AboutMe, Avatar } from '../core'

const style = {
  root: {
    textAlign: 'center',
  },
}

const IndexPage = () => (
  <div style={style.root}>
    <Avatar size={5} />
    <AboutMe />
  </div>
)

export default IndexPage
