import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import RouterElement from './router';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Sidebar from './components/Sidebar';
import TopAppBar from './components/TopAppBar';
import { MainContainer, RoutesPane, StyledBody } from './style';

export default function App() {
  return (
    <>
      <ToastContainer
        hideProgressBar
        position="bottom-right"
        limit={2}
        autoClose={2000}
      />
      <MemoryRouter>
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <MainContainer>
            <TopAppBar />
            <StyledBody>
              <RoutesPane>
                <RouterElement />
              </RoutesPane>
            </StyledBody>
          </MainContainer>
        </div>
      </MemoryRouter>
    </>
  );
}
