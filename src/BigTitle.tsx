import react, { ReactElement, ReactNode } from "react"
import styled from "styled-components"

const BigTitle = styled.h1`
  font-size:4.2rem;
  font-family:Raleway;
`

type BigTitleProps = {
    children : ReactNode
}

export default function BigText(props: BigTitleProps): ReactElement {
    return <BigTitle>{props.children}</BigTitle>
}