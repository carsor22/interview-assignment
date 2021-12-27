import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import React, {useEffect, useState} from 'react'; 
import MovieList from './components/MovieList';

function App() {

  //add state object to hold movie results from database
  //call movielist component and pass list of movies into it 

 const [movies, setMovies] = useState([]);
  
  //this is where sqlite3 data & API data needs to be called from 

  //create statefile called movies that holds movies from api 

  //call setter for the movies state object


    const getMovieRequest = async () => {
    const url = 'http://www.omdbapi.com/?s=avengers&apikey=6500ad71';

    const response = await fetch(url); 
    const responseJson = await response.json(); 

    // define dynamic parameters within function api call 
    
    setMovies(responseJson.Search);
  }; 

    //call function 

    useEffect(() => {
      getMovieRequest(); 
    }, [])

  return (

    //movies list component to pass movies into 
    //apply bootstrap styles to jsx 
    
    <div className ='container-fluid movie-app'>
      <div className='row'>
        <MovieList movies = {movies} />
      </div>
    </div>
  );
}

export default App;
