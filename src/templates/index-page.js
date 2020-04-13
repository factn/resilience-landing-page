import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Mission from '../components/Mission'
import Video from '../components/Video'
import Section from '../components/Section'
import Contribute from '../components/Contribute'
import Team from '../components/Team'

export const IndexPageTemplate = ({
  hero,
  video,
  mission,
  section,
  contribute,
  team
}) => (
    <Fragment>
      <Hero title={hero.title} button={hero.button} />
      <Mission step={mission.step} />
      <Video title={video.title} url={video.url} />
      <Section row={section.row} />
      <Contribute channel={contribute.channel} />
      <Team member={team.member} />
    </Fragment >
  )

IndexPageTemplate.propTypes = {
  hero: PropTypes.shape({
    title: PropTypes.string,
    button: PropTypes.array,
  }),
  mission: PropTypes.shape({
    step: PropTypes.array,
  }),
  video: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
  }),
  section: PropTypes.shape({
    row: PropTypes.array,
  }),
  contribute: PropTypes.shape({
    channel: PropTypes.array,
  }),
  team: PropTypes.shape({
    member: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        hero={frontmatter.hero}
        mission={frontmatter.mission}
        video={frontmatter.video}
        section={frontmatter.section}
        contribute={frontmatter.contribute}
        team={frontmatter.team}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
query IndexPageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "index-page" } }) {
    frontmatter {
      hero {
        title
        button {
          label
          url
        }
      }
      mission {
        step {
          image {
            childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
            }
          }
        }
        text
        }
      }
      video {
        url
      }
      section {
        row {
          image {
            childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        text
        }
      }
      contribute {
        heading
        text
        channel {
          image {
            childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        text
        button
        url
        }
      }
      team {
        heading
        text
        member {
          image {
            childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        }
      }
    }
  }
}
`