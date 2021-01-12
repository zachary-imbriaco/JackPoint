import { Link, routes } from '@redwoodjs/router'
import { useState } from 'react'
import BlogLayout from '../../layouts/BlogLayout/BlogLayout'
  
const SheetPage = () => {
  const [sheet, setSheet] = useState('')
  const [parsed, setParsed] = useState({characters: {character: {metatype: 'Ork'}}})

  const handleParse = () => {
    setParsed(JSON.parse(sheet))
    console.log(parsed)
  }

  return <BlogLayout>
    <input type='text' placeholder='json' onChange={event => setSheet(event.target.value)}></input>
    <button onClick={event => handleParse()}>Parse</button>
    <p>Metatype: {parsed.characters.character.metatype}</p>
    </BlogLayout>
}

export default SheetPage
