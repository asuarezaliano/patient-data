import React from 'react';
import styled from 'styled-components';

type typestyle = 'default' | 'advance' | 'delete';

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  typestyle?: typestyle;
  disabled?: boolean;
  [props: string]: any;
}

const StyledButton = styled.button<{ typestyle: typestyle }>`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  margin-top: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  ${({ typestyle, theme }) => {
    switch (typestyle) {
      case 'advance':
        return `
          background-color: ${theme.colors.primary};
          color: white;
          &:hover {
            background-color: ${theme.colors.hoverPrimary};
          }
        `;
      case 'delete':
        return `
          background-color: ${theme.colors.secondary};
          color: ${theme.colors.text};
          &:hover {
            background-color: ${theme.colors.hoverSecondary};
          }
        `;
      case 'default':
        return `
          background-color: ${theme.colors.default};
          color: ${theme.colors.text};
          
          &:hover {
            background-color: ${theme.colors.hoverDefault};
          }
        `;
    }
  }}

  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabled};
    color: ${({ theme }) => theme.colors.disabledText};
    cursor: not-allowed;
  }
`;

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  typestyle = 'default',
  disabled = false,
  ...props
}) => {
  return (
    <StyledButton {...props} onClick={onClick} typestyle={typestyle} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
