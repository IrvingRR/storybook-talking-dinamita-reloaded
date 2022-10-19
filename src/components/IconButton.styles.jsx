import styled, { css } from 'styled-components';

export const IconButtonElement = styled.button`
    width: 30px;
    height: 30px;
    border-radius: var(--radius);
    background-color: var(--primary-color);
    color: var(--white-color);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 5px 0px rgba(84,97,217,0.75);

    &:hover {
        background-color: var(--primary-color-hover);
    }

    /* Variants
    ================================================= */
    
    ${({ variant }) => variant === 'secondary' && css`
        background-color: transparent;
        color: var(--font-color);
        border-color: var(--font-color);
        box-shadow: none;

        &:hover {
            background-color: var(--font-color);
            color: var(--white-color);
            border-color: var(--font-color);
        }
    `}

    ${({ variant }) => variant === 'third' && css`
        background-color: transparent;
        color: var(--font-color);
        box-shadow: none;
        
        &:hover { color: var(--white-color); }
    `}

    ${({ transparent }) => transparent && css`
        background-color: transparent;
        color: var(--font-color);

        &:hover{ background-color: transparent; }
    `}
`;