import styled from 'styled-components';

export const AuthStyled = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;

  position: relative;
  padding: 0 68px;

  a {
    width: max-content;
  }
`;

export const AuthHeader = styled.header`
  max-width: 1345px;
  margin: 0 auto;
  width: 100%;
`;

export const AuthContent = styled.div`
  height: inherit;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AuthBox = styled.div`
  max-width: 400px;
  width: 100%;
  
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const AuthTitle = styled.h1`
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.colors.palette.gray800};
`;
