import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const ContributePageTemplate = ({
  title,
  content,
  contentComponent,
}) => {
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

ContributePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const ContributePage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ContributePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

ContributePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ContributePage;

export const aboutPageQuery = graphql`
  query ContributePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
