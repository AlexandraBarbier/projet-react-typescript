import React, { ReactElement } from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import './css/global.css'
import { faMessage } from '@fortawesome/free-solid-svg-icons'

export default function ChatCat(): ReactElement {
  return (
    <div className="categories chat">
      <FontAwesomeIcon icon={faMessage} />
      <h2>Discussion</h2>
    </div>
  )
}
