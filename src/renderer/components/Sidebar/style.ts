import styled from 'styled-components';

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fafaff;
  height: 100vh;
  /* position: fixed; */
  z-index: 22;
  transition: all 0.5s;
  border-right: 2px solid #e2e2e2;
`;

export const SidebarToggleControl = styled.div`
  font-size: 2rem;
  position: relative;
  left: 2rem;
  color: black;
  cursor: pointer;
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1px 1px 1px 0px;
  margin-right: 2px;
  margin-top: 2rem;
  height: 75px;
  transition: all 0.5s;
`;

export const SidebarHeading = styled.div`
  font-size: 12px;
  color: #8f8f8f;
  font-weight: 600;
  margin-left: 0.3rem;
  align-items: center;
  white-space: nowrap;
`;
export const PaddedDivider = styled.div`
  padding: 0.8rem 0.1rem 0.1rem 0.4rem;
`;
