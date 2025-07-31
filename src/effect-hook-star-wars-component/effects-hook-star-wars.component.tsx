import {useCallback, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import {StarWarsCharacterComponent} from "./star-wars-character.component";

interface Movie {
    title: string;
    episode_id: number;
    opening_crawl: string;
    characters: string[];
}

export async function getDataFromApi<T>(url: string, controller: AbortController): Promise<T> {
    const signal = controller.signal;
    const res = await fetch(url, {signal});
    return await res.json();
}

const EffectsHookStarWarsComponent = () => {
    console.log("EffectsHookStarWarsComponent");
    const [moviesState, setMovies] = useState<Movie[]>();
    let { movieId } = useParams();
    let navigate = useNavigate();
    const [nameFilter, setNameFilter] = useState<string>("");

    useEffect(() => {
        const controller = new AbortController();
        getDataFromApi<Movie[]>("https://swapi.info/api/films", controller).then(
                (movies) => setMovies(movies)
        )
        return () => {
            controller.abort("EffectsHookStarWarsComponent Component unmounted. Aborting fetch.");
        }
    }, []);

    const onMovieSelected = useCallback((episodeId: number) => {
        console.log("onMovieSelected", episodeId);
        navigate('/effects-hook-star-wars/' +  episodeId);
    }, []);

    const getSelectedMovie = useCallback(() =>
            moviesState?.find((movie) => movie.episode_id === parseInt(movieId ?? "0")), [moviesState, movieId]);

    return (
            <div style={{'border': '2px orange solid'}}>
                <h2>Star Wars Episodes</h2>
                {(moviesState?.length===0) ?
                        <div>Loading...</div>:
                        <>
                            <select
                                    value={movieId}
                                    onChange={(e) => onMovieSelected(parseInt(e.target.value, 10))}>
                                <option value={undefined}>--Select Episode--</option>
                                {moviesState?.map(episode => (
                                        <option
                                                value={episode.episode_id}
                                                key={episode.episode_id}>{episode.title}</option>
                                ))}
                            </select>
                            <input  placeholder={"search by character name"}
                                    value={nameFilter} onChange={(e) => setNameFilter(e.target.value)} />
                            {movieId ?
                                    <>
                                        <h4>Selected episode: {getSelectedMovie()?.title}</h4>
                                        <div> {getSelectedMovie()?.opening_crawl} </div>
                                        <div> {getSelectedMovie()?.characters
                                                .map((characterUrl) => <StarWarsCharacterComponent
                                                                                                    nameFilter={nameFilter}
                                                                                                    key={characterUrl}
                                                                                                    url={characterUrl}/>)} </div>
                                    </>
                                    :<></>}
                        </>
                }

            </div>
    );
}

export default EffectsHookStarWarsComponent;
