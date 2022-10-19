import styled, { css } from 'styled-components';

export const CardElement = styled.form`
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
    text-align: center;
    color: var(--gray-color);
`;

export const CardBody = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`;

export const SelectImage = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--font-color);
    font-size: var(--fs-s-3);
    border-bottom: 1px solid var(--gray-color);
    cursor: pointer;
    transition: var(--transition);
    position: relative;
    overflow: hidden;

    .content-hover {
        width: 100%;
        height: 100%;
        background-color: var(--white-color);
        display: flex;
        flex-direction: column;
        gap: 5px;
        justify-content: center;
        align-items: center;
        color: var(--font-color);
        position: absolute;
        top: 0;
        border-radius: 100%;
        transition: var(--transition);
        transform: translateY(-70px);

        p { font-size: var(--fs-s-1); }
    }

    &:hover .content-hover {
        transform: translateY(0);

    }

    ${({ theme }) => theme === 'dark' && css`
        background-color: var(--dark-primary-color);
        border-color: var(--dark-background-color);

        .content-hover {
            background-color: var(--dark-primary-color);
        }
    `}

`;

export const InputCard = styled.input`
    width: 80%;
    font-size: var(--fs-s-1);
    text-align: center;
    transition: var(--transition);

    &:focus {
        border-bottom: 1px solid var(--gray-color);
    }

    &::placeholder {
        color: var(--gray-color);
        font-weight: normal;
    }

    &.input-name { font-weight: bold; }
    &.input-email { color: var(--font-color); }

    ${({ theme }) => theme === 'dark' && css`
        background-color: var(--dark-primary-color);
        color: var(--dark-font-color);
    `}
`;