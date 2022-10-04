import React from 'react';
import { useState } from 'react';
import { CompoundButton, Text, FontWeights, IStackTokens, ITextStyles } from '@fluentui/react';
import * as FluentUIReact from '@fluentui/react';
import { QueryTab } from './components/QueryTab';
import './App.css';
import { LibraryDisplay, BooksListProps, Book } from './components/LibraryDisplay';

const boldStyle: Partial<ITextStyles> = { root: { fontWeight: FontWeights.semibold, fontSize: 50} };
const stackTokens: IStackTokens = { childrenGap: 60};
const buttonsStackTokens: IStackTokens = { childrenGap: 60};
const headerStackTokens: IStackTokens = { childrenGap: -45};

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
  const [onAddNew, setOnAddNew] = useState(false);
  const [onDisplayList, setOnDisplayList] = useState(false);
  const [onSearch, setOnSearch] = useState(false);
  
  function onAddNewClicked() : void {
    setOnAddNew(true);
    setOnDisplayList(false);
    setOnSearch(false);
  }

  function onDisplayClicked() : void {
    setOnAddNew(false);
    setOnDisplayList(true);
    setOnSearch(false);
  }

  function onSearchClicked() : void {
    setOnAddNew(false);
    setOnDisplayList(false);
    setOnSearch(true);
  }
  const bookList : Book[] = [
    {
        "bookTittle" : "Harry Potter",
        "author" : "J. K. Rowling",
        "ISBN": 12345,
        "hardCover" : true
    },
    {
        "bookTittle" : "Wonder",
        "author" : "R. J. Palacio",
        "ISBN": 15462354,
        "hardCover" : true
    },
    {
        "bookTittle" : "Factfulness",
        "author" : "Hans Rossling",
        "ISBN": 987654321,
        "hardCover" : false
    },
  ];

  return (
    <ThemeProvider applyTo='body' theme={myTheme}>
      <Stack className='container' horizontalAlign="center" verticalAlign="center" verticalFill tokens={stackTokens}>
        <Stack className='container_header' horizontalAlign="center" verticalAlign="center" verticalFill tokens={headerStackTokens} >
          <h1 className=''>Personal Library</h1>
          <Text className="container_quote" variant="large">"A reader lives a thousand lives before he dies"</Text>
        </Stack>
        <Stack className="container_buttonStack" horizontal tokens={buttonsStackTokens} horizontalAlign="center">
          <CompoundButton primary secondaryText="Add your new favorite book" disabled={false} checked={onAddNew} onClick={onAddNewClicked}>
          Add new book
          </CompoundButton>
          <CompoundButton primary secondaryText="See what's in your library" disabled={false} checked={onDisplayList} onClick={onDisplayClicked}>
            Your List
          </CompoundButton>
          <CompoundButton primary secondaryText="Look up a book, author" disabled={false} checked={onSearch} onClick={onSearchClicked}>
            Search a book
          </CompoundButton>
        </Stack>
        <div>
          {onAddNew ? (<QueryTab showHardCopy="yes" secondaryText='Add a book' actionButton='Add'/>):<div/>}
          {onSearch ? (<QueryTab showHardCopy="no" secondaryText='Search for a book' actionButton='Search'/>) : <div/>}
          {onDisplayList ? (<LibraryDisplay />) : <div/>}
        </div>
        
      </Stack>
      
    </ThemeProvider>
  );
};
