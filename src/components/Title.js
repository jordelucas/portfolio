import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
    font-size: 2.2rem;
    text-transform: uppercase;
    font-weight: normal;
    color: #808080;
`

export default function Title(){
    return (
        <StyledTitle>Menu</StyledTitle>
    )
}