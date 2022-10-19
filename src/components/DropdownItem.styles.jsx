import styled from 'styled-components';

export const Option = styled.li`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    transition: var(--transition);
    color: var(--font-color);

    &:hover {
        background-color: var(--primary-color);
        color: var(--white-color);
    }
`;