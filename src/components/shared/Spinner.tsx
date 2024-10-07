import React from 'react';
import styled, { keyframes } from 'styled-components';

interface SpinnerProps {
  size?: number;
}

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerWrapper = styled.div<SpinnerProps>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border: 4px solid rgba(0, 0, 255, 0.1);
  border-top-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 40 }) => {
  return <SpinnerWrapper size={size} />;
};

export default Spinner;
