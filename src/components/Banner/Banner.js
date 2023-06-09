import { useEffect, useState } from "react";
import "./banner.css";
import axios from "../../services/axios";
import requests from "../../services/request"

function Banner() {
    const [movie, setMovie] = useState({ name: '', overview: '' });

    async function fetchMovie() {
        const req = await axios.get(requests.fetchNetflixOriginals);
        const { results = [] } = req.data;
        const mIndex = Math.floor(Math.random() * results.length - 1)
        setMovie(results[mIndex]);
    }

    useEffect(() => {
        fetchMovie();
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }

    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url("${movie.backdrop_path ? 'https://image.tmdb.org/t/p/original/' + movie.backdrop_path : ''}")`,
            backgroundPosition: "center center"
        }}>
            <div className="banner__contents">
                <h1 className="banner__title">{movie.name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(movie.overview, 150)}
                </h1>
            </div>
            <div className="banner--fadeBottom" />
        </header >
    )
};

export default Banner;