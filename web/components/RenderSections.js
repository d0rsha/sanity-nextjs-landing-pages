import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
// Import everything from ./section as SectionComponents and access by SectionComponents[cta]
import * as SectionComponents from './sections'
import capitalizeString from '../utils/capitalizeString'

function resolveSections(section) {
  // eslint-disable-next-line import/namespace
  const Section = SectionComponents[capitalizeString(section._type)] // Capitalized first char of string

  if (Section) {
    return Section
  }

  console.error('Cant find section', section) // eslint-disable-line no-console
  return null
}

function RenderSections(props) {
  const {sections} = props
  console.log("RenderSections.js", sections)

  if (!sections) {
    console.error('Missing section')
    return <div>Missing sections</div>
  }

  return (
    <Fragment>
      {sections.map((section) => {
        const SectionComponentType = resolveSections(section)
        if (!SectionComponentType) {
          return <div>Missing section {section._type}</div>
        }
        return <SectionComponentType {...section} key={section._key} />
      })}
    </Fragment>
  )
}

RenderSections.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      _type: PropTypes.string,
      _key: PropTypes.string,
      section: PropTypes.instanceOf(PropTypes.object),
    })
  ),
}

export default RenderSections
