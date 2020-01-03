import React , { useContext } from 'react'
import {SearchContext} from '../context/SearchContext';
import SpinnerShow from '../spinner/Spinner'
function ShowMovies() {
    const {movies} = useContext(SearchContext);
    console.log(movies);
    return (
        <React.Fragment>
            {
                movies?
                movies.map(
                    (movie , index)=>{
                        return(
                        <div key={index}>
                                <div  className="row ">
                                    <div className="col-lg-4">
                                        <img style={{width : '200px' , margin:'0 auto'}} src={movie.Poster} alt=""/>
                                        
                                    </div>
                                    <div className="col-lg-8 pt-4">
                                            <ul className="listgroup pt-4">
                                            <h2 className="text-danger">Details</h2>
                                                <li className="list-group-item"><span className="h5">Name</span> : {movie.Title}</li>
                                                <li className="list-group-item"><span className="h5">Year</span> : {movie.Year}</li>
                                                <li className="list-group-item"><span className="h5">Type</span> : {movie.Type}</li>

                                            </ul>
                                    </div>
                                </div><hr className="bg-warning my-3"/>
                        </div>
                        )
                    }
                ):<SpinnerShow/>
            }
        </React.Fragment>
    )
}

export default ShowMovies;
