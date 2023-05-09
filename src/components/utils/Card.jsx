import React from 'react'

function Card({children, darkTheme}) {
  return (
    <div className={`card ${darkTheme && 'reverse'}`}>{children}</div>
  )
}
export default Card