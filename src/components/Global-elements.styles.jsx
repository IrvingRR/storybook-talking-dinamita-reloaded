import styled, { css } from 'styled-components';

export const MainContainer = styled.main`
    width: 100%;
    min-height: 100vh;
    background-color: var(--background-color);

    ${({ theme }) => theme === 'dark' && css`
        background-color: var(--dark-background-color);
    `}
`;

export const Box = styled.div`
    display: flex;
    justify-content: ${ ({ justify }) => justify ? justify : '' };
    flex-direction: ${ ({ direction }) => direction ? direction : 'row' };
    gap: ${ ({ gap }) => gap ? gap : '8px' };

    ${ ({ direction }) => direction !== 'column' && css`align-items: center` }
`;
