import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectDetails = ({ data }) => {
  const { html } = data.allMarkdownRemark.nodes[0]
  const { stack, title, featuredImg } =
    data.allMarkdownRemark.nodes[0].frontmatter

  return (
    <Layout>
      <div className="details">
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className="featured">
          <GatsbyImage image={getImage(featuredImg)} alt="featured" />
        </div>
        <div classame="html" dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </Layout>
  )
}

export default ProjectDetails

export const query = graphql`
  query MyQuery($slug: String) {
    allMarkdownRemark(filter: { frontmatter: { slug: { eq: $slug } } }) {
      nodes {
        frontmatter {
          stack
          title
          featuredImg {
            childImageSharp {
              gatsbyImageData(formats: [AUTO])
            }
          }
        }
        html
      }
    }
  }
`
