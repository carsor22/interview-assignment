import React from 'react'; 

//use map function to disaply each movie from array 

const MovieList = (props) => {
  return (
      <> {props.movies.map((movie, index) => (
          
          <div className='d-flex justify-content-start m-5'> 
              <img src = {movie.Poster} alt='movie'></img>
          </div>
          ))}
    </>
  );
};

export default MovieList;


