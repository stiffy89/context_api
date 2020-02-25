import React from 'react';
import NavBar from './UIElements/NavBar';
import Form from './UIElements/Form';
import PageContent from './PageContext';
import {ThemeProvider} from './ThemeContext.js';
import {LanguageProvider} from './LanguageContext.js';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PageContent>
          <NavBar/>
          <Form/>
        </PageContent>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App;
