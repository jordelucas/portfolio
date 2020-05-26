import React from 'react'
import profile from '../assets/img/profile.jpg'

import styled, { css } from 'styled-components'

const StyledContainer = styled.main`
    flex: 1;
    display: none;
    margin: 0 20px;

    section {
        display: grid;
        grid-template-columns: 2fr 1.5fr;
        gap: 20px;
        width: 768px;
        margin: auto;
    }

    ${({ active }) =>
        active && css`
            display: flex;
        `}
`

const StyledImage = styled.aside`
    img {
        width: 100%;
        max-width: 400px;
    }
`

const StyledText = styled.div`
    h1 {
        color: #fff;
        font-size: 3rem;
        font-weight: normal;
        margin: 10px 0 35px 0;
    }

    span {
        color: #808080;
        font-weight: bold;
        text-transform: uppercase;
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
`

export default function Home(props) {
    return (
        <>
        <StyledContainer active={props.active}>
            <section>
                <StyledText>
                    <span>&lt;Hello World&gt;</span>
                    <h1>Hi. My name is Jordevá Lucas.
                        I'm junior frontend developer from Natal.</h1>
                    <button>Contact me</button>
                </StyledText>
                
                <StyledImage>
                    <img src={profile} alt="profile" />
                </StyledImage>
            </section>
        </StyledContainer>
        </>
    )
}