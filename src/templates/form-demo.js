import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const FormDemoTemplatePage = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div className="siteContent">
      <div className="siteContent-inner">
        <h1>{title}</h1>
        <form
          // action="/contact/thanks/"
          data-netlify-honeypot="bot-field"
          data-netlify="true"
          method="post"
          name="contact"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p class="hidden">
            <label>
              Don’t fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          <p>
            <label>
              Name <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Email <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Text <input type="text" name="text" />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    </div>
  );
};

FormDemoTemplatePage.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const FormDemo = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <FormDemoTemplatePage
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

FormDemo.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FormDemo;

export const formDemoQuery = graphql`
  query FormDemo($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
