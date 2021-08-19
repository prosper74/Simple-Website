import React from "react"
import * as style from "../../styles/blogposts.module.css"
import { UilExternalLinkAlt, UilCalender } from "@iconscout/react-unicons"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function BlogPosts() {
  // Graphql query to fetch the blog posts from the .md files
  const data = useStaticQuery(graphql`
    query PostsQuery {
      allMarkdownRemark(
        filter: { frontmatter: { stack: { eq: "Blog" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          frontmatter {
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  width: 800
                  blurredOptions: { width: 100 }
                  placeholder: BLURRED
                  transformOptions: { cropFocus: CENTER }
                )
              }
            }
            date
            excerpt
            slug
            title
          }
        }
      }
    }
  `)

  const postsData = data.allMarkdownRemark.nodes

  return (
    <div className={style.blogPosts}>
      <div className={style.blogContainer}>
        {postsData.map(d => (
          <Link
            to={"/blog/" + d.frontmatter.slug}
            key={d.id}
            className={style.postContent}
          >
            <GatsbyImage
              image={getImage(d.frontmatter.featuredImage)}
              alt={d.frontmatter.title}
              className={style.postImage}
            />
            <div className={style.postInformation}>
              <h3>{d.frontmatter.title}</h3>
              <p>{d.frontmatter.excerpt}</p>
            </div>
            <div className={style.postFooter}>
              <div className={style.readMore}>
                Read more
                <UilExternalLinkAlt size="15" className={style.readMoreIcon} />
              </div>
              <div className={style.readMore}>
                <UilCalender size="15" className={style.viewMoreIcon} />
                {new Date(d.frontmatter.date).toDateString()}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
