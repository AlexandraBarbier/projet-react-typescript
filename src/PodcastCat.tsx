import React, { ReactElement } from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import './css/global.css'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'

export default function PodcastCat(): ReactElement {
  return (
    <div className="categories podcast">
      <FontAwesomeIcon icon={faMicrophone} />
      <h2>Podacst</h2>
    </div>
  )
}
