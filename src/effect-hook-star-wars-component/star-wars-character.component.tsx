import {useEffect, useState} from "react";
import {getDataFromApi} from "./effects-hook-star-wars.component";

interface Character {
    name: string;
    birth_year: string;
}

export const StarWarsCharacterComponent = ({url} : {url:string}) => {
    console.log("Rendering", url)
    const [characterState, setCharacter] = useState<Character | undefined>();

    useEffect(() => {
        const controller = new AbortController();
        getDataFromApi<Character>(url, controller).then((character) => setCharacter(character));
        return () => {
            controller.abort("StarWarsCharacterComponent Component unmounted. Aborting fetch.")
        }
    }, [url]);

    return (
            <div style={{border:"1px solid red"}}>
                <p>{characterState?.name}</p>
                <p>{characterState?.birth_year}</p>
            </div>
    )
};
