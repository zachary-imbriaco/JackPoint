import { render } from '@redwoodjs/testing'

import SheetPage from './SheetPage'

describe('SheetPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SheetPage />)
    }).not.toThrow()
  })
})
