import {useGetData} from "./use-get-data.hook";

interface Character {
    name: string;
    birth_year: string;
}

export const StarWarsCharacterComponent = ({url, nameFilter}: { url: string, nameFilter: string }) => {
    const characterState = useGetData<Character>(url);

    return (
            <>
                {characterState?.name?.includes(nameFilter) ? <div style={{border: "1px solid red"}}>
                    <p>{characterState?.name}</p>
                    <p>{characterState?.birth_year}</p>
                </div>:null}
            </>
    )
};
