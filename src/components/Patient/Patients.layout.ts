import styled from 'styled-components';

export const StyledSection = styled.section`
  width: 100%;
`;

export const StyledTitle = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 20px;
  letter-spacing: 1px;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 150px;

  @media (max-width: 575px) {
    width: 100%;
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 575px) {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
