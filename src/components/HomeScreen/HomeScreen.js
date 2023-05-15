import React from "react";
import Nav from "../Nav/Nav"
import Banner from "../Banner/Banner"
import Row from "../Row/Row"
import "./homescreen.css"
import requests from "../../services/request";

function HomeScreen() {
    return (
        <div className="homescreen">
            <Nav />
            <Banner />
            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comendy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </div>
    )
};

export default HomeScreen;