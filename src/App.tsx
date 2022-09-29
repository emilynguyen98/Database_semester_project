import React from 'react';
import { CompoundButton, Text, FontWeights, IStackTokens, ITextStyles } from '@fluentui/react';
import * as FluentUIReact from '@fluentui/react';
import { QueryTab } from './components/QueryTab';

const boldStyle: Partial<ITextStyles> = { root: { fontWeight: FontWeights.semibold, fontSize: 50} };
const stackTokens: IStackTokens = { childrenGap: 100, padding: 0  };

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
    <ThemeProvider applyTo='body' theme={myTheme}>
      <Stack className='container' horizontalAlign="center" verticalAlign="center" verticalFill tokens={stackTokens}>
        <Stack className='header'>
          <Text variant="mega" styles={boldStyle}>Personal Library</Text>
          <Text className="quote" variant="large">"A reader lives a thousand lives before he dies"</Text>
        </Stack>
        <Stack className="buttonStack" horizontal tokens={stackTokens} horizontalAlign="center">
          <QueryTab showHardCopy="yes" queryTittle='Add new book' secondaryText="Add your new favorite book" actionButton='Add Book'/>
          <CompoundButton className='NavButton' primary secondaryText="See what in your library" disabled={false} checked={false}>
            Your List
          </CompoundButton>
          <QueryTab showHardCopy="no" queryTittle='Search a book' secondaryText='Search for a book' actionButton='Search'/>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
};
