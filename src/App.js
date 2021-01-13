import React from 'react';
import Search from './Search';
import './App.css';

class App extends React.Component {

  state = {
    API_URL : "https://swapi-thinkful.herokuapp.com/api/people/?search=",
    characters : []
  }

  handleSubmit = ( event ) => {
    event.preventDefault();

    const character = event.target.characterName.value;
    
    fetch( this.state.API_URL + character )
      .then( response => {
        if( response.ok ){
          return response.json();
        }
      })
      .then( responseJSON => {
        this.setState({
          characters : responseJSON.results
        });
      });

  }

  render(){
    return (
      <div className="App">
        <Search handleSubmit={this.handleSubmit}/>

        {this.state.characters.map( (character, index) => {
          return (
            <div>
              <h2> {character.name} </h2>
              <p> {character.height} </p>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
