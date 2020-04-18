import React,{useState, useEffect} from 'react';
import Header from './components/Header'
import Movie from './components/Movie'
import Search from './components/Search'
import axios from 'axios'
import './css/main.css';

const MOVIE_API_URL = "http://www.omdbapi.com/?s=ocean's&apikey=1a6bcae6"; 

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      axios.get(MOVIE_API_URL)
          .then(res => {
            setMovies(res.data.Search)
            setLoading(false);
          })
          .catch(err => {
            setError(err.message);
          })
  },[])
  console.log(movies)
  const search = searchValue => {
    setLoading(true);
    setError(null);

    axios.get(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then(res => {
        if(res.data.Response === "True") {
          setMovies(res.data.Search);
          setLoading(false);
        }else {
          setError(res.err);
          setLoading(false);
        }
      })
  }

  const sortByRating = movieList => (
    movieList.map(movie => {
      console.log(movie)
    })
  )
  const sortByYear = movieList => {
    setLoading(true);
    const sortedMovies = movieList.sort((a,b) => b.Year - a.Year);
    setMovies([...sortedMovies]);
    setLoading(false);
  }
  return (
    <div className="App">
        <Header title={'Movie Search'}/>
        <div className="main">
          <Search search={search} />
          <button onClick={() => sortByRating(movies)}>Sort by Rating</button>
          <button onClick={() => sortByYear(movies)}>Sort by Year</button>
          <div className="movies">
            {
              loading && !error ? (
                <span>loading...</span>
              ) : error ? (
                <div className='errorMessage'>{error}</div>
              ) : (
                movies.map(movie => (
                  <Movie 
                    search={search} 
                    key={movie.imdbID} 
                    movie={movie} 
                  />
                ))
              )
            }
          </div>
        </div>
    </div>
  );
}

export default App;
