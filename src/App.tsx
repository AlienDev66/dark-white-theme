import React from "react";
import Header from './components/Header';
import GlobalStyles from './styles/global';
import {  ThemeProvider, DefaultTheme } from 'styled-components'
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import usePersistedState from '../src/utils/usePersistedState';


const App = () => {

  const [ theme, setTheme ] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () =>{
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme} >
    <div className="App">
    <GlobalStyles />
    <Header toggleTheme={toggleTheme} />
    </div>
    </ThemeProvider>
  );
}

export default App;
