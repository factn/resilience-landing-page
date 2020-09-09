import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const VolunteerSpotlightPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div className="siteContent">
      <div className="siteContent-inner">
        <h1>{title}</h1>
        <PageContent className="content" content={content} />
      </div>
    </div>
  );
};


VolunteerSpotlightPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const VolunteerSpotlightPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <VolunteerSpotlightPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

VolunteerSpotlightPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default VolunteerSpotlightPage;

export const VolunteerSpotlightPageQuery = graphql`
  query VolunteerSpotlightPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;