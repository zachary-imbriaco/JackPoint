import { Link, routes } from '@redwoodjs/router'

import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'

const AboutPage = () => {
  return (

    <BlogLayout>
      <p>
        Alright chummers, this site was designed to take in a Chummer export in JSON format, and give you a more aesthetically-pleasing character sheet from it.  It won't add stuff together for you like Chummer does, at least not yet, but it'll let you see what you've got, at least.
      </p>
      <Link to={routes.home()}>Return home</Link>
    </BlogLayout>
  )
}

export default AboutPage