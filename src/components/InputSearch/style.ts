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

  .ant-input-prefix {
    padding: 2px;
  }

  .ant-input-lg {
    padding: 6.5px 11px !important;
  }
`;
