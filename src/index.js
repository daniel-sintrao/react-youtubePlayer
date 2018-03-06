import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyC1rtfuhaxzCGEbPR1j7f-rVJvFe0ZaFaQ';




class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfoards'}, (videos) => {
      this.setState({ videos });
    });
  }
  
  render(){
    return (
    <div>
      <SearchBar />
    </div>
    );
  }
}


// Render component on DOM
ReactDOM.render(<App/>, document.querySelector('.container'));