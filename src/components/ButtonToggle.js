import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'

const StyledButtonToggle = styled.div`
    width: 3.0rem;
    height: 1.8rem;
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
        height: 0.2rem;
        width: 100%;
        margin-bottom: 0.6rem;
        transition-duration: 0.2s;

        &:last-child {
            margin-bottom: 0;
        }
    }

    ${({ active }) =>
        active && css`
            div:first-child {
                transform: rotate(45deg) translate(0.7rem, 0.7rem);
            }

            div:not(:first-child):not(:last-child) {
                opacity: 0
            }

            div:last-child {
                transform: rotate(-45deg) translate(0.4rem, -0.5rem);
            }
        `}
`

export default function ButtonToggle({ onChildClick }) {
    const [on, setOn] = useState(false)
    
    useEffect(() => {
        onChildClick(on);
    }, [on])

    function handleClick(){
        setOn(!on);
    }

    return (
        <StyledButtonToggle 
            active = {on} 
            onClick = {handleClick}>
            
            <div></div>
            <div></div>
            <div></div>
        
        </StyledButtonToggle>
    )
}