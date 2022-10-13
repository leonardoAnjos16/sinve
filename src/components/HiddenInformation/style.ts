import styled from 'styled-components';

interface ContainerProps {
    width: string
}

export const Container = styled.div<ContainerProps>`
    width: ${(props) => props.width};
    height: 110px;
    border: 2px dashed ${(props) => props.theme.colors.pineTree};

    margin: 0 auto !important;

    border-radius: 24px;

    margin-top: 40px !important;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.p`
    font-weight: 600;
    font-size: 34px;
    color: ${(props) => props.theme.colors.pineTree};

`;

export const ContentContainer = styled.div`
    width: 89%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
