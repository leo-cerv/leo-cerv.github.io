import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Contacts from './components/Contact/Contacts';
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
      <Contacts></Contacts>

    </Container>
    </>
  );
}

export default App;
