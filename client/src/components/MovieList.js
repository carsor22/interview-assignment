import React, { Fragment } from 'react'; 


//use map function to display each movie from array 

const MovieList = (props) => {
  
  //Assign favourite component to variable
  
  const FavouriteComponent = props.favouriteComponent;

  return (
      <> 

         {props.movies.map((movie, index) => (

          <div className='content'>
          <div className='image-container'>
            <img src = {movie.Poster} alt='movie'></img> 
              <h2> {movie.Title}</h2>
              <p> {movie.Plot} </p>
            <div onClick={() => props.handleFavouritesClick(movie)} className ='overlay d-flex align-items-center justify-content center'><FavouriteComponent/> 
            </div>
          </div>
          </div>
          ))}
    </>
  );
};

export default MovieList;


