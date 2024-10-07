import styled from 'styled-components';
import { Form } from 'formik';
import Modal from 'react-modal';

export const StyledModal = styled(Modal)`
  max-width: 450px;
  width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 8px;
  outline: none;
  padding: 20px;
  border: 2px solid darkgray;
  box-sizing: border-box;
  max-height: 90vh;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 768px) {
    max-width: 95%;
    width: 95%;
    padding: 15px;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h2`
  text-align: center;
  margin-top: 10px;
`;

export const TitleContainer = styled.div`
  background-color: #007bff;
  width: 100%;
  padding: 15px 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 5px;
`;
