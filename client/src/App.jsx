import { useEffect, useState } from 'react'
import axios from "axios";
import {useDebounce} from 'react-use';

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import Search from './components/Search'
import LoadingSpinner from './components/LoadingSpinner';
import MovieCard from './components/MovieCard';
import { getTrendingMovies, updateSearch } from './appwrite';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
function App() {
  const [count, setCount] = useState(0);
  const [searchText,setSearchText] = useState('');
  const [isLoading,setIsLoading] = useState(false);
  const [errorMessage,setErrorMessage] = useState('');
  const [movies,setMovies] = useState([]);
  const [debouncedSearchText,setDebouncedSearchText] = useState('');
  const [trendingMovies,setTrendingMovies] = useState([]);
 
    const fetchMovies = async(query= '') =>{
      setIsLoading(true);
      try{
    const response = await axios.get(query ?`${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`:`${API_BASE_URL}/discover/movie?sort_by=popularity.desc`,{
      headers:{
        'Authorization': `Bearer ${API_KEY}`,
        'accept':'application/json'
      },
    });
 console.log(response.data);
 const result = response.data.results;

 setMovies(result || []);
 if (query && result.length > 0)
 {
 await updateSearch(searchText, result[0]);
 }

  }catch(e){
    console.log("Failed to fetch Movie",e);
    setErrorMessage("Faile to fetch movies. Try Again ");
  }finally{
  setIsLoading(false);
  }
   
};

const loadTrendingMovies = async() =>{
  try {
    const movies = await getTrendingMovies();

    setTrendingMovies(movies);
  } catch (error) {
    console.log(error);
    
  }
}

useDebounce(()=> setDebouncedSearchText(searchText),500,[searchText]);


useEffect(()=>{
fetchMovies(debouncedSearchText);
},[debouncedSearchText])

useEffect(()=>{
loadTrendingMovies();
},[])
  

  return (
    <>
    <Search searchText={searchText} setSearchText={setSearchText} />
    <div className='mx-auto max-w-7xl px-6 mt-16'>
      {trendingMovies.length > 0 && (
          <div className='flex flex-col gap-8 items-start' >
            <h2 className='text-2xl font-semibold text-black/70 sm:text-3xl'>Trending Movies</h2>
            <ul className='flex flex-row overflow-x-auto overflow-y-hidden gap-5 w-full hide-scrollbar'>
                {trendingMovies.map((movie, index)=>(
                <li className='min-w-[230px] flex flex-row items-center' key={movie.$id}>
                  <p className='fancy-text leading-[163px] text-nowrap'>{index+1}</p>
                  <img className='w-[127px] h-[163px] rounded-lg object-cover -ml-3.5' src={movie.poster_url} alt={movie.title}></img>
                </li>
                ))}
           
            </ul>
          </div>
      )}
    </div>
   <div>
    {isLoading? (<LoadingSpinner />):errorMessage? ({errorMessage}):
    (<ul>
          <div className='mx-auto max-w-7xl px-6'>
        
      <div className='flex flex-col items-start'> 
         <h2 className='text-2xl font-semibold text-black/70 sm:text-3xl mt-16 mb-8'>All Movies</h2>
  <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
    {movies.map((movie)=>
      <MovieCard key={movie.id} movie={movie}/>)}
  </div> </div></div> </ul>)}

   </div>
    </>
  )
}

export default App;
