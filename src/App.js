import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import styled, {css, ThemeProvider} from 'styled-components'
import { createRef } from 'react';

const LearnReact = styled.a`
  color: white;
  font-size: 36px;
  color: ${props => props.color ? props.color : "white;"}
  ${props => props.primary && css`
  font-size: 48px;
  color: yellow;
  transition: ease 0.25s all;
  `};
  :hover {
    font-size: 48px;
    opacity: 0.5;
  }
`

const LearnMoreReact = styled ( LearnReact)`
font-size: 18px;
color:red;
`
const theme = {
  primary: {
    baseColor: "#888"
  }
}

const Body = styled.div`
text-align: center;
`
;
function App() {
  const [primary, setPrimary] = useState(false)
  return (
    <ThemeProvider theme={theme}>
    <Body>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <LearnMoreReact>testing</LearnMoreReact>
        <LearnReact primary = {primary} onClick = {
          () => setPrimary (!primary)}>
          Learn React
        </LearnReact>
      </header>
    </Body>
    </ThemeProvider>
  );
}

export default App;
