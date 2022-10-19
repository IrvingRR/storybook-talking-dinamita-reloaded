import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 250px;
    border-radius: var(--radius);
    background-color: var(--white-color);
    color: var(--font-color);
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: var(--shadow-down);
    position: relative;
    cursor: pointer;
    padding: 10px 20px;
`;

export const Options = styled.ul`
    width: 100%;
    max-height: 300px;
    border-radius: var(--radius);
    background-color: var(--white-color);
    box-shadow: var(--shadow-down);
    overflow: auto;
    position: absolute;
    top: 50px;
    left: 0;
    border-bottom: 2px solid var(--primary-color);
    transform: translateY(-10px);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);

    ${({ isActive }) => isActive === true && css`
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    `}
`;

export const Legend = styled.p`
    width: 100%;
    padding: 10px 20px;
    display: flex;
    align-items: center;
`;