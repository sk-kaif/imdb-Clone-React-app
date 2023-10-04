import { useState , useEffect} from "react"
import { useParams } from "react-router-dom"
import './movieList.css'
import Card from "../card/Card"

const MoviesList = () => {
    const [movieList, setMovieList] = useState([])

    const {type} = useParams()

    const getData = async() => {
        try {
            const resp = await fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=5db4cb5a49c5e63d8d8e4f2bc92eb44a&language=en-Us`)
            const data = await resp.json()
            setMovieList(data.results)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    // console.log(movieList);


  return (
    <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Card movie={movie} key={movie.id}/>
                    ))
                }
            </div>
        </div>
  )
}

export default MoviesList