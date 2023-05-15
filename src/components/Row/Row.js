import React, { useEffect, useState } from "react";
import "./row.css";
import axios from "../../services/axios";

function Row({ title = "", fetchUrl = "", isLargeRow = false }) {
    const [movies, setMovies] = useState([]);

    const baseUrl = 'https://image.tmdb.org/t/p/original/';

    async function fetchData() {
        const req = await axios.get(fetchUrl);
        const { results = [] } = req.data;
        console.log(results.length)
        setMovies(results);
    }

    useEffect(() => {
        fetchData();
    }, [fetchUrl]);

    return (
        <div className="row" key={title}>
            <h2>{title}</h2>
            <div className="row__posters">
                {
                    movies.length > 0 ?
                        movies.map((movie, i) => {
                            // poster_path
                            return (
                                movie.backdrop_path ? (
                                    <img
                                        className={`row__poster ${isLargeRow ? 'row__posterLarge' : ''}`}
                                        src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                                        alt={movie.name}
                                        key={movie.id}
                                    />
                                ) : movie.poster_path ? (
                                    <img
                                        className={`row__poster ${isLargeRow ? 'row__posterLarge' : ''}`}
                                        src={`${baseUrl}${movie.poster_path}`}
                                        alt={movie.name}
                                        key={movie.id}
                                    />
                                )
                                    : null
                            )
                        })
                        : null
                }
            </div>
        </div>
    );
};

export default Row;