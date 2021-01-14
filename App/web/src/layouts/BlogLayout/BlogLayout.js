import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  return (

    <>
      <header>
        <h1>JackPoint</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.sheet()}>Sheet</Link>

            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout