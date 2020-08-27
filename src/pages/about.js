import React from 'react'
import { Link } from "gatsby"

import Layout from '../components/Layout'

const About = () => {

  return (
    <Layout>
      <h1>This is the about page</h1>
      <p><Link to="https://www.google.com">Go to google</Link></p>
    </Layout>
  )
}

export default About