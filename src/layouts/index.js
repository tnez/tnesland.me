import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { Navbar } from '../core'

const TemplateWrapper = props => {
  const { children, location } = props
  const { title, description, keywords } = props.data.site.siteMetadata

  return (
    <div className="avenir fw3">
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: keywords },
        ]}
      />
      {location.pathname.match(/(printable\-)?resume\/?/) ? null : <Navbar />}
      <div>{children()}</div>
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
      }),
    }),
  }),
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
