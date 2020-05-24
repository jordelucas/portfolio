import React from 'react'
import styled, { css } from 'styled-components'

const StyledList = styled.div`
    flex: 1;  
    display: none;

    ul {
        margin: auto;
        color: #fff;
        text-align: center;
        text-transform: uppercase;
        list-style: none;

        li {
            font-size: 3rem;
            line-height: 6rem;
        }
    }

    ${({ active }) =>
        active && css`
            display: flex;
        `}
`

export default function Nav(props) {
    return (
        <StyledList active={props.active}>
            <ul>
                <li>Home</li>
                <li>About me</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </StyledList>
   )
}