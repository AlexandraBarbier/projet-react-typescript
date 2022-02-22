import React, { ReactElement } from 'react'
import styled from 'styled-components'
import './css/global.css'

const HeaderTop = styled.header`
  width: 100%;
  min-height: 10vh;
  background: var(--dark-grey);
`

export default function Header(): ReactElement {
  return <HeaderTop></HeaderTop>
}
