import { Link, routes } from '@redwoodjs/router'
import BlogLayout from '../../layouts/BlogLayout/BlogLayout'
  
const SheetPage = () => {
  return <BlogLayout>
    <input type='text' name='JSON'></input>
    <button>submit</button>
    </BlogLayout>
}

export default SheetPage
