import React from 'react'
import styled, { css } from 'styled-components'

const StyledList = styled.div`
    flex: 1;  
    display: none;

    ul {
        margin: auto;
        text-align: center;
        text-transform: uppercase;
        list-style: none;

        li {
            font-size: 3rem;
            line-height: 6rem;

            a {
                color: #fff;
                text-decoration: none;
            }
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
                <li><a href="#">Home</a></li>
                <li><a href="#">About me</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </StyledList>
   )
}