export const CharacterComponent = ({name, dateOfBirth}: {name : string, dateOfBirth: string}) => {
    console.log('CharacterComponent')
    return (
        <div style={{'border': '2px pink solid'}}>
            <pre>{name}</pre>
            <pre>{dateOfBirth}</pre>
        </div>
    )
};
