import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          copyright
          description
          title
        }
      }
    }
  `)
  console.log("Navbar data", data)
  return (
    <nav>
      <h1>Web Warriors</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portofolio Projects</Link>
      </div>
    </nav>
  )
}

export default Navbar
