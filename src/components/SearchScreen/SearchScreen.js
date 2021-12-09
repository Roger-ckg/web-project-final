import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";

const SearchScreen = () => {
    const params = useParams();
    const navigate = useNavigate();
    const movieTitle = params.searchTerm || 'harry potter'
    const [searchTerm, setSearchTerm] = useState(movieTitle);
    const [movies, setMovies] = useState([]);
    const findMovies = () =>
    {
        navigate(`/search/${searchTerm}`);
        fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=234b07dc`)
            .then(res => res.json())
            .then(results => {
                setMovies(results.Search)
            })
    }
    useEffect(findMovies, []);

    return(
        <div className="container mt-5">
            <button
                className="btn btn-primary float-end"
                onClick={findMovies}>
                Search
            </button>
            <input
                className="form-control"
                onChange={(e) =>
                    setSearchTerm(e.target.value)}
                value={searchTerm}
                placeholder="Search movie"
                style={{width: "70%"}}/>
            <ul className="list-group mt-4">
                {
                    movies &&
                    movies.map(movie =>
                        <li key={movie.imdbID} className="list-group-item">
                            <Link to={`/details/${movie.imdbID}`}
                                  style={{"text-decoration": "none"}}>
                                <div className="row">
                                    <img className="col-2"
                                         src={
                                             movie.Poster === 'N/A' ? '/images/defaultPoster.png'
                                                 : movie.Poster}/>
                                    <div className="col-10 align-self-center ">
                                        {movie.Title} ({movie.Year})
                                    </div>
                                </div>
                            </Link>
                        </li>
                    )
                }
            </ul>
            {
                !movies &&
                <p style={{color: 'tomato'}}>
                    Sorry! Cannot find result for <b><i>{movieTitle}.</i></b>
                </p>
            }
        </div>
    )
};
export default SearchScreen;