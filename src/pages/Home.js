import React from 'react'
import StyledTitle from '../styles/StyledTitle'

export default function Home(props) {
    return (
        <StyledTitle active={props.active}>Hi. My name is Jordevá</StyledTitle>
    )
}