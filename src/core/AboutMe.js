import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { length, times } from 'ramda'
import FaCircle from 'react-icons/lib/fa/circle'
import FaCircleO from 'react-icons/lib/fa/circle-o'

import { color } from '../theme'

const statements = [
  'I build interfaces in: react, react-native, es6/7/8',
  'I build platforms in: node, ruby',
  'I explore data with: R, python',
  'I love to wear many hats',
  'What can I do for you?',
]

class AboutMe extends Component {
  constructor(props) {
    super(props)

    this.state = { idx: 0 }

    this.nextIdx = this.nextIdx.bind(this)
    this.renderIndicator = this.renderIndicator.bind(this)
    this.setIdx = this.setIdx.bind(this)
  }

  componentDidMount() {
    this.interval = window.setInterval(this.nextIdx, 3600)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  nextIdx() {
    this.setIdx(this.state.idx + 1)
  }

  setIdx(idx) {
    if (idx < length(statements)) {
      this.setState({ idx })
    } else {
      this.setState({ idx: 0 })
    }
  }

  render() {
    return (
      <div
        className="f3 fw2 flex flex-column items-center"
        style={{ color: color.primary }}
      >
        <p className="lh-copy measure-narrow">
          My name is Travis Nesland.<br />
          I am a polyglot developer who enjoys the challenge of taking on new
          projects.
        </p>
        <p className="lh-copy measure-narrow">{statements[this.state.idx]}</p>
        <div className="f5 o-60" style={{ color: color.accent }}>
          {times(this.renderIndicator, length(statements))}
        </div>
      </div>
    )
  }

  renderIndicator(idx) {
    if (idx === this.state.idx) {
      return <FaCircle className="mh2" key={idx} />
    } else {
      return (
        <FaCircleO className="mh2" key={idx} onClick={() => this.setIdx(idx)} />
      )
    }
  }
}

export default AboutMe
