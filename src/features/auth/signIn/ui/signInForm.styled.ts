import styled from 'styled-components';

export const AuthInput = styled.input`
  flex-grow: 1;

  margin: 0;
  padding: 15px 21px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.palette.gray300};
  background: ${({ theme }) => theme.colors.base.white};

  &::placeholder {
    color: ${({ theme }) => theme.colors.palette.gray400};
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
  }
  
  &:invalid {
    outline-color: red;
  }
`

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const AuthButtonField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const AuthInputField = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  
  padding-bottom: 20px;
`

export const AuthInputFieldError = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  color: red;
  font-size: 14px;
`

export const AuthDescription = styled.span`
  color: ${({ theme }) => theme.colors.palette.gray800};
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`
