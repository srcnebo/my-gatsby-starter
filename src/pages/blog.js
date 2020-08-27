import React from 'react'
import { Link } from "gatsby"
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/Layout'
import blogStyles from './blog.module.scss'

const Blog = () => {
  const data = useStaticQuery(graphql`
  query{
    allMarkdownRemark{
      edges{
        node{
          frontmatter{
            title
            date
          },
          fields{
            slug
          }
        }
      }
    }
  }
`)

  return (
    <Layout>
      <h1>This is the blog page</h1>
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map((edge)=>{
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Blog