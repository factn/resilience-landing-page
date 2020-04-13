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
query IndexPageQuery {
  markdownRemark {
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
            absolutePath
          }
          heading
        }
      }
      video {
        title
        url
      }
      section {
        row {
          image {
            absolutePath
          }
          heading
          text
          button
          url
        }
      }
      contribute {
        heading
        channel {
          image {
            absolutePath
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
            absolutePath
          }
          heading
        }
      }
      templateKey
    }
  }
}
`