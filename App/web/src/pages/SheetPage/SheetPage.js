import { Link, routes } from '@redwoodjs/router'

const SheetPage = () => {
  return (
    <>
      <h1>SheetPage</h1>
      <p>
        Find me in <code>./web/src/pages/SheetPage/SheetPage.js</code>
      </p>
      <p>
        My default route is named <code>sheet</code>, link to me with `
        <Link to={routes.sheet()}>Sheet</Link>`
      </p>
    </>
  )
}

export default SheetPage
