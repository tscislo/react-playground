import {useCallback, useEffect, useState} from "react";
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

export const EffectsHookStarWarsComponent = () => {
    console.log("EffectsHookStarWarsComponent");
    const [moviesState, setMovies] = useState<Movie[]>();
    const [selectedMovieEpisodeId, setSelectedMovieEpisodeId] = useState<number | undefined>(undefined);

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
        setSelectedMovieEpisodeId(episodeId);
    }, []);

    const getSelectedMovie = useCallback(() =>
            moviesState?.find((movie) => movie.episode_id === selectedMovieEpisodeId), [selectedMovieEpisodeId]);

    return (
            <div style={{'border': '2px orange solid'}}>
                <h2>Star Wars Episodes</h2>
                {(moviesState?.length===0) ?
                        <div>Loading...</div>:
                        <>
                            <select onChange={(e) => onMovieSelected(parseInt(e.target.value, 10))}>
                                <option value={undefined}>--Select Episode--</option>
                                {moviesState?.map(episode => (
                                        <option
                                                value={episode.episode_id}
                                                key={episode.episode_id}>{episode.title}</option>
                                ))}
                            </select>
                            {selectedMovieEpisodeId ?
                                    <>
                                        <h4>Selected episode: {getSelectedMovie()?.title}</h4>
                                        <div> {getSelectedMovie()?.opening_crawl} </div>
                                        <div> {getSelectedMovie()?.characters
                                                .map((characterUrl) => <StarWarsCharacterComponent key={characterUrl}
                                                                                                   url={characterUrl}/>)} </div>
                                    </>
                                    :<></>}
                        </>
                }

            </div>
    );
}
