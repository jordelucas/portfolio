import React from 'react'
import profile from '../assets/img/profile.jpg'
import { device } from '../styles/sizeDevice'

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

        @media ${device.tablet} {
            grid-template-columns: 1fr;
            width: 576px;
        }
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

    @media ${device.tablet} {
        display: none;
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
        font-size: 1.4rem;
        color: #fff;
        background-color: #090909;
        border: 2px solid #fff;
        text-transform: uppercase;
        transition: 0.5s;
        cursor: pointer;

        &:hover {
            background-color: #fff;
            color: #090909;
        }
    }

    a {
        display: inline;
        padding: 0 0 0 20px;
        color: #808080;
        font-weight: bold;
        text-transform: uppercase;
        text-decoration: none;
        transition-duration: 0.3s;

        &:hover {
            color: #ccc;
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
                    <a href='#'>See my work -></a>
                </StyledText>
                
                <StyledImage>
                    <img src={profile} alt="profile" />
                </StyledImage>
            </section>
        </StyledContainer>
        </>
    )
}