export const RegularComponent = ({user}: {user: {name: string}}) => {
    console.log('RegularComponent rendered')
    return (
            <div>
                I will re-render each time my parent re-renders
                {user.name}
            </div>
    )
};
