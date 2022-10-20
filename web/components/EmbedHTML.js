import React from 'react'
import PropTypes from 'prop-types'

function EmbedHTML(node) {
  console.log("EmbedHTML.js: node", node.value);
  const {html} = node.value
  if (!html) {
    return undefined
  }
  return <div dangerouslySetInnerHTML={{__html: html}} />
}

EmbedHTML.propTypes = {
  node: PropTypes.shape({
    html: PropTypes.string,
  }),
}
export default EmbedHTML
