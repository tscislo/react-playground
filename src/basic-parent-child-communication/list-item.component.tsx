export interface User {
    name: string
}

export const ListItemComponent = ({user, onSelect, selected}: {
    user: User,
    onSelect: (user: User) => void,
    selected: boolean
}) => {
    return (
            <li style={{'color': (selected ? 'green':'black')}}>
                <span>{user.name}</span>
                <button onClick={() => onSelect(user)}>Select</button>
            </li>
    );
}
