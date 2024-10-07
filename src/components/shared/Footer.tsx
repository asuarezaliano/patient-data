import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.darkGray};
  padding: 1rem;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  margin-top: 20px;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.default};
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© {new Date().getFullYear()} Lightit Medical. All rights reserved.</FooterText>
    </FooterContainer>
  );
};
