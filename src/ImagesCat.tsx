import React, { ReactElement } from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import './css/global.css'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

export default function ImagesCat(): ReactElement {
  return (
    <div className="categories images">
      <FontAwesomeIcon icon={faCamera} />
      <h2>Image</h2>
    </div>
  )
}
