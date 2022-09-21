import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 86px;
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
    width: 25%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-around;

`;

export const RightInsideContainer = styled.div`
    width: 10%;
    height: 100%;

    display: flex;
    align-items: center;
    /* justify-content: space-around; */
`;

export const TypeToChoice = styled.p`
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    line-height: 36px;
    color: ${(props) => props.theme.colors.pineTree};
`;
