import React from 'react'

export default function ToggleButton({active ,onClick, children}) {
  return (
    <button className={`btn btn-sm mx-1 btn-${ active?"primary":"secondary"}` }  onClick={onClick}>{children}</button>
  )
}
