import styled from 'styled-components';

export const Container = styled.div`
    width: 56px;
    height: 62px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const NotificationNumber = styled.div`
    width: 31px;
    height: 20px;
    background-color: ${(props) => props.theme.colors.orange};

    align-self: flex-start;
    position: relative;
    right: 8px;

    border-radius: 32px;

    border: 1px solid white;
`;

export const Number = styled.p`
    text-align: center;
    font-size: 12px;
`;
