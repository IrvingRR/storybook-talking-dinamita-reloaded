import styled, { css } from 'styled-components';

export const CardElement = styled.div`
    width: 100%;
    max-width: 250px;
    border-radius: var(--radius);
    background-color: var(--white-color);
    box-shadow: var(--shadow);

    ${({ theme }) => theme === 'dark' && css`
        background-color: var(--dark-primary-color);
        color: var(--dark-font-color);
        box-shadow: var(--dark-shadow);
    `}
`;

export const CardHeader = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;

    svg { 
        font-size: var(--fs-s-3);
        color: var(--gray-color);
    }
`;

export const ButtonFavorite = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;

    &:hover svg {
        color: var(--secondary-color);
    }

    ${({ isFavorite }) => isFavorite === true && css`
        svg {
            color: var(--secondary-color);
        }
    `}
`;

export const CardBody = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`;

export const Image = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 100%;
    object-fit: cover;
`;

export const Information = styled.div`
    width: 100%;
    text-align: center;
    font-size: var(--fs-s-1);
    display: flex;
    flex-direction: column;
    gap: 10px; 
`;

export const CardFooter = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 10px;
`;

export const InputControl = styled.input`
    width: 100%;
    padding: 10px;
    font-family: var(--font);
`;

