import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyC1rtfuhaxzCGEbPR1j7f-rVJvFe0ZaFaQ";

// Create new component
const App = () => {
  return (
  <div>
    <SearchBar />
  </div>
  );
}


// Render component on DOM
ReactDOM.render(<App/>, document.querySelector('.container'));