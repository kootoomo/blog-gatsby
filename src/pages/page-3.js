import * as React from "react"
import { Link } from "gatsby"

// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
// import * as styles from "../components/index.module.css"

const ThirdPage = () => (
  <Layout>
    <h1>Hiya from the THIRD page!</h1>
  </Layout>
)

export const Head = () => <Seo title="Page three" />

export default ThirdPage
