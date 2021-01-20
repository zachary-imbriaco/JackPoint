import { Link, routes } from '@redwoodjs/router'
import { useState } from 'react'
import BlogLayout from '../../layouts/BlogLayout/BlogLayout'
  
const SheetPage = () => {
  const [sheet, setSheet] = useState('')
  const [parsed, setParsed] = useState({characters: {character: {metatype: '', alias: '', attributes: {1: {attribute: []}}, cyberwares: {cyberware: []}, gears: {gear:[]}, qualities: {quality: [{}]}}}})
  const [qual, setQual] = useState([])
  const [ware, setWare] = useState([])
  const [att, setAtt] = useState([])
  const [gear, setGear] = useState([])

  const handleParse = () => {
    setParsed(JSON.parse(sheet))
    setQual(parsed.characters.character.qualities.quality)
    setWare(parsed.characters.character.cyberwares.cyberware)
    setGear(parsed.characters.character.gears.gear)
    setAtt(parsed.characters.character.attributes[1].attribute)
    console.log(parsed)
  }

  return <BlogLayout>
    <input type='text' placeholder='json' onChange={event => setSheet(event.target.value)}></input>
    <button onClick={event => handleParse()}>Parse</button>
    <p>Handle: {parsed.characters.character.alias}</p>
    <p>Metatype: {parsed.characters.character.metatype}</p>
    <p>Attributes: {att.map((value, index) => {
      if (value.base > 0) {
          return <li key={index}>{value.name}: {value.base} [{value.min}/{value.max}({value.aug})]</li>
        }
      }
    )}</p>
    <p>Qualities: {qual.map((value, index) => {
      return <li key={index}>{value.name} [{value.notes}]</li>
    })}</p>
    <p>Cyber/Bioware: {ware.map((value, index) => {
      if(value.children != null) {
        const mods = value.children.cyberware
        if (Array.isArray(mods) == true) {
          return <li key={index}>{value.name} ({value.rating}) 
            <span> | {mods.map((value, index) => {
              return <span key={index}>{value.name} ({value.rating}) | </span>
            })}</span>
        </li>
        }
        else {
          return <li key={index}>{value.name} ({value.rating})
            <span> | {mods.name} ({mods.rating})</span>
          </li>
        }
      }
      else {
        return <li key={index}>{value.name} ({value.rating})</li>
      }
    })}</p>

    <p>Equipment: {gear.map((value, index) => {
      if(value.children != null) {
        const mods = value.children.gear
        if (Array.isArray(mods) == true) {
          return <li key={index}>{value.name} ({value.rating}) 
            <span> | {mods.map((value, index) => {
              return <span key={index}>{value.name} ({value.rating}) | </span>
            })}</span>
        </li>
        }
        else {
          return <li key={index}>{value.name} ({value.rating})
            <span> | {mods.name} ({mods.rating})</span>
          </li>
        }
      }
      else {
        return <li key={index}>{value.name} ({value.rating})</li>
      }
    })}</p>
    <p></p>
    </BlogLayout>
}

export default SheetPage
