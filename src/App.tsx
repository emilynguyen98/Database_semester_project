import React from 'react';
import { useState } from 'react';
import { CompoundButton, Text, FontWeights, IStackTokens, ITextStyles } from '@fluentui/react';
import * as FluentUIReact from '@fluentui/react';
import  HomePage  from './components/HomePage';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './components/LogIn';


const boldStyle: Partial<ITextStyles> = { root: { fontWeight: FontWeights.semibold, fontSize: 50} };


const {
  createTheme,
  Stack,
  ThemeProvider
} = FluentUIReact;

const myTheme = createTheme({
  palette: {
    themePrimary: '#b6aafa',
    themeLighterAlt: '#beb3fa',
    themeLighter: '#c6bcfb',
    themeLight: '#cec6fc',
    themeTertiary: '#d6cffc',
    themeSecondary: '#ded8fd',
    themeDarkAlt: '#e6e2fd',
    themeDark: '#eeebfe',
    themeDarker: '#f6f5fe',
    neutralLighterAlt: '#2a2832',
    neutralLighter: '#292731',
    neutralLight: '#27252f',
    neutralQuaternaryAlt: '#25232c',
    neutralQuaternary: '#23212a',
    neutralTertiaryAlt: '#222028',
    neutralTertiary: '#9d9c9c',
    neutralSecondary: '#838382',
    neutralSecondaryAlt: '#838382',
    neutralPrimaryAlt: '#6a6969',
    neutralPrimary: '#ebe9e8',
    neutralDark: '#363635',
    black: '#1c1c1c',
    white: '#2b2933',
  }});
  
export const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
    <ThemeProvider applyTo='body' theme={myTheme}>
        <Routes>
            <Route path='/' element={<LogIn/>} />
            <Route path='/home' element={<HomePage/>} />
        </Routes>
    </ThemeProvider>
    </BrowserRouter>
    
  );
};
