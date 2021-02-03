import { Link, routes } from '@redwoodjs/router'
import { useState } from 'react'
import BlogLayout from '../../layouts/BlogLayout/BlogLayout'
  
const SheetPage = () => {
  const [sheet, setSheet] = useState('')
  const [parsed, setParsed] = useState({characters: {character: {metatype: '', alias: '', adept: '', limitphysical: 0, powers: {power: []}, limitmental: 0, limitsocial: 0, limitastral: 0, skills: {skill: []}, stuncm: 0, stuncmnaturalrecovery: 0, physicalcm: 0, physicalcmnaturalrecovery: 0, attributes: {1: {attribute: []}}, cyberwares: {cyberware: []}, gears: {gear:[]}, qualities: {quality: [{}]}}}})
  const [qual, setQual] = useState([])
  const [ware, setWare] = useState([])
  const [att, setAtt] = useState([])
  const [gear, setGear] = useState([])
  const [physCM, setPhysCM] = useState('')
  const [stunCM, setStunCM] = useState('')
  const [skills, setSkills] = useState([])
  const [powers, setPowers] = useState([])

  const handleParse = () => {
    setParsed(JSON.parse(sheet))
    setQual(parsed.characters.character.qualities.quality)
    setWare(parsed.characters.character.cyberwares.cyberware)
    setGear(parsed.characters.character.gears.gear)
    setAtt(parsed.characters.character.attributes[1].attribute)
    setSkills(parsed.characters.character.skills.skill)
    setPowers(parsed.characters.character.powers.power)

    console.log(skills)

    let physMeter = ''
    let stunMeter = ''
    let physMod = 0
    let stunMod = 0
    for (let i = 1; i <= parsed.characters.character.physicalcm; i++)
      {
        if (i % 3 === 0) {
          physMod++;
          physMeter += '[-' + physMod + ']'
        }
        else {
        physMeter += '[ ]'
        }
      }

      for (let i = 0; i < parsed.characters.character.stuncm; i++)
      {
        if ((i+1) % 3 === 0) {
          stunMod++;
          stunMeter += '[-' + stunMod + ']'
        }
        else {
        stunMeter += '[ ]'
        }
      }

    setStunCM(stunMeter)
    setPhysCM(physMeter)
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
    <p> Limits: 
        <li>Physical: {parsed.characters.character.limitphysical}</li>
        <li>Mental: {parsed.characters.character.limitmental}</li>
        <li>Social: {parsed.characters.character.limitsocial}</li>
        <li>Astral: {parsed.characters.character.limitastral}</li>
      </p>
    <p>Physical Recovery: {parsed.characters.character.physicalcmnaturalrecovery}</p>
    <p>{physCM}</p>
    <p>Stun Recovery: {parsed.characters.character.stuncmnaturalrecovery}</p>
    <p>{stunCM}</p>
    <p>Qualities: {qual.map((value, index) => {
      return <li key={index}>{value.name} [{value.notes}]</li>
    })}</p>
    <p>Skills:
      {skills.map((value, index) => {
        return <li key={index}>{value.name}: {value.rating} [{value.spec}]</li>
      })}</p>
    <p>Powers:
      {powers.map((value, index) => {
        return <li key={index}>{value.name}: {value.rating}</li>
      })}
    </p>
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
