import styled from 'styled-components';

interface ContainerProps {
    width: string
    withMargin?: boolean;
}

interface RegisterProductProps {
    isShowHistory?: boolean;
}

export const Container = styled.div<ContainerProps>`
    width: ${(props) => props.width};
    height: fit-content;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-bottom: ${({ withMargin }) => (withMargin ? '8px !important' : '0px !important')};
`;

export const TitleRegisterProduct = styled.p<RegisterProductProps>`
    font-weight: ${({ isShowHistory }) => (isShowHistory ? 500 : 400)};
    font-size: 1.25rem;
    width: 100%;
    color: rgba(0.0, 0.0, 0.0, 0.85);
`;

export const SinveInput = styled.input<RegisterProductProps>`
    outline: none;
    border: 1px solid ${({ theme, isShowHistory }) => (isShowHistory ? 'black' : theme.colors.gray)};
    height: ${(props) => (props.isShowHistory ? '40px' : '31px')};
    background-color: ${(props) => (props.isShowHistory ? 'transparent' : 'white')};
    border-radius: ${({ isShowHistory }) => (isShowHistory ? '8px' : '0px')};
    padding-left: 8px;
    -webkit-box-sizing: border-box; 
    -moz-box-sizing: border-box;    
    box-sizing: border-box; 
    ::placeholder{
        color: ${({ theme }) => theme.colors.darkSeaGreen};
        text-align: center;
    }
`;
