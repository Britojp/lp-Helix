import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../src/index.css';
import Header from './assets/pages/header/header.tsx';  
import Idea from './assets/pages/idea/idea.tsx';
import Project from './assets/pages/projects/projetos.tsx';
// import About from '/src/assets/pages/about/about.tsx';
import Footer from './assets/pages/footer/footer.tsx';
const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Header />
    <Idea /> 
    <Project />

    <Footer />
  </StrictMode>
);
