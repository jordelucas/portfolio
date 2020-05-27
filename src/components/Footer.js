import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
    color: #808080;
    text-align: center;
    padding: 20px 0;
    text-transform: uppercase;
    font-weight: bold;
    
    ul {
        li {
            padding: 0 10px;
            display: inline;
        }
    }
`

function Footer() {
    return (
        <StyledFooter>
            <ul>
                <li>GitHub</li>
                <li>Instagram</li>
                <li>Linkedin</li>
            </ul>
        </StyledFooter>  
    )
}

export default Footer;