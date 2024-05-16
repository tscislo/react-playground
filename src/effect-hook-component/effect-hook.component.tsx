import {useEffect, useState} from "react";
import {CharacterComponent} from "../character-component/character.component";
import {CharacterPowerComponent} from "../character-component/character-power.component";

const getPrimitiveFromApi = async (url: string, controller: AbortController) => {
    const signal = controller.signal;
    const response = await fetch(url, {signal});
    return await response.json();
}

export const EffectHookComponent = () => {
    const [character, setCharacter] = useState<any>();
    const [characterId, setCharacterId] = useState<string>();
    const [allCharacters, setAllCharacters] = useState<any[] | null>(null);

    useEffect(() => {
        const controller = new AbortController();
        getPrimitiveFromApi('https://hp-api.onrender.com/api/characters', controller)
            .then(setAllCharacters);
        return () => {
            controller.abort("Component unmounted. Aborting fetch.");
        }
    }, []);

    useEffect(() => {
        const controller = new AbortController();
        if (characterId) {
            getPrimitiveFromApi(`https://hp-api.onrender.com/api/character/${characterId}`, controller)
                .then((characters) => setCharacter(characters[0]));
        }
        return () => {
            controller.abort("Component unmounted. Aborting fetch.");
        }
    }, [characterId]);

    return (
        <div style={{'border': '2px orange solid'}}>
            {!allCharacters
                ? (<div>Loading...</div>)
                : (
                    <>
                        <select onChange={(event) => setCharacterId(event.target.value)}>
                            {allCharacters?.map((characterItem) => (
                                <option value={characterItem.id} key={characterItem.id}>{characterItem.name}</option>))}
                        </select>
                        <CharacterComponent name={character?.name} dateOfBirth={character?.dateOfBirth}/>
                        <CharacterPowerComponent character={character}/>
                    </>
                )
            }
        </div>
    )
}
