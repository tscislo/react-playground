import {useEffect, useState} from "react";
import {getDataFromApi} from "./effects-hook-star-wars.component";

interface Character {
    name: string;
    birth_year: string;
}

export const useStarWarsCharacter = (url: string) => {
    const [characterState, setCharacter] = useState<Character | undefined>();

    useEffect(() => {
        const controller = new AbortController();
        getDataFromApi<Character>(url, controller).then((character) => setCharacter(character));
        return () => {
            controller.abort("useStarWarsCharacter - Aborting fetch!")
        }
    }, [url]);

    return characterState;
}
