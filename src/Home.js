import React from 'react'
import styled from 'styled-components'

import ButtonToggle from './components/ButtonToggle'

const Header = styled.header`
    display: flex;
    justify-content: space-between;
`

export default function Home() {
    return (
        <Header>
            <button>language</button>
            <ButtonToggle />
        </Header>
    )
}