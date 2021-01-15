import { Link, routes } from '@redwoodjs/router'
import { useState } from 'react'
import BlogLayout from '../../layouts/BlogLayout/BlogLayout'
  
const SheetPage = () => {
  const [sheet, setSheet] = useState('')
  const [parsed, setParsed] = useState({characters: {character: {metatype: '', alias: '', cyberwares: {cyberware: []}, qualities: {quality: [{}]}}}})
  const [qual, setQual] = useState([])
  const [ware, setWare] = useState([])
  const [spells, setSpells] = useState([])
  const [powers, setPowers] = useState([])
  const [gear, setGear] = useState([])

  const handleParse = () => {
    setParsed(JSON.parse(sheet))
    setQual(parsed.characters.character.qualities.quality)
    setWare(parsed.characters.character.cyberwares.cyberware)
    console.log(parsed)
  }

  return <BlogLayout>
    <input type='text' placeholder='json' onChange={event => setSheet(event.target.value)}></input>
    <button onClick={event => handleParse()}>Parse</button>
    <p>Handle: {parsed.characters.character.alias}</p>
    <p>Metatype: {parsed.characters.character.metatype}</p>
    <p>Qualities: {qual.map((value, index) => {
      return <li key={index}>{value.name} [{value.notes}]</li>
    })}</p>
    <p>Cyber/Bioware: {ware.map((value, index) => {
      if(value.children != null) {
        const mods = value.children.cyberware
        return <li key={index}>{value.name} ({value.rating}) 
        <span> | {mods.map((value, index) => {
          return <span key={index}>{value.name} ({value.rating}) | </span>
        })}</span></li>
      }  
      else {
        return <li key={index}>{value.name} ({value.rating})</li>
      }
    })}</p>
    </BlogLayout>
}

export default SheetPage
