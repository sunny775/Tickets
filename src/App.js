import React from 'react';
import SignupForm from './components/Formik'
import AppBar from './components/AppBar'
import Main from './components/main'
import {ThemeProvider} from 'react-jss'
import theme from './themes'
import Table from './components/Table'

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div /*className="App containe"style={{margin:30,padding:'30px',boxShadow:"0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)"}}*/>
     {/*<AppBar bg='white'/>
    <Main />
    <Table/>*/}
    <div style={{margin:40}}>
  <Table/>
  </div>
  </div>
  
  </ThemeProvider>
  );
}

export default App;

