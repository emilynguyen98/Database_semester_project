import React from 'react';
import * as FluentUIReact from '@fluentui/react';


const {
    createTheme,
    Checkbox,
    DefaultButton,
    Fabric,
    Pivot,
    PivotItem,
    PrimaryButton,
    Stack,
    Toggle,
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
  
  
  
export const Content: React.FunctionComponent  = () => {
      return (
        <ThemeProvider applyTo='body' theme={myTheme}>
          <Stack tokens={{childrenGap: 8, maxWidth: 300}}>
            <Pivot>
              <PivotItem headerText="Home" />
              <PivotItem headerText="Pages" />
              <PivotItem headerText="Documents" />
              <PivotItem headerText="Activity" />
            </Pivot>
            <Stack horizontal gap={8}>
              <DefaultButton text="DefaultButton"/>
              <PrimaryButton text="PrimaryButton"/>
            </Stack>
            <Toggle label="Enabled"/>
            <Toggle label="Disabled" disabled={true}/>
            <Checkbox label="Checkbox"/>
            <Checkbox checked label="Checkbox Checked" />
          </Stack>
        </ThemeProvider>
      );
  }