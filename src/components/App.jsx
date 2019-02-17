import React from 'react';
import styled from 'styled-components';
import TopBar from './TopBar';
import MainContent from './MainContent';

let Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

const App = () => (
  <Container>
    <TopBar />
    <MainContent />
  </Container>
);

export default App;