import React from 'react';
import MuithemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import theme from './theme/theme';
import RegisterUser from './components/security/Register';
import Login from './components/security/Login';
import RolUser from './components/security/RolUser';




function App() {
  return (
    <MuithemeProvider theme={theme}>
     <RolUser/>
     
    </MuithemeProvider>
    
  )
}

export default App;
