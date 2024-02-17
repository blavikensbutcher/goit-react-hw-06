import './App.css';
import { useEffect, useState } from 'react';
import { ContactList } from './ContactList/ContactList.jsx';
import { SearchBox } from './SearchBox/SearchBox.jsx';
import { ContactForm } from './ContactForm/ContactForm.jsx';

function App() {
  return (
    <>
      <h1 className="container">Phonebook</h1>

      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;
