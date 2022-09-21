import styled from 'styled-components';

export const Container = styled.div`
    height: 86px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.thimberwolf};

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const InsideContainer = styled.div`
    width: 90%;
    height: 80%;
    /* background-color: aqua; */

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LeftInsideContainer = styled.div`
    width:  373px;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-around;

`;

export const RightInsideContainer = styled.div`
    width: 160px;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const TypeToChoice = styled.p`
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    line-height: 36px;
    color: ${(props) => props.theme.colors.pineTree};
`;
