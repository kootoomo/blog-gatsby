import * as React from "react"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <div className={styles.textLeft}>
      <p className={styles.introSecondPage}>
        <StaticImage
            src="../images/gatsby-astronaut.png"
            loading="eager"
            width={100}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
        />
      </p>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
