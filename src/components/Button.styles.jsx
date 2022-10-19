import styled, { css } from 'styled-components';

export const ButtonElement = styled.button`
    padding: 8px 16px;
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: var(--primary-color);
    color: var(--white-color);
    letter-spacing: 2px;
    font-size: var(--fs-s-1);
    box-shadow: 0px 4px 5px 0px rgba(84,97,217,0.75);
    border-radius: var(--radius);
    svg { font-size: var(--fs-s-3); }

    &:hover {
        background-color: var(--primary-color-hover);
    }

    /* Variants
    ================================================= */
    
    ${ ({ variant }) => variant === 'secondary' && css`
        background-color: transparent;
        color: var(--font-color);
        border-color: var(--font-color);
        box-shadow: none;

        &:hover {
            background-color: var(--font-color);
            color: var(--white-color);
            border-color: var(--font-color);
        }
    ` }
    
    ${({ variant }) => variant === 'third' && css`
        background-color: transparent;
        color: var(--font-color);
        box-shadow: none;
        
        &:hover { color: var(--white-color); }
    `}

    ${ ({ rounded }) => rounded && css`border-radius: 80px` }

`;