import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const StyledButtonToggle = styled.div`
    width: 30px;
    height: 18px;
    cursor: pointer;

    &:hover div {
        background-color: #808080
    }

    &:focus div {
        background-color: #ccc
    }

    div {
        background-color: #ccc;
        border-radius: 10px;
        height: 2px;
        width: 100%;
        margin-bottom: 6px;
        transition-duration: 0.2s;

        &:last-child {
            margin-bottom: 0;
        }
    }

    ${({ active }) =>
        active && css`
            div:first-child {
                transform: rotate(45deg) translate(7px, 7px);
            }

            div:not(:first-child):not(:last-child) {
                opacity: 0
            }

            div:last-child {
                transform: rotate(-45deg) translate(4px, -5px);
            }
        `}
`

export default function ButtonToggle() {
    const [click, setClick] = useState(false)

    return (
        <StyledButtonToggle 
            active = {click} 
            onClick = {() => setClick(!click)}>
            
            <div></div>
            <div></div>
            <div></div>
        
        </StyledButtonToggle>
    )
}