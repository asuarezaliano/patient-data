import { styled, ThemeProvider } from 'styled-components';
import { Patients } from './components/Patient/Patients';
import { Footer } from './components/shared/Footer';
import { Header } from './components/shared/Header';
import { theme } from './utills/colors';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
`;

const PatientContainer = styled.main`
  flex: 1 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Header />
        <PatientContainer>
          <Patients />
        </PatientContainer>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
