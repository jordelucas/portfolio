import React from 'react'
import StyledTitle from '../styles/StyledTitle'

export default function Nav(props) {
    return (
        <StyledTitle active={props.active}>Lista de navegacao</StyledTitle>
    )
}