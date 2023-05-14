import { useEffect, useState } from "react";
import "./row.css";
import axios from "../../services/axios";

function Row({ title = "", fetchUrl = "", isLargeRow = false }) {
    const [movies, setMovies] = useState([]);

    const baseUrl = 'https://image.tmdb.org/t/p/original/';

    async function fetchData() {
        const req = await axios.get(fetchUrl);
        const { results = [] } = req.data;
        setMovies(results);
    }

    useEffect(() => {
        fetchData();
    }, [fetchUrl]);

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.length > 0 ?
                    movies.map((movie) => {
                        return (
                            movie.backdrop_path ? (
                                <img
                                    className={`row__poster ${isLargeRow ? 'row__posterLarge' : ''}`}
                                    key={movie.id}
                                    src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                                    alt={movie.name}
                                />) : <></>
                        )
                    })
                    : null}
            </div>
        </div>
    );
};

export default Row;