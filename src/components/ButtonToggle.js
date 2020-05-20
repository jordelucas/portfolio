import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const StyledButtonToggle = styled.div`
    width: 40px;
    height: 30px;
    margin-right: 20px;
    cursor: pointer;

    span {
        display: block;
        background-color: #fff;
        border-radius: 10px;
        height: 5px;
        width: 100%;
        margin: 6px auto;
        transition-duration: 0.3s;
    }

    ${({ active }) =>
        active && css`
            span:first-child {
                transform: rotate(45deg) translate(7px, 7px);
            }

            span:not(:first-child):not(:last-child) {
                opacity: 0
            }

            span:last-child {
                transform: rotate(-45deg) translate(8px, -9px);
            }
        `}
`

export default function ButtonToggle() {
    const [click, setClick] = useState(false)

    return (
        <StyledButtonToggle 
            active = {click} 
            onClick = {() => setClick(!click)}>
            
            <span></span>
            <span></span>
            <span></span>
        
        </StyledButtonToggle>
    )
}