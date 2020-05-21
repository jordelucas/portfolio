import React from 'react'
import styled from 'styled-components'

import ButtonToggle from './components/ButtonToggle'
import ButtonLanguage from './components/ButtonLanguage'

const Header = styled.header`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 20px;
`

export default function Home() {
    return (
        <Header>
            <ButtonLanguage />
            <ButtonToggle />
        </Header>
    )
}