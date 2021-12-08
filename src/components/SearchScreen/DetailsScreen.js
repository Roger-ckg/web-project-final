import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const DetailsScreen = () => {
    const liked = false;    // retrieve from db later
    const likes = 100;      // retrieve from db later
    const reviews = [       // retrieve from db later
        {
            user: {
                username: 'Alice',
                userid: 1
            },
            createdAt: '2020-10-01',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae viverra elit. Vivamus augue sapien, tristique ac commodo vel, tincidunt et est. Curabitur at dui neque. Praesent luctus arcu nec ipsum facilisis, sit amet hendrerit justo venenatis. In ac felis eget tortor faucibus consectetur. Curabitur sit amet dictum ipsum, ac maximus justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur id mollis ante. Vivamus eu lacinia tellus, vitae consequat enim. Sed fermentum, sapien id pretium scelerisque, libero massa posuere dolor, non tempus sapien quam sodales quam. Donec pulvinar feugiat quam. Nam pellentesque neque ac lectus mattis, sit amet dapibus lectus elementum. Donec in porttitor sapien. Morbi in velit et ipsum sodales sagittis.'
        },
        {
            user: {
                username: 'Bob',
                userid: 2
            },
            createdAt: '2021-08-28',
            review: 'Integer viverra sapien quis tristique luctus. Nulla gravida turpis nec ullamcorper porttitor. Vivamus posuere viverra urna non accumsan. Curabitur pharetra ultricies erat, eget rutrum ipsum bibendum quis. Nullam eros orci, interdum ut tristique et, egestas at nisi. Nunc volutpat metus justo, ac auctor ex vulputate vitae. Fusce semper arcu nunc, sit amet cursus lorem euismod a.'
        }
    ];
    const params = useParams();
    const [movieDetails, setMovieDetails] = useState({Actors: '', Ratings: []});
    const findMovieDetailsByImdbID = () =>
        fetch(`https://www.omdbapi.com/?i=${params.id}&apikey=234b07dc`)
            .then(res => res.json())
            .then(movie => setMovieDetails(movie));
    useEffect(findMovieDetailsByImdbID, []);

    // To be finished later
    const createReviewHandler = () => {}
    // To be finished later
    const likeMovieHandler = () => {}

    return(
        <div className="container mt-5">
            <h3>
                {movieDetails.Title} ({movieDetails.Year})
                {movieDetails.Rated !== 'N/A' ? ' ' + movieDetails.Rated: ''}
            </h3>
            <div className="row mt-4">
                <img className="col-2"
                     src={
                         movieDetails.Poster === 'N/A' ? '/images/defaultPoster.png'
                             : movieDetails.Poster}/>
                <div className="col-6 ps-3">
                    <div>Director: {movieDetails.Director}</div>
                    <div>Writer: {movieDetails.Writer}</div>
                    <div>Actors: {movieDetails.Actors}</div>
                    <div>Genre: {movieDetails.Genre}</div>
                    <div>Country: {movieDetails.Country}</div>
                    <div>Language: {movieDetails.Language}</div>
                    <div>Release date: {movieDetails.Released}</div>
                    <div>Length: {movieDetails.Runtime}</div>
                </div>
                <div className="col-4">
                    <h5>Ratings</h5>
                    <div>IMDb: {movieDetails.imdbRating}</div>
                    {
                        movieDetails.Ratings.map(rating =>
                            <div>{rating.Source}: {rating.Value}</div>)
                    }
                    <div className="mt-3" onClick={likeMovieHandler}>
                        {
                            liked && <i className="fas fa-heart me-2 text-danger"
                                        style={{fontSize: "1.5em"}}></i>
                        }
                        {
                            !liked && <i className="far fa-heart me-2"
                                         style={{fontSize: "1.5em"}}></i>
                        }
                        <span className="align-self-center" style={{fontSize: 24}}>{likes}</span>
                    </div>
                </div>
            </div>

            <div className="mt-4">
                <h4>Storyline</h4>
                <p>{movieDetails.Plot}</p>
            </div>

            <div className="mt-4">
                <h4>Cast</h4>
                <ul className="list-group">
                    {
                        movieDetails.Actors.split(',').map(actor =>
                            <li key={actor} className="list-group-item" style={{width: "50%"}}>
                                {actor}
                            </li>
                        )
                    }
                </ul>
            </div>

            <div className="mt-4">
                <button
                    className="btn btn-success float-end"
                    onClick={createReviewHandler}>
                    Write a review
                </button>
                <h4>Review</h4>
                {
                    reviews.length === 0 &&
                    <p>
                        There are no reviews about this movie yet.
                        Become the first one to write a review.
                    </p>

                }
                <ul className="list-group">
                    {
                        reviews.map(review =>
                            <li key={review.user.userid} className="list-group-item">
                                <Link to={`/profile/${review.user.userid}`}
                                    style={{"text-decoration": "none"}}>
                                    {review.user.username}
                                </Link>
                                <span className="ms-2 text-dark">{review.createdAt}</span>
                                <p>{review.review}</p>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
};
export default DetailsScreen;