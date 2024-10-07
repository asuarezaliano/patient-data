import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

const LogoContainer = styled.div`
  margin-right: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const Title = styled.h1`
  margin: 0;
  flex-grow: 1;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      </LogoContainer>
      <Title>Light-it Medical</Title>
    </HeaderContainer>
  );
};
