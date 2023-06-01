import React, { Fragment } from 'react';

import api from './api';

import './App.css';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import NavBar from './components/navbar/navbar';

import Curriculum from './components/curriculum/curriculum';
import Contact from './components/contact/contact';
import Portfolio from './components/portfolio/portfolio';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [informacoes, setInformacoes] = React.useState({});
  const [curriculum, setCurriculum] = React.useState({});
  const [portfolio, setPortfolio] = React.useState({});

  const fetchDados = async () => {
    try {
      const informacao = await api.get(`/informacoes/1`);
      setInformacoes({
        foto: informacao.data.foto,
        nome: informacao.data.nome,
        cargo: informacao.data.cargo,
      });

      const experienciaAcademica = await api.get(`experiencia`);
      const experienciaProfissional = await api.get(`experiencia`);

      setCurriculum({
        resumo: informacao.data.resumo,
        experienciaAcademica: experienciaAcademica.data,
        experienciaProfissional: experienciaProfissional.data,
      });

      const portfolio = await api.get(`/portfolio`);
      setPortfolio(portfolio.data);

    } catch (error) {
      console.error('Erro ao buscar os dados:', error);
    }
  }

  React.useEffect(() => {
    fetchDados();
  }, []);

  return (
  <>
    <Header informacoes={informacoes}></Header>

    <BrowserRouter>
      
      <NavBar></NavBar>

      <Routes>
        <Route index element={<Curriculum curriculum={curriculum}/>}/> 
        <Route path='portfolio' element={<Portfolio portfolio={portfolio}/>}/>
        <Route path='contact' element={<Contact />}/>
      </Routes>
    </BrowserRouter>

    <Footer></Footer>

  </>
  )
}

export default App;
