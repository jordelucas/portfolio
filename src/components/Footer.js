import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
    text-align: center;
    padding: 20px 0;
    
    ul {
        a {
            display: inline;
            padding: 0 10px;
            color: #808080;
            font-weight: bold;
            text-transform: uppercase;
            text-decoration: none;
            transition-duration: 0.3s;

            &:hover {
                color: #ccc;
            }
        }
    }
`

function Footer() {
    return (
        <StyledFooter>
            <ul>
                <a href='https://github.com/jordelucas/' target="_blank">GitHub</a>
                <a href='https://www.instagram.com/jordevalucas/' target="_blank">Instagram</a>
                <a href='https://www.linkedin.com/in/jordelucas' target="_blank">Linkedin</a>
            </ul>
        </StyledFooter>  
    )
}

export default Footer;