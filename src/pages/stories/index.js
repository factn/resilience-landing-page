import React from 'react';

import Layout from '../../components/Layout';
import StoriesList from '../../components/StoriesList';

export default class StoriesIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="siteContent">
          <div className="siteContent-inner">
            <h1>Stories</h1>
            <StoriesList />
          </div>
        </div>
      </Layout>
    );
  }
}
