import { Link } from 'gatsby'
import React, { FC } from 'react'
import './styles.less'
interface HeaderProps {
  /** siteTitle prop type */
  siteTitle: string
}

const Header: FC<HeaderProps> = ({ siteTitle }) => (
  <header className={'header'}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
