import styled from 'styled-components';

interface ContainerProps {
    width: string
}

export const Container = styled.div<ContainerProps>`
    width: ${(props) => props.width};
    height: fit-content;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-bottom: 8px !important;
`;

export const TitleRegisterProduct = styled.p`
    font-weight: 400;
    font-size: 20px;
    width: 100%;
    color: rgba(0.0, 0.0, 0.0, 0.85);
`;

export const SinveInput = styled.input`
    outline: none;
    border: 1px solid ${(props) => props.theme.colors.gray};
    height: 31px;
`;
