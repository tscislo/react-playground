import {useState} from "react";
import {ListItemComponent, User} from "./list-item.component";

const users: User[] = [
    {name: 'Alice'},
    {name: 'Bob'},
    {name: 'Charlie'},
    {name: 'David'}
];

const ListContainerComponent = () => {
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const onSelect = (user: User) => {
        setSelectedUser(user);
    }
    return (
            <>
                <ul style={{'border': '2px orange solid'}}>
                    {users.map(user => (
                            <ListItemComponent key={user.name} user={user} onSelect={onSelect} selected={selectedUser === user}/>
                    ))}
                </ul>
            </>
    );

}

export default ListContainerComponent;
