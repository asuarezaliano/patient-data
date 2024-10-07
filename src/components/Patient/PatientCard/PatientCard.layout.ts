import styled from 'styled-components';

export const Card = styled.div<{ expanded: boolean }>`
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 16px;
  height: ${props => (props.expanded ? 'auto' : '400px')};
  max-height: ${props => (props.expanded ? '1000px' : '400px')};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const Name = styled.h2`
  margin: 0;
  font-size: 1.2em;
  color: ${({ theme }) => theme.colors.text};
`;

export const CreatedAt = styled.p`
  margin: 8px 0;
  font-size: 0.9em;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const Website = styled.p`
  margin: 8px 0;
  font-size: 0.9em;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const Description = styled.div`
  flex-grow: 1;
  overflow: hidden;
  text-align: justify;
  color: ${({ theme }) => theme.colors.text};
`;

export const ExpandButton = styled.button`
  &.absolute-bottom {
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
  }
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  padding: 0;
  font-size: 0.9em;
  margin-top: 8px;
  text-align: left;

  &:hover {
    color: ${({ theme }) => theme.colors.hoverPrimary};
  }
`;

export const EditButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.default};
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 16px;
`;
