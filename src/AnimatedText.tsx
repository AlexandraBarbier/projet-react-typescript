import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";
import './css/global.css'

const AnimText = styled.p`
    font-size:3rem;
    color:var(--pruple);
    opacity:.7;
`

type AnimTextProps = {
    children: ReactNode
}

export default function AnimatedText(props: AnimTextProps): ReactElement {
    return <AnimatedText>
        {props.children}
    </AnimatedText>
}


