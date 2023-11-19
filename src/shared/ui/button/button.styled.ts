import styled from 'styled-components';
import { ButtonStyledProps } from './types';

export const ButtonStyled = styled.button<ButtonStyledProps>`
  margin: 0;
  padding: ${({ $buttonSize }) =>
          $buttonSize === 'md' ? '12px 14px' : '8px 12px'};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.palette.gray300};
  background: ${({ theme }) => theme.colors.base.white};

  color: ${({ theme }) => theme.colors.palette.gray800};
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;

  cursor: pointer;

  transition: border-color ease-out 200ms, background ease-out 200ms, color ease-out 200ms, opacity ease-out 100ms;

  &:hover {
    border-color: ${({ theme }) => theme.colors.palette.gray800};
    background: ${({ theme }) => theme.colors.palette.gray800};
    color: ${({ theme }) => theme.colors.base.white};
  }

  &:active {
    opacity: 0.8;
  }
`;
