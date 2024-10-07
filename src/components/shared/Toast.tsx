import styled from 'styled-components';

interface ToastProps {
  onClose: () => void;
  message: string;
  isSuccess: boolean;
}

const ToastContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
`;

const ToastStyle = styled.div`
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 12px 20px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px;
`;

const IconWrapper = styled.div`
  font-size: 24px;
  display: flex;
  align-items: center;
`;

const SuccessIcon = styled.span`
  color: ${({ theme }) => theme.colors.success};
`;

const ErrorIcon = styled.span`
  color: ${({ theme }) => theme.colors.error};
`;

const Message = styled.p`
  margin: 0;
  font-size: 14px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  margin-left: auto;
  padding: 0;
`;

const Toast: React.FC<ToastProps> = ({ onClose, message, isSuccess }) => {
  return (
    <ToastContainer>
      <ToastStyle>
        <IconWrapper>
          {isSuccess ? <SuccessIcon>✓</SuccessIcon> : <ErrorIcon>✕</ErrorIcon>}
        </IconWrapper>
        <Message>{message}</Message>
        <CloseButton onClick={onClose}>&times;</CloseButton>
      </ToastStyle>
    </ToastContainer>
  );
};

export default Toast;
