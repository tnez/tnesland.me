import React from 'react'

import { color } from '../theme'

const IndexPage = () => (
  <div
    className="vh-100 pa4 flex items-center justify-center"
    style={{ backgroundColor: color.white }}
  >
    <div>
      <p
        className="f4 f3-m f2-l fw6 lh-copy"
        style={{ color: color.lightgrey }}
      >
        My name is Travis<br />
        I am a software developer<br />
        who crafts solutions in<br />
        ruby / python / node / react
      </p>
    </div>
  </div>
)

export default IndexPage
