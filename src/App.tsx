import './App.css';
import { Experience } from './layout/sections/experience/Experience';
import { Header } from './layout/header/Header';
import { Project } from './layout/sections/project/Project';
import { Main } from './layout/sections/main/Main';
import { Technologies } from './layout/sections/technologies/Technologies';
import { Testimony } from './layout/sections/testimony/Testimony';
import { Contact } from './layout/sections/contact/Contact';
import { Footer } from './layout/footer/Footer';
import { Particle } from './components/particle/Particle';
import { GoTopBtn } from './components/gotop/GoTopBtn';


function App() {
    return (
        <div className="App">
            <Particle />
            <Header />
            <Main />
            <Project />
            <Technologies />
            <Experience />
            <Testimony />
            <Contact />
            <Footer />
            <GoTopBtn />
        </div>
    );
}

export default App;

