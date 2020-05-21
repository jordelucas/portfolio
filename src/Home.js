import React, { useState } from 'react'
import styled from 'styled-components'

import ButtonToggle from './components/ButtonToggle'
import ButtonLanguage from './components/ButtonLanguage'
import HeaderTitle from './components/HeaderTitle'

const Header = styled.header`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 20px;
`

export default function Home() {
    const [title, setTitle] = useState('home')

    function handleChildClick(click){
        click ? setTitle('home') : setTitle('menu')
    }

    return (
        <Header>
            <ButtonLanguage />
            <HeaderTitle title={title}/>
            <ButtonToggle onChildClick={handleChildClick}/>
        </Header>
    )
}