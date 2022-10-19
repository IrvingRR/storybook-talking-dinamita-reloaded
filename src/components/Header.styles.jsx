import styled, { css } from 'styled-components';

export const HeaderElement = styled.header`
    width: 100%;
    padding: 10px 20px;
    background-color: var(--white-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: var(--shadow-down);

    ${({ theme }) => theme === 'dark' && css`
       background-color: var(--dark-primary-color);
       box-shadow: var(--dark-shadow-down);
    `}
`;

export const Logo = styled.a`
    color: var(--primary-color);
    text-decoration: none;
    font-size: var(--fs-s-3);
    font-weight: 600;
    
    span { color: var(--font-color); }

    ${({ theme }) => theme === 'dark' && css`
       span {
        color: var(--dark-font-color);
       }
        
    `}
`;

export const User = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: var(--fs-s-1);

    p, svg { color: var(--font-color); }

    ${({ theme }) => theme === 'dark' && css`
       p, svg {
        color: var(--dark-font-color);
       }
        
    `}
`;

export const Picture = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 100%;
    object-fit: cover;
`;