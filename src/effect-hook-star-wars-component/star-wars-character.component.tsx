import {useStarWarsCharacter} from "./use-star-wars-character.hook";


export const StarWarsCharacterComponent = ({url} : {url:string}) => {
    const characterState = useStarWarsCharacter(url);

    return (
            <div style={{border:"1px solid red"}}>
                <p>{characterState?.name}</p>
                <p>{characterState?.birth_year}</p>
            </div>
    )
};
