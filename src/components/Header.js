import React, { useState } from 'react'
import styled from 'styled-components'

import ButtonToggle from './ButtonToggle'
import ButtonLanguage from './ButtonLanguage'
import HeaderTitle from './HeaderTitle'

const StyledHeader = styled.header`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 20px;
`

export default function Header() {
    const [title, setTitle] = useState('home')

    function handleChildClick(on){
        on ? setTitle('menu') : setTitle('home')
    }

    return (
        <StyledHeader>
            <ButtonLanguage />
            <HeaderTitle title={title}/>
            <ButtonToggle onChildClick={handleChildClick}/>
        </StyledHeader>
    )
}