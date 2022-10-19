import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    position: relative;
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;

    svg {
        position: absolute;
        left: 15px;
        font-size: var(--fs-s-2);
        color: var(--font-color);
    }

    ${({ theme }) => theme === 'dark' && css`
        svg { color: var(--white-color); }
    `}
`;

export const InputControl = styled.input`
    width: 100%;
    height: 45px;
    padding: 10px 20px 10px 35px;
    font-family: var(--font);
    transition: var(--transition);
    border-radius: var(--radius);
    background-color: var(--gray-color);
    font-size: var(--fs-s-1);
    letter-spacing: 1.5px;
    border-color: var(--gray-color);

    &::placeholder {
        color: var(--font-color);
    }
    
    &:focus {
        background-color: transparent;
    }

    &:focus ~ svg {
        color: var(--primary-color);
    }

    ${({ theme }) => theme === 'dark' && css`
        color: var(--dark-font-color);
        background-color: var(--dark-background-color);
        border-color: var(--dark-background-color);

        &::placeholder {
            color: var(--white-color);
        }
    `}

    ${({ transparent }) => transparent && css`
        background-color: transparent;
    `}
`;

export const Results = styled.ul`
    width: 100%;
    background-color: var(--white-color);
    box-shadow: var(--shadow-down);
    border-radius: var(--radius);
    overflow: auto;
    height: 0;
    transition: var(--transition);
    transform: translateY(-5px);
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 50px;
    border-bottom: 2px solid var(--primary-color);

    ${({ searching }) => searching && css`
        height: auto;
        max-height: 150px;
        transform: translateY(0);
        opacity: 1;
        visibility: visible;

    `}

    ${({ theme }) => theme === 'dark' && css`
        background-color: var(--dark-background-color);
        color: var(--dark-font-color);
        box-shadow: var(--dark-shadow-down);
    `}
`;

export const ResultItem = styled.li`
    width: 100%;
    height: 30px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
`;

export const Legend = styled.p`
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 10px 20px;
    font-size: var(--fs-s-1);

    svg { 
        color: var(--secondary-color);
     }
`;