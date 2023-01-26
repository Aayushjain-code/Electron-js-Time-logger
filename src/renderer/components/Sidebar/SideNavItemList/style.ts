import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavTab = styled(NavLink)<{ isopen: string }>`
  display: flex;
  padding: 4px 2px;
  text-decoration: none;
  text-align: left;
  height: 48px;
  color: black;
  background-color: #fafaff;
  border-radius: 0.5rem;
  text-decoration: none;
  align-items: center;
  transition: all 0.5s;
  margin: ${({ isopen }) =>
    isopen === 'true' ? '9.5px 5px 9.5px 12px' : '9.5px 5px 9.5px 4.5px'};
  :hover {
    background-color: rgb(178, 128, 243);
    color: #f0f0fa;
    transition: all 0.5s;
  }
  &.active {
    background-color: rgb(111, 0, 255);
    color: #f0f0fa !important;
    transition: all 0.5s;
    & div svg {
      fill: #fff;
    }
  }
`;

interface IOpen {
  isOpen: boolean;
}

export const NavTabIcon = styled.div<IOpen>`
  font-size: 24px;
  width: 35px;
  margin-left: ${({ isOpen }) => (isOpen ? '' : '1rem')};
`;
export const NavTabText = styled.div<IOpen>`
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;
