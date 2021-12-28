import React from 'react'; 

//use map function to display each movie from array 

const MovieList = (props) => {
  return (
      <> {props.movies.map((movie, index) => (
          
          <div className='d-flex justify-content-start m-5'>
            <img src = {movie.Poster} alt='movie'></img> 
              <h2> {movie.Title}</h2>
              <p> {movie.Plot} </p>
          </div>
          ))}
    </>
  );
};

export default MovieList;


