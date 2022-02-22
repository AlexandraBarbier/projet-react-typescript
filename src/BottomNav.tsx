import React, { ReactElement } from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import './css/global.css'
import {
  faUserAstronaut,
  faHouse,
  faIcons,
  faFolder,
  faBell,
} from '@fortawesome/free-solid-svg-icons'

const NavContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
`

const IconsContainer = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: var(--black);
  font-size: 1.5rem;
`

export default function BottomNav(): ReactElement {
  return (
    <NavContainer>
      <IconsContainer>
        <FontAwesomeIcon icon={faHouse} />
      </IconsContainer>
      <IconsContainer>
        <FontAwesomeIcon icon={faIcons} />
      </IconsContainer>
      <IconsContainer>
        <FontAwesomeIcon icon={faFolder} />
      </IconsContainer>
      <IconsContainer>
        <FontAwesomeIcon icon={faBell} />
      </IconsContainer>
      <IconsContainer>
        <FontAwesomeIcon icon={faUserAstronaut} />
      </IconsContainer>
    </NavContainer>
  )
}
