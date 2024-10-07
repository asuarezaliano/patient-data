import React from 'react';
import { useField } from 'formik';
import styled from 'styled-components';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 4px;
  font-weight: bold;
`;

const StyledInput = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
`;

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.error};
  font-size: 12px;
  margin-top: 4px;
  min-height: 18px;
  margin-top: 2px;
  margin-bottom: 4px;
`;

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Wrapper>
      <Label htmlFor={props.id || props.name}>{label}</Label>
      <StyledInput {...field} {...props} />
      <ErrorMessage>{meta.touched && meta.error ? meta.error : ''}</ErrorMessage>
    </Wrapper>
  );
};

export default Input;
