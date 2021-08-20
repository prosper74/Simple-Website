import React from "react"
import Layout from "../components/common/Layout"
import * as style from "../styles/singlepost.module.css"
import {
  Bookmark,
  Facebook,
  Twitter,
  Instagram,
  WhatsApp,
} from "@material-ui/icons"
import IconButton from "@material-ui/core/IconButton"
import Tooltip from "@material-ui/core/Tooltip"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { timeSince } from "../components/dateFunction"

export default function SinglePost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className={style.singlePost}>
        <GatsbyImage
          image={getImage(post.frontmatter.featuredImage)}
          alt=""
          className={style.featuredImage}
        />
        <div>
          <div className={style.metadata}>
            <span>
              <em>Author: Prosper Atu</em>
            </span>
            <div className={style.metadataInfo}>
              <span>{timeSince(new Date(post.frontmatter.date))} ago</span>
              <Tooltip title="Bookmark" className={style.bookmarkIcon}>
                <IconButton aria-label="delete">
                  <Bookmark />
                </IconButton>
              </Tooltip>
            </div>
          </div>
          <div className={style.mainContent}>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
          <div className="shareButtons">
            <b>Shar to:</b>
            <Tooltip
              title="Share post to facebook"
              className={style.bookmarkIcon}
            >
              <IconButton aria-label="delete">
                <Facebook />
              </IconButton>
            </Tooltip>
            <Tooltip
              title="Share post to Twitter"
              className={style.bookmarkIcon}
            >
              <IconButton aria-label="delete">
                <Twitter />
              </IconButton>
            </Tooltip>
            <Tooltip
              title="Share post to Whatsapp"
              className={style.bookmarkIcon}
            >
              <IconButton aria-label="delete">
                <WhatsApp />
              </IconButton>
            </Tooltip>
            <Tooltip
              title="Share post to facebook"
              className={style.bookmarkIcon}
            >
              <IconButton aria-label="delete">
                <Instagram />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PostTemplateQuery($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        date
        title
        featuredImage {
          childImageSharp {
            gatsbyImageData(
              blurredOptions: { width: 100 }
              placeholder: BLURRED
              transformOptions: { cropFocus: CENTER }
            )
          }
        }
      }
      html
      id
    }
  }
`
