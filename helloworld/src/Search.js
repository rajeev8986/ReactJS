import React, { Component } from "react";
import "./styles.css";

class Search extends React.Component {
  state = { searchValue: "", music: [], randommeal: [] };
  handleOnChange = event => {
    this.setState({ searchValue: event.target.value });
  };
  handleSearch = () => {
    this.makeApiCall(this.state.searchValue);
  };

  makeApiCall = searchInput => {
    var searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
    fetch("https://shazam.p.rapidapi.com/search?locale=en-US&offset=0&limit=5&term=kiss%20the%20rain", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "shazam.p.rapidapi.com",
		"x-rapidapi-key": "7f269035acmsh60844b72bf48e41p18806bjsn97c4f762b754"
	}
})
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        console.log(jsonData.tracks);
        this.setState({ music: jsonData.tracks.hits });
       
        console.log(this.state.music);
      });
  };

  render() {
    return (
      <div>
        <h1>Music search app</h1>
        <input
          name="text"
          type="text"
          placeholder="Search"
          onChange={event => this.handleOnChange(event)}
          value={this.state.searchValue}
        />
        <button onClick={this.handleSearch}>Search</button>



        {this.state.music ? (
          <div>
            {this.state.music.map((mus, index) => (
            
              <div key={index}>
                <h1>{mus.track.title}</h1>
                <h2>{mus.track.subtitle}</h2>

                <img src={mus.track.share.image} alt="music-thumbnail" />
                
              </div>
            ))}
          </div>
        ) : (
          <p>
            That music is not in out database. <br /> Try searching for another
            meal
          </p>
        )}
      </div>
    );
  }
}
export default Search;
