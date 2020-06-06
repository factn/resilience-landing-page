import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const StoriesPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <div className="siteContent">
      <div className="siteContent-inner">
        {helmet || ''}
        <h1>{title}</h1>
        <p>{description}</p>

        <div className="storiesPost-content">
          <PostContent content={content} />
        </div>

        {tags && tags.length ? (
          <div className="tagList-wrapper">
            <h4>Tags</h4>
            <ul className="tagList">
              {tags.map((tag) => (
                <li key={`${tag}tag`}>
                  <Link className="tag" to={`/tags/${kebabCase(tag)}/`}>
                    {tag}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

StoriesPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const StoriesPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <StoriesPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Stories">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        )}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

StoriesPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default StoriesPost;

export const pageQuery = graphql`
  query StoriesPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
