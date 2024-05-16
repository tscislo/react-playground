export const CharacterPowerComponent = ({character}: any) => {
    console.log('CharacterComponent')
    return (
        <div style={{'border': '2px violet solid'}}>
            <pre>{character?.name}</pre>
            <pre>{character?.dateOfBirth}</pre>
        </div>
    )
};
