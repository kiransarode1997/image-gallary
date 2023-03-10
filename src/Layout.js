import React from 'react'
import logo from './logo.svg';
import {App,AppHeader,AppLogo} from './styles'
 

const Layout = ({title,renderContent}) => {
  return (
    <App>
    <AppHeader>
      <AppLogo src={logo} className="App-logo" alt="logo" />
     <p>{title}</p>
    </AppHeader>
    {
        renderContent()
    }    
    </App>
  )
}

export default Layout