import React from 'react';
import MuithemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import theme from './theme/theme';
import RegisterUser from './components/security/Register';



function App() {
  return (
    <MuithemeProvider theme={theme}>
     <RegisterUser/>
     
    </MuithemeProvider>
    
  )
}

export default App;
