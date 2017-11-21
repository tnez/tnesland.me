import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Navbar } from '../core'

const TemplateWrapper = props => {
  const { children } = props
  const { title, description, keywords } = props.data.site.siteMetadata

  return (
    <div>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: keywords },
        ]}
      />
      <Navbar />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        {children()}
      </div>
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        description: PropTypes.string.required,
        keywords: PropTypes.arrayOf(PropTypes.string).required,
        title: PropTypes.string.required,
      })
    })
  })
}

export const query = graphql`
  query SiteMetadataQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`

export default TemplateWrapper
