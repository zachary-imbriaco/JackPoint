import { Link, routes } from '@redwoodjs/router'

import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'

const AboutPage = () => {
  return (

    <BlogLayout>
      <p>
        Hoi, omae.  JackPoint is a character sheet repository for character sheets generated via the Chummer5a application.
      </p>
      <Link to={routes.home()}>Return home</Link>
    </BlogLayout>
  )
}

export default AboutPage