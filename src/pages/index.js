import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <section className="home header">
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link className="btn" to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        {/* <img src="banner.png" alt="banner Image" style={{ maxWidth: "100%" }} /> */}
        <StaticImage
          src="../images/banner.png"
          alt="banner Image"
        ></StaticImage>
      </section>
    </Layout>
  )
}
// export const query = graphql`
//   query Banner {
//     file(relativePath: { eq: "banner.png" }) {
//       id
//       childImageSharp {
//         fluid {
//           ...GastbyImageSharpFluid
//         }
//       }
//     }
//   }
// `
