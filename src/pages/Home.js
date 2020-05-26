import React from 'react'
import profile from '../assets/img/profile.jpg'

import styled, { css } from 'styled-components'

const StyledContainer = styled.main`
    flex: 1;
    display: none;
    justify-content: center;
    align-items: center;
    color: #fff;

    div {
        max-width: 500px;
        max-height: 500px;
        padding: 0 10px;

        h1 {
            font-weight: normal;
            margin: 10px 0 35px 0;
            font-size: 3rem;
        }

        span {
            color: #808080;
            font-weight: bold;
            text-transform: uppercase;
        }

        img {
            width: 100%;
            max-width: 400px;
        }

        button {
            padding: 10px 30px;
            border: 2px solid #fff;
            background-color: transparent;
            color: #fff;
            cursor: pointer;
            text-transform: uppercase;
            transition: 0.5s;

            &:hover {
                background-color: #fff;
                color: #090909;
            }
        }
    }

    ${({ active }) =>
        active && css`
            display: flex;
        `}
`

export default function Home(props) {
    return (
        <>
        <StyledContainer active={props.active}>
            <div>
                <span>&lt;Hello World&gt;</span>
                <h1>Hi. My name is Jordevá Lucas.
                    I'm junior frontend developer from Natal.</h1>
                <button>Contact me</button>
            </div>
            
            <div>
                <img src={profile} alt="profile" />
            </div>
        </StyledContainer>
        </>
    )
}