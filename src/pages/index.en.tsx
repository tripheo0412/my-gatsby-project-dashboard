import React from 'react'
import { Global, css } from '@emotion/core'
import Grid from '../components/grid'
import Info from '../components/info'
import SEO from '../components/seo'

const Index = () => {
  return (
    <main
      css={css`
        max-width: 60rem;
        margin: 0 auto;
        padding: 2rem;
      `}
    >
      <SEO title="Home" lang="en" description="home page" />
      <Global
        styles={css`
          *::before,
          *::after {
            box-sizing: border-box;
          }
          ::selection {
            color: #fff;
            background-color: #3490dc;
          }
          body {
            border: 0;
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
            font-size: 18px;
            color: #24242d;
            background: #f0f2fd;
          }
        `}
      />
      <h1
        css={css`
          @media (min-width: 600px) {
            font-size: 3rem;
          }
          margin-bottom: 0.5rem;
        `}
      >
        Tripheo2410-gatsby-dashboard
      </h1>
      <p
        css={css`
          @media (min-width: 600px) {
            font-size: 1.5rem;
          }
          color: rgb(96, 111, 123);
          margin-top: 0.75rem;
          margin-bottom: 3rem;
        `}
      >
        Showing the statuses of my Netlify deploys and CircleCI tests.
      </p>
      <Info />
      <Grid />
      <footer
        css={css`
          textalign: center;
          margintop: 4rem;
          color: #525f74;
          fontfamily: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
          fontweight: 400;
        `}
      >
        Copyright &copy; {new Date().getFullYear()}. All rights reserved.
        <br />
        <div
          css={css({
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
            marginTop: `1.5rem`,
          })}
        >
          <a
            css={css({
              color: `#525f74`,
              marginLeft: `1rem`,
              textDecoration: `none`,
            })}
            href="https://github.com/tripheo0412"
          >
            By Tripheo2410
          </a>
        </div>
      </footer>
    </main>
  )
}

export default Index
