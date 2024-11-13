import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../src/index.css';
import Header from './assets/pages/header/header.tsx';  
import About from './assets/pages/about/about.tsx';
import Project from './assets/pages/projects/projetos.tsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Header />
    <About /> 
    <Project />

  </StrictMode>
);
