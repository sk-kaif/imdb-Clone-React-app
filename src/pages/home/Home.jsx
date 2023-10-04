import React, { useEffect, useState } from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';


import './home.css'
import MoviesList from '../../components/movieList/MoviesList';

const Home = () => {
    const [popularMovies, setPopularMovies] = useState([])

    const fetchMovie= async()=>{
        try {
            const resp = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=5db4cb5a49c5e63d8d8e4f2bc92eb44a&language=en-Us')
            const data = await resp.json()
            setPopularMovies(data.results)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchMovie()
    },[])
    
    // console.log(popularMovies);
  return (
    <>
    <div className='poster'>
        <Carousel showThumbs={false} autoPlay={false} transitionTime={3} infiniteLoop={true} showStatus={false} >
        {
            popularMovies.map((movie)=>(
                <Link to={`/movie/${movie.id}`} key={movie.id}>
                    <div className="posterImage">
                        <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
                    </div>
                    <div className="posterCoverOverlay">
                    
                        <div className="posterImage_title">{movie? movie.original_title : ""}</div>

                        <div className="posterImage_runtime">
                            {movie ? movie.release_date : ""  }
                            <span className='posterImage_rating'>
                                {movie ? movie.vote_average : ""}
                                <i className='fas fa-star'></i>
                            </span>
                        </div>

                        <div className="posterImage_description">
                            {movie ? movie.overview : ""}
                        </div>
                    </div>
                </Link>
            ))
        }
        </Carousel>

    </div>
        <MoviesList />
    </>
  )
}

export default Home