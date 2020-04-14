import React from 'react'

import Layout from '../../components/Layout'
import BlogList from '../../components/BlogList'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="siteContent">
          <div className="siteContent-inner">
            <h1>Blog</h1>
            <BlogList />
          </div>
        </div>
      </Layout>
    )
  }
}
