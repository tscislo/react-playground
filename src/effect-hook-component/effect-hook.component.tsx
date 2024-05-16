import {useEffect, useState} from "react";


export const EffectHookComponent = () => {
    const [character, setCharacter] = useState<any>();
    const [characterId, setCharacterId] = useState<string>();
    const [allCharacters, setAllCharacters] = useState<any[] | null>(null);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        fetch('https://hp-api.onrender.com/api/characters', {signal})
            .then(response => response.json())
            .then(setAllCharacters);
        return () => {
            controller.abort("Component unmounted. Aborting fetch.");
        }
    }, []);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        if (characterId) {
            fetch(`https://hp-api.onrender.com/api/character/${characterId}`, {signal})
                .then(response => response.json())
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
                            {allCharacters?.map((character) => (
                                <option value={character.id} key={character.id}>{character.name}</option>))}
                        </select>
                        <pre>{character?.name}</pre>
                        <pre>{character?.dateOfBirth}</pre>
                    </>
                )
            }


        </div>
    )
}
