import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import React, { useState } from 'react'; 
import MovieList from './components/MovieList';

function App() {
  
  //Call movielist component and pass properties into it by creating a statefile called movies, then call setter for the movies state object.

  //State object should hold movie properties from database instead of manual input. This is where the database json properties holding the API data needs to be called from. 

  const [movies] = useState([

    { 
      Title: 'The Avengers',
      Poster: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
      Plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity."
    },
    {
      Title: 'Avengers: Infinity War',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"',
      Plot: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe"
    },
    {
      Title: 'Avengers: Age of Ultron',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
      Plot: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan"
    },
    {
      Title: 'Avengers: Endgame',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
      Plot: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe."
    },
    {
      Title: 'Dong wu guan li ju',
      Poster: 'https://m.media-amazon.com/images/M/MV5BZjQ0NjdjYTUtNzk1Zi00ZTVhLWIxNzItMTU2OTk1NDViM2Q1XkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_SX300.jpg',
      Plot: "He Chen, Ziwen Wang, Xiaotian Tang","Plot":"Hao Yun, a vet at a private clinic, leads a mundane life until he accidentally discovers the world is inhabited by monsters. Worried about the secret of their existence leaking, monsters capture Hao Yun and attempt to erase his memor"
    },
    {
      Title: 'Power Rangers in Space',
      Poster: 'https://m.media-amazon.com/images/M/MV5BODM2MmZhZDctZmU4OS00ZTcyLTk0YmItOWM4NTBhYjllY2I0XkEyXkFqcGdeQXVyMTA1OTAyOTI@._V1_SX300.jpg',
      Plot: "The most evil forces of the universe (Rita & Zedd, the Machine Empire and Divatox) have formed an alliance with the monarch of all evil, Dark Specter. With Zordon as his prisoner, Dark Specter will use Zordon's powers to spread evil "
    },
    {
      Title: 'Power Rangers Wild Force',
      Poster: 'https://m.media-amazon.com/images/M/MV5BZmI1NWU4OTAtNGYxNi00NjUxLTgwNzktZTNiNTNjMWYzYmFlXkEyXkFqcGdeQXVyMTA1OTAyOTI@._V1_SX300.jpg',
      Plot: "Five teenagers are chosen by five Power Animals to become the Wild Force Rangers, to fight the evil Jinderax and Toxica and their evil Orgs."
    },
    {
      Title: 'Batman v Superman: Dawn of Justice',
      Poster: 'https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
      Plot: "Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs."
    },
    {
      Title: 'Batman Returns',
      Poster: 'https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg',
      Plot: "While Batman deals with a deformed man calling himself the Penguin wreaking havoc across Gotham with the help of a cruel businessman, a female employee of the latter becomes the Catwoman with her own vendetta."
    },
    {
      Title: 'The Lego Batman Movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg',
      Plot: "A cooler-than-ever Bruce Wayne must deal with the usual suspects as they plan to rule Gotham City, while discovering that he has accidentally adopted a teenage orphan who wishes to become his sidekick."
    },
    {
      Title: 'Batman: The Dark Knight Returns, Part 1',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database',
      Plot: "Batman has not been seen for ten years. A new breed of criminal ravages Gotham City, forcing 55-year-old Bruce Wayne back into the cape and cowl. But, does he still have what it takes to fight crime in a new era?"
    },
    {
      Title: 'Harry Potter and the Deathly Hallows: Part 1',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg',
      Plot: "As Harry, Ron, and Hermione race against time and evil to destroy the Horcruxes, they uncover the existence of the three most powerful objects in the wizarding world: the Deathly Hallows."
    },
    {
      Title: 'Harry Potter and the Half-Blood Prince',
      Poster: 'https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database',
      Plot: "As Harry Potter begins his sixth year at Hogwarts, he discovers an old book marked as \"the property of the Half-Blood Prince\" and begins to learn more about Lord Voldemort's dark past."
    },
    {
      Title: 'Click',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMTA1MTUxNDY4NzReQTJeQWpwZ15BbWU2MDE3ODAxNw@@._V1_SX300.jpg',
      Plot: "A workaholic architect finds a universal remote that allows him to fast-forward and rewind to different parts of his life. Complications arise when the remote starts to overrule his choices."
    },
 ]);

      //const getMovieRequest = async () => {
      //const url = 'http://www.omdbapi.com/?i=tt0848228&apikey=6500ad71';

      //const response = await fetch(url); 
      //const responseJson = await response.json(); 

      //define dynamic parameters within function api call 
        
      //setMovies(responseJson.Search);
      //}; 

      //call function 

      //useEffect(() => {
          //getMovieRequest(); 
        //}, [])

  return (

    //movies list component to pass movies into 
    //apply bootstrap styles to jsx 
    
    <div className ='movie-app'>
      <div className='row'>
        <MovieList movies = {movies}  />
      </div>
    </div>
  );
}

export default App;
