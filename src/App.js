import React , { useState } from 'react';
import { SearchContext} from '../src/component/context/SearchContext';
import ShowMovies from './component/showmovies/ShowMovies';
import './App.css'
import SearchBar from './component/searchbar/SearchBar'
import '../node_modules/bootstrap/dist/css/bootstrap.css';



function App() {
    const [searchValue , setSearchValue] = useState('');
    const [result , setResult] = useState([]);

    async function handleChangeValue(value){
      setSearchValue(value);
      const API_KEY = process.env.REACT_APP_API_KEY ;
     
      const res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${value}`);
      const data =await res.json();
      setResult(data.Search);
      
    }
    const handleSearchValue = {
      handleChangeValue,
      title:searchValue,
      movies : result
      
    }
    return(
      <SearchContext.Provider value={handleSearchValue}>
          <div className="container pt-4">
            <div className="card border-warning  card-body">
              <div className="card-header bg-light ">
                <span className="h1 display-4 ">Search Movies</span><a href="http://sadeghakbari.gigfa.com"><span className="float-right text-danger h4">About Me</span></a>
                  <SearchBar/>
              </div><hr className="bg-warning"/>
              <div className="card-body text-center">
                      <ShowMovies/>
              </div>
            </div>
              
          </div>
      </SearchContext.Provider>
    )
}

export default App;

 