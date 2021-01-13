import { Link, routes } from '@redwoodjs/router'
import { useState } from 'react'
import BlogLayout from '../../layouts/BlogLayout/BlogLayout'
  
const SheetPage = () => {
  const [sheet, setSheet] = useState('')
  const [parsed, setParsed] = useState({characters: {character: {metatype: '', alias: '', qualities: {quality: [{}]}}}})
  const [qual, setQual] = useState([])

  const handleParse = () => {
    setParsed(JSON.parse(sheet))
    setQual(parsed.characters.character.qualities.quality)
    console.log(parsed)
  }

  console.log(qual)
  return <BlogLayout>
    <input type='text' placeholder='json' onChange={event => setSheet(event.target.value)}></input>
    <button onClick={event => handleParse()}>Parse</button>
    <p>Handle: {parsed.characters.character.alias}</p>
    <p>Metatype: {parsed.characters.character.metatype}</p>
    <p>Qualities: {qual.map((value, index) => {
      return <li key={index}>{value.name} [{value.notes}]</li>})}</p>
    </BlogLayout>
}

export default SheetPage
