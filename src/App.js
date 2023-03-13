import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Container from './components/Container/Container';
import { Navbar } from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Container> 

      <AboutMe></AboutMe>
      <Projects></Projects>

    </Container>
    </>
  );
}

export default App;
