import React from 'react'

import Layout from '../../components/Layout'
import BlogList from '../../components/BlogList'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="siteContent">
          <div className="siteContent-inner">
            <h2>Blog</h2>
            <BlogList />
          </div>
        </div>
      </Layout>
    )
  }
}
