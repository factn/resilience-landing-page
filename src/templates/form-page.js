import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import FeatureList from '../components/FeatureList';

export const FormPageTemplate = ({
  title,
  content,
  contentComponent,
  features,
}) => {
  const PageContent = contentComponent || Content;

  const recap = useMemo(() => {
    if (features.length > 0) {
      if (content) {
        return (
          <Grid container spacing={5} alignItems="center">
            <Grid item md={7} xs={12}>
              <h2>{title}</h2>
              <PageContent className="content" content={content} />
            </Grid>
            <Grid item md={5} xs={12}>
              <FeatureList items={features} />
            </Grid>
          </Grid>
        );
      } else {
        return (
          <div>
            <h2>{title}</h2>
            <FeatureList items={features} />
          </div>
        );
      }
    } else if (content) {
      return (
        <div>
          <h2>{title}</h2>
          <PageContent className="content" content={content} />
        </div>
      );
    }

    return <h2>{title}</h2>;
  }, [title, features, content])

  return (
    <div className="siteContent">
      <div className="siteContent-inner">
        {recap}
      </div>
    </div>
  );
};

FormPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  features: PropTypes.arrayOf(PropTypes.string),
};

FormPageTemplate.defaultProps = {
  content: "",
  features: [],
}

const FormPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <FormPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        features={post.frontmatter.features}
      />
    </Layout>
  );
};

FormPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }).isRequired,
};

export default FormPage;

export const formPageQuery = graphql`
  query FormPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        features
      }
    }
  }
`;
