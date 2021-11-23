import React from "react"
import Layout from "../../components/Layout"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// const image = getImage(data.blogPost.avatar)
{
  /* <GatsbyImage image={image} alt={data.blogPost.author} /> */
}

const ProjectsIndex = ({ data }) => {
  console.log(data)
  const projects = data.allMarkdownRemark.nodes
  console.log(projects[0].frontmatter.thumb)
  return (
    <Layout>
      <div className="project-index portofolio">
        <h2>I'm the index of the project !</h2>
        <p>Looks good !</p>
        <div className="projects">
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <GatsbyImage
                  image={getImage(project.frontmatter.thumb)}
                  alt="thumb"
                />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>
          Loving what you see ? contact me on{" "}
          {data.siteInfo.siteMetadata.contact}
        </p>
      </div>
    </Layout>
  )
}

export default ProjectsIndex
export const query = graphql`
  query Projects {
    allMarkdownRemark: allMarkdownRemark {
      nodes {
        id
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              gatsbyImageData
            }
          }
          featuredImg {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
    siteInfo: site {
      siteMetadata {
        contact
      }
    }
  }
`
