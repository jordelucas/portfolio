import styled, { css } from 'styled-components'

const StyledTitle = styled.h1`
    color: #fff;
    text-align: center;
    display: none;

    ${({ active }) =>
        active && css`
            display: block;
        `}

`

export default StyledTitle;