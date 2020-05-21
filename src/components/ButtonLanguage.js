import React, { useState } from 'react'
import styled from 'styled-components'

const StyledLanguage = styled.span`
    color: #ccc;
    font-size: 2.8rem;
    text-transform: uppercase;
    transition-duration: 0.2s;
    cursor: pointer;

    &:hover {
        color: #808080
    }
`

export default function ButtonLanguage() {
    const [language, setLanguage] = useState('en')
    
    function handleState(){
        const newLanguage =  (language === 'en') ? 'pt' : 'en';
        setLanguage(newLanguage)
    }

    return (
        <StyledLanguage 
            onClick={handleState}>
            {language}
        </StyledLanguage>
    )
}